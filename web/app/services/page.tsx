import type { Metadata } from "next";
import { PageHero } from "@/components/Hero";
import { SolutionDetail } from "@/components/Cards";
import { CTABanner } from "@/components/CTABanner";
import { services } from "@/lib/site";
export const metadata: Metadata = {
  title: "Services",
  description:
    "Website hosting, maintenance, digital infrastructure, and ongoing support for small organizations and businesses.",
};
export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title="A stronger digital foundation."
        description="Thoughtful hosting, website care, and practical support for small organizations and businesses."
      />
      <section className="section">
        <div className="container detail-list">
          {services.map((service, index) => (
            <SolutionDetail key={service.id} solution={service} index={index} />
          ))}
          <p className="availability-note">
            Services are scoped individually. Availability, support hours,
            pricing, and terms have not been finalized.
          </p>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
