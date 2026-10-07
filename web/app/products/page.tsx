import type { Metadata } from "next";
import { PageHero } from "@/components/Hero";
import { SolutionDetail } from "@/components/Cards";
import { CTABanner } from "@/components/CTABanner";
import { products } from "@/lib/site";
export const metadata: Metadata = {
  title: "Products",
  description:
    "Practical software for workforce scheduling, coverage management, and everyday operations.",
};
export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="OUR PRODUCTS"
        title="Useful by design."
        description="Focused software for the everyday work that keeps people and organizations moving."
      />
      <section className="section">
        <div className="container detail-list">
          {products.map((product, index) => (
            <SolutionDetail key={product.id} solution={product} index={index} />
          ))}
          <p className="availability-note">
            This is an early overview. Product features, availability, and
            pricing will be confirmed before launch.
          </p>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
