import Link from "next/link";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">{site.cta.eyebrow}</p>
          <h2>{site.cta.title}</h2>
        </div>
        <p>{site.cta.description}</p>
        <Link className="button button-primary" href={site.cta.href}>
          {site.cta.label}
          <Icon name="arrow" />
        </Link>
      </div>
    </section>
  );
}
