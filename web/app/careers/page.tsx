import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Hero";
import { Icon } from "@/components/Icon";
export const metadata: Metadata = { title: "Careers" };
export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="CAREERS"
        title="Room to grow, together."
        description="A future home for opportunities at Noirdaz Industries."
      />
      <section className="section">
        <div className="container narrow-content">
          <span className="status-tag">COMING LATER</span>
          <h2>Future opportunities.</h2>
          <p>
            There are no roles listed on this website yet. When opportunities
            are ready to share, this page will include the role details and how
            to apply.
          </p>
          <Link href="/about/" className="text-link">
            Learn about Noirdaz
            <Icon name="arrow" />
          </Link>
        </div>
      </section>
    </>
  );
}
