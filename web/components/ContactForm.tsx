"use client";

import { useRef, useState } from "react";
import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";

export function ContactForm() {
  const [reviewed, setReviewed] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={form}
      className="contact-form"
      aria-describedby="contact-notice"
      onSubmit={(event) => {
        event.preventDefault();
        setReviewed(true);
      }}
    >
      <div className="form-heading">
        <span className="status-tag">PREVIEW ONLY</span>
        <h2>Tell us what you have in mind.</h2>
        <p id="contact-notice">{site.contact.notice}</p>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            name="email"
            autoComplete="email"
            type="email"
            required
            maxLength={254}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <label htmlFor="contact-interest">What can we help with?</label>
      <select id="contact-interest" name="interest" defaultValue="">
        <option value="" disabled>
          Select a topic
        </option>
        <option>Products</option>
        <option>Managed services</option>
        <option>A project or idea</option>
        <option>Something else</option>
      </select>
      <label htmlFor="contact-message">Your message</label>
      <textarea
        id="contact-message"
        name="message"
        rows={5}
        required
        maxLength={4000}
        placeholder="A little about your idea or challenge…"
      />
      <p className="form-note">
        Please use sample details for this preview. Nothing entered here leaves
        this page.
      </p>
      <button
        className="button button-primary"
        type="button"
        onClick={() => {
          if (form.current?.reportValidity()) setReviewed(true);
        }}
      >
        Preview enquiry
        <Icon name="arrow" />
      </button>
      <div
        role="status"
        aria-live="polite"
        className={reviewed ? "form-status" : ""}
      >
        {reviewed &&
          "Preview checked. No message was sent or saved. A verified contact channel will be added before launch."}
      </div>
    </form>
  );
}
