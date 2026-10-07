import Link from "next/link";
import { Brand } from "@/components/Brand";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Link href="/" aria-label={`${site.name} home`}>
              <Brand />
            </Link>
            <p className="footer-tagline">{site.tagline}</p>
          </div>
          <nav aria-label="Footer navigation" className="footer-nav">
            {site.nav.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <Link href="/careers/">Careers</Link>
          </nav>
          <div className="footer-socials">
            <span className="eyebrow">STAY CONNECTED</span>
            {site.socials.map((social) =>
              social.href ? (
                <a key={social.label} href={social.href}>
                  {social.label}
                </a>
              ) : (
                <span key={social.label} className="social-placeholder">
                  {social.label}
                  <span>Coming soon</span>
                </span>
              ),
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <small>
            © {new Date().getFullYear()} {site.name}
          </small>
          <div>
            {site.legal.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label} <span className="legal-draft">(draft)</span>
              </Link>
            ))}
          </div>
          <span className="footer-motto">PEOPLE. IDEAS. PROGRESS.</span>
        </div>
      </div>
    </footer>
  );
}
