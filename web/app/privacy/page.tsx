import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/LegalPlaceholder";
export const metadata: Metadata = { title: "Privacy · Draft" };
export default function Privacy() {
  return <LegalPlaceholder kind="Privacy" />;
}
