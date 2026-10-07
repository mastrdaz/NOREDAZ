import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow-content">
        <p className="eyebrow">404 · PAGE NOT FOUND</p>
        <h1>A different way forward.</h1>
        <p>
          We couldn’t find that page. Let’s get you back to the right place.
        </p>
        <Link href="/" className="button button-primary">
          Back to home<span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
