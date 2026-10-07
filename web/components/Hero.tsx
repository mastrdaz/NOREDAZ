import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Monogram } from "@/components/Brand";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">{site.hero.eyebrow}</p>
          <h1 id="hero-title">
            Real possibilities
            <br />
            for <span>what’s next.</span>
          </h1>
          <p className="hero-lead">{site.hero.lead}</p>
          <p className="hero-description">{site.description}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/products/">
              {site.hero.primary}
              <Icon name="arrow" />
            </Link>
            <Link className="button button-ghost" href="/contact/">
              {site.hero.secondary}
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-outline art-outline-one" />
          <div className="art-outline art-outline-two" />
          <div className="monogram-platform" />
          <Monogram className="hero-monogram hero-monogram-shadow" />
          <Monogram className="hero-monogram" />
          <div className="art-caption">
            <span>
              INDUSTRY FOR A<br />
              BRIGHTER TOMORROW.
            </span>
            <span className="art-caption-line" />
          </div>
          <span className="art-footnote">
            NOIRDAZ / POSSIBILITIES IN PROGRESS
          </span>
        </div>
        <div className="hero-bottom">
          <span>SOFTWARE & SERVICES. BUILT AROUND YOU.</span>
          <a href="#our-approach">
            Discover the difference<span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <Monogram className="page-monogram" />
      </div>
    </section>
  );
}
