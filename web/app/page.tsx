import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ValueCard, SolutionCard } from "@/components/Cards";
import { CTABanner } from "@/components/CTABanner";
import { Icon } from "@/components/Icon";
import { featuredSolutions, values } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <section
        id="our-approach"
        className="values-section"
        aria-label="Our values"
      >
        <div className="container values-grid">
          {values.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </section>
      <section
        className="section featured-section"
        aria-labelledby="solutions-title"
      >
        <div className="container">
          <div className="section-topline">
            <SectionHeading
              eyebrow="FEATURED SOLUTIONS"
              title="Built for real life."
              description="Software and services that make everyday work a little clearer, simpler, and stronger."
              id="solutions-title"
            />
            <Link href="/products/" className="text-link">
              Explore our solutions
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="solutions-grid">
            {featuredSolutions.map((solution, index) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="approach-section">
        <div className="container approach-inner">
          <p className="eyebrow">THE NOIRDAZ APPROACH</p>
          <h2>
            Big-picture thinking.
            <br />
            <span>Down-to-earth solutions.</span>
          </h2>
          <div>
            <p>
              We believe progress comes from making things work better for
              people. That means listening first, keeping things practical, and
              building with the next step in mind.
            </p>
            <Link href="/about/" className="text-link">
              Get to know Noirdaz
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
