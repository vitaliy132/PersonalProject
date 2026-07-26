import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/AboutPage";

export const metadata: Metadata = {
  title: "About — Northline Digital",
  description:
    "A Leeds creative studio helping ambitious businesses build stronger brands, better websites and digital experiences that deliver long-term results.",
};

export default function AboutRoute() {
  return <AboutPage />;
}
