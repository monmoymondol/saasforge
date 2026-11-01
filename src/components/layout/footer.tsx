import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const footerLinks = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Changelog", href: "/changelog" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "API Docs", href: "/docs/api" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Community", href: "/community" },
    { name: "Templates", href: "/templates" },
    { name: "Webinars", href: "/webinars" },
    { name: "Support", href: "/support" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Security", href: "/security" },
    { name: "Cookies", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ],
};

const socialLinks = [
  { name: "GitHub", href: "https://github.com/saasforge", icon: Github },
  { name: "Twitter", href: "https://twitter.com/saasforge", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/saasforge", icon: Linkedin },
  { name: "Email", href: "mailto:hello@saasforge.dev", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2" aria-label="SaaSForge Home">
              <svg
                className="h-8 w-8 text-primary"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="32" height="32" rx="8" className="fill-current" />
                <path
                  d="M8 12h16M8 16h12M8 20h8"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-heading text-xl font-bold">SaaSForge</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Build better SaaS products faster with our comprehensive starter kit.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-muted-foreground hover:text-foreground transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  )}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Product links">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-3" role="list">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company links">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources links">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-3" role="list">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal links">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-3" role="list">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} SaaSForge, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Made with Next.js</span>
              <span aria-hidden="true">·</span>
              <span>Deployed on Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
