import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Real possibilities for what’s next`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  // This is an unlaunched skeleton. Review indexing and canonical URLs before publication.
  robots: { index: false, follow: false },
  icons: { icon: "/brand/nd-mark.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
