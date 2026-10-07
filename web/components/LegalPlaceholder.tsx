import Link from "next/link";
import { PageHero } from "@/components/Hero";
export function LegalPlaceholder({ kind }: { kind: "Privacy" | "Terms" }) {
  return (
    <>
      <PageHero
        eyebrow="DRAFT · NOT FINAL"
        title={
          kind === "Privacy"
            ? "Privacy notice placeholder."
            : "Website terms placeholder."
        }
        description="This page is reserved for the final policy. It is not an approved legal document."
      />
      <section className="section">
        <div className="container narrow-content">
          <span className="status-tag">REVIEW REQUIRED BEFORE LAUNCH</span>
          <h2>
            {kind === "Privacy"
              ? "A clear policy comes next."
              : "Clear terms come next."}
          </h2>
          <p>
            {kind === "Privacy"
              ? "The final privacy notice needs to reflect the actual hosting provider, contact process, data handling, retention, and applicable requirements. Those details are still being confirmed."
              : "The final website terms need to reflect the confirmed company details, website use, and applicable requirements. Product or service agreements will need separate review where appropriate."}
          </p>
          <p>
            The current website skeleton has no analytics, accounts, or
            connected contact submission service.
          </p>
          <Link href="/contact/" className="text-link">
            View contact information<span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
