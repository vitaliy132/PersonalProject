import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/AboutPage";

export const metadata: Metadata = {
  title: "About — Northline Digital",
  description:
    "Northline Digital is a creative studio based in Leeds, helping ambitious businesses build stronger brands, better websites and a more powerful online presence.",
};

export default function AboutRoute() {
  return <AboutPage />;
}
