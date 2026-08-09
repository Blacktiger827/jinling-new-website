import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "China Stainless Market | Prices and Exports",
  description:
    "China stainless steel market notes on prices, inventory, export policy, timing, and sourcing decisions for international buyers.",
  alternates: {
    canonical: "/resources/market-insights",
  },
};

export default function InsightsCompatibilityPage() {
  redirect("/resources/market-insights");
}
