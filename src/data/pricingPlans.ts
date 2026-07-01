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
    name: "Starter",
    price: "Talk to us",
    description: "For teams exploring whether Horaion fits their scheduling workflow.",
    cta: "Book a Demo",
    highlighted: false,
    features: [
      "Scheduling workflow discovery",
      "Core capability walkthrough",
      "Sample rule and constraint review",
      "Implementation fit discussion",
    ],
  },
  {
    name: "Implementation",
    price: "Custom",
    description: "For teams ready to configure Horaion around real workforce rules.",
    cta: "Book a Demo",
    highlighted: true,
    badge: "Most Common",
    features: [
      "Rule and policy configuration",
      "Demand and workforce data mapping",
      "Scheduling workflow setup",
      "Manager review and rollout support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For multi-site teams with deeper integration and governance needs.",
    cta: "Book a Demo",
    highlighted: false,
    features: [
      "Multi-location workflow design",
      "Integration planning",
      "Custom reporting requirements",
      "Security and procurement review",
      "Rollout support aligned to your team",
    ],
  },
];
