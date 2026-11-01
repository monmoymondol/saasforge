"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    description: "For individuals and hobby projects",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "Up to 3 team members",
      "10 GB storage",
      "Basic analytics",
      "Community support",
      "API access (100 req/day)",
      "Single project",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Starter",
    description: "For growing teams",
    monthlyPrice: 29,
    annualPrice: 24,
    features: [
      "Up to 10 team members",
      "100 GB storage",
      "Advanced analytics",
      "Email support",
      "API access (10,000 req/day)",
      "Unlimited projects",
      "Custom domains",
      "SSO (SAML/OIDC)",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Professional",
    description: "For scaling businesses",
    monthlyPrice: 99,
    annualPrice: 79,
    features: [
      "Up to 50 team members",
      "1 TB storage",
      "Real-time analytics",
      "Priority support",
      "API access (100,000 req/day)",
      "Unlimited projects",
      "Custom domains",
      "SSO (SAML/OIDC)",
      "Audit logs",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade at any time. Changes take effect immediately.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and wire transfers for annual plans.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! All paid plans come with a 14-day free trial. No credit card required.",
  },
  {
    question: "Do you offer discounts for nonprofits?",
    answer: "Yes, we offer 50% off for qualified nonprofits. Contact sales for details.",
  },
];

export function PricingTable() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="py-20 lg:py-32" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that's right for you. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <ToggleGroup
            type="single"
            value={billingCycle}
            onValueChange={setBillingCycle}
            className="bg-muted p-1 rounded-lg"
            role="radiogroup"
            aria-label="Billing cycle"
          >
            <ToggleGroupItem
              value="monthly"
              className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=on]:bg-background data-[state=on]:shadow-sm"
            >
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem
              value="annual"
              className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=on]:bg-background data-[state=on]:shadow-sm"
            >
              Annual
              <span className="ml-2 text-xs text-green-600 dark:text-green-400 font-semibold">Save 20%</span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative flex flex-col",
                plan.popular && "ring-2 ring-primary"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <Card className="flex flex-col h-full">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">
                      ${billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-muted-foreground">/{billingCycle === "monthly" ? "month" : "year"}</span>
                  </div>

                  <ul className="space-y-3 mb-6 flex-1" role="list">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/auth/register?plan=${plan.name.toLowerCase()}`}>
                    <Button
                      className={cn(
                        "w-full",
                        plan.popular ? "bg-primary" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      )}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>

                <CardFooter className="pt-0">
                  <p className="text-xs text-center text-muted-foreground">
                    {billingCycle === "annual"
                      ? `Billed $${plan.annualPrice * 12}/year`
                      : "Billed monthly"}
                  </p>
                </CardFooter>
              </Card>
            </article>
          ))}
        </div>

        <details className="mt-16 max-w-3xl mx-auto" role="group" aria-labelledby="faq-heading">
          <summary id="faq-heading" className="text-lg font-semibold cursor-pointer list-none select-none flex items-center justify-between">
            Frequently Asked Questions
            <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border border-border rounded-lg overflow-hidden">
                <summary className="p-4 font-medium list-none cursor-pointer flex items-center justify-between select-none">
                  {faq.question}
                  <svg className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 text-sm text-muted-foreground">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}

// Need to import Link
import Link from "next/link";
