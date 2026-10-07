import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/LegalPlaceholder";
export const metadata: Metadata = { title: "Terms · Draft" };
export default function Terms() {
  return <LegalPlaceholder kind="Terms" />;
}
