export type PricingPlan = {
  name: string;
  price: string;
  period?: string;
  description: string;
  cta: string;
  highlighted: boolean;
  badge?: string;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started and exploring core features.",
    cta: "Get Started",
    highlighted: false,
    features: [
      "Up to 3 projects",
      "Basic analytics dashboard",
      "1GB storage",
      "Community support",
      "API access",
    ],
  },
  {
    name: "Advanced",
    price: "$10",
    period: "/mth",
    description: "Great for growing teams that need more power and flexibility.",
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Unlimited projects",
      "Advanced analytics & reports",
      "20GB storage",
      "Priority email support",
      "API access",
      "Custom integrations",
      "Team collaboration tools",
    ],
  },
  {
    name: "Pro",
    price: "$25",
    period: "/mth",
    description: "Built for professionals who need the full suite of tools.",
    cta: "Start Free Trial",
    highlighted: false,
    features: [
      "Everything in Advanced",
      "Unlimited storage",
      "Dedicated account manager",
      "24/7 phone & email support",
      "Custom branding",
      "Advanced security controls",
      "SLA guarantee",
    ],
  },
];
