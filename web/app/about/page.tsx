import type { Metadata } from "next";
import { PageHero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ValueCard } from "@/components/Cards";
import { CTABanner } from "@/components/CTABanner";
import { values, site } from "@/lib/site";
export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Noirdaz Industries: a company taking a practical, people-focused approach to software and services.",
};
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT NOIRDAZ"
        title="People first. Progress together."
        description="A company built around a simple idea: useful work can create meaningful possibilities."
      />
      <section className="section">
        <div className="container about-intro">
          <SectionHeading
            eyebrow="WHO WE ARE"
            title="Practical work. Lasting purpose."
          />
          <div>
            <p className="large-copy">{site.description}</p>
            <p>
              Our direction brings software, managed services, hosting, and
              future business tools under one public-facing brand. It gives each
              idea room to grow while keeping a shared focus on the people it
              serves.
            </p>
            <p>
              We’re building thoughtfully, starting with real needs and leaving
              space for what comes next.
            </p>
          </div>
        </div>
      </section>
      <section className="section about-values">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT GUIDES US"
            title="A clear set of principles."
          />
          <div className="values-grid">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
