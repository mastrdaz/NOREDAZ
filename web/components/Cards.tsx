import Link from "next/link";
import { Icon } from "@/components/Icon";
import type { IconName, Solution } from "@/lib/site";

export function ValueCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: IconName;
}) {
  return (
    <article className="value-card">
      <span className="icon-tile">
        <Icon name={icon} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
export function SolutionCard({
  solution,
  index = 0,
}: {
  solution: Solution;
  index?: number;
}) {
  return (
    <article className="solution-card">
      <div className="solution-card-top">
        <span className="icon-tile">
          <Icon name={solution.icon} />
        </span>
        <span className="card-index">0{index + 1}</span>
      </div>
      <p className="card-category">{solution.category}</p>
      <h3>{solution.title}</h3>
      <p>{solution.description}</p>
      <Link
        href={solution.href}
        className="text-link"
        aria-label={`Learn more about ${solution.title}`}
      >
        Learn More
        <Icon name="arrow" />
      </Link>
    </article>
  );
}
export function SolutionDetail({
  solution,
  index = 0,
}: {
  solution: Solution;
  index?: number;
}) {
  return (
    <article id={solution.id} className="solution-detail">
      <div className="detail-visual" aria-hidden="true">
        <span className="detail-number">0{index + 1}</span>
        <Icon name={solution.icon} />
        <span>{solution.category}</span>
      </div>
      <div className="detail-copy">
        <p className="eyebrow">{solution.category}</p>
        <h2>{solution.title}</h2>
        <p className="detail-intro">{solution.description}</p>
        <p>{solution.detail}</p>
        <Link href="/contact/" className="text-link">
          Start a conversation
          <Icon name="arrow" />
        </Link>
      </div>
    </article>
  );
}
