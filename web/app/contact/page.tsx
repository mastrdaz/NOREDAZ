import type { Metadata } from "next";
import { PageHero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation about software, managed services, or a practical idea for your organization.",
};
export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Good things start with a conversation."
        description="Have a project in mind, a question about our products, or a challenge to work through? This is where we’ll connect."
      />
      <section className="section">
        <div className="container contact-layout">
          <aside>
            <p className="eyebrow">LET’S TALK</p>
            <h2>
              What’s next
              <br />
              for you?
            </h2>
            <p>
              Software, services, or something new. A little context will help
              us understand where to start.
            </p>
            <div className="contact-details">
              <h3>Contact details</h3>
              {site.contact.email ? (
                <a href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>
              ) : (
                <p>Business email to be confirmed.</p>
              )}
              {site.contact.phone && <p>{site.contact.phone}</p>}
              {site.contact.address && <p>{site.contact.address}</p>}
              <span className="status-tag">BEFORE LAUNCH</span>
            </div>
            <p className="contact-footnote">
              Direct contact details and a working enquiry channel will be added
              before this website launches.
            </p>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
