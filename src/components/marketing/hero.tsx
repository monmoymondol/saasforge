"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Built on Next.js 14 with App Router for optimal performance" },
  { icon: Shield, title: "Secure by Default", description: "Authentication, authorization, and best practices built-in" },
  { icon: Users, title: "Team Ready", description: "Multi-tenant architecture with roles and invitations" },
];

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now with Next.js 14 App Router & Server Actions
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-foreground mb-6 animate-slide-in-from-bottom"
          >
            Build Better SaaS Products{" "}
            <span className="text-primary">Faster</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-in-from-bottom" style={{ animationDelay: "100ms" }}>
            Production-ready Next.js starter kit with authentication, billing,
            team management, and developer experience you'll love.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in-from-bottom" style={{ animationDelay: "200ms" }}>
            <Link href="/auth/register">
              <Button size="xl" className="w-full sm:w-auto gap-2">
                Start Free Trial
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                Explore Features
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "300ms" }}>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden="true" />
              14-day free trial
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden="true" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden="true" />
              Cancel anytime
            </span>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "400ms" }} role="list" aria-label="Key benefits">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={cn(
                "relative p-6 rounded-xl border bg-card transition-shadow hover:shadow-lg",
                "group"
              )}
              role="listitem"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" aria-hidden="true" />
              <div className="relative flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
