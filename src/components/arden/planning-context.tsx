"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ardenGoals, ardenRiskProfiles } from "@/lib/arden-content";

type RiskId = (typeof ardenRiskProfiles)[number]["id"];

type PlanningState = {
  selectedGoalIds: string[];
  monthlyContribution: number;
  horizonYears: number;
  riskId: RiskId;
  toggleGoal: (id: string) => void;
  setMonthlyContribution: (value: number) => void;
  setHorizonYears: (value: number) => void;
  setRiskId: (id: RiskId) => void;
  projectedValue: number;
  totalTarget: number;
};

const PlanningContext = createContext<PlanningState | null>(null);

function projectValue(
  monthly: number,
  years: number,
  annualReturn: number,
  seed: number,
) {
  const months = years * 12;
  const r = annualReturn / 12;
  let total = seed;
  for (let i = 0; i < months; i += 1) {
    total = total * (1 + r) + monthly;
  }
  return Math.round(total);
}

export function PlanningProvider({ children }: { children: ReactNode }) {
  const [selectedGoalIds, setSelectedGoalIds] = useState<string[]>([
    ardenGoals[0].id,
  ]);
  const [monthlyContribution, setMonthlyContribution] = useState(8500);
  const [horizonYears, setHorizonYears] = useState(12);
  const [riskId, setRiskId] = useState<RiskId>("balance");

  const toggleGoal = useCallback((id: string) => {
    setSelectedGoalIds((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id],
    );
  }, []);

  const risk = ardenRiskProfiles.find((r) => r.id === riskId) ?? ardenRiskProfiles[1];
  const selectedGoals = ardenGoals.filter((g) => selectedGoalIds.includes(g.id));
  const totalTarget = selectedGoals.reduce((sum, g) => sum + g.target, 0);
  const seed = Math.max(totalTarget * 0.22, 250_000);
  const projectedValue = projectValue(
    monthlyContribution,
    horizonYears,
    risk.expectedReturn,
    seed,
  );

  const value = useMemo(
    () => ({
      selectedGoalIds,
      monthlyContribution,
      horizonYears,
      riskId,
      toggleGoal,
      setMonthlyContribution,
      setHorizonYears,
      setRiskId,
      projectedValue,
      totalTarget,
    }),
    [
      selectedGoalIds,
      monthlyContribution,
      horizonYears,
      riskId,
      toggleGoal,
      projectedValue,
      totalTarget,
    ],
  );

  return (
    <PlanningContext.Provider value={value}>{children}</PlanningContext.Provider>
  );
}

export function usePlanning() {
  const ctx = useContext(PlanningContext);
  if (!ctx) {
    throw new Error("usePlanning must be used within PlanningProvider");
  }
  return ctx;
}
