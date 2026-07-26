import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/AboutPage";

export const metadata: Metadata = {
  title: "About — Northline Digital",
  description:
    "Creative thinking. Modern technology. Northern ambition. A Leeds-based creative studio helping businesses build memorable brands, high-performance websites and digital experiences designed for growth.",
};

export default function AboutRoute() {
  return <AboutPage />;
}
