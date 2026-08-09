import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Stainless Steel Guides | Jinling Metals",
  description:
    "Stainless steel guides for grade selection, surface finish, corrosion, processing, inspection, documentation, and buying decisions.",
  alternates: {
    canonical: "/resources/stainless-steel-guides",
  },
};

export default function KnowledgeBaseCompatibilityPage() {
  redirect("/resources/stainless-steel-guides");
}
