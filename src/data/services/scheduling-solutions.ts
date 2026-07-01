import type { ServiceData } from "../../types/service";

export const schedulingSolutionsData: ServiceData = {
  title: "AI Scheduling Solutions",
  hero: {
    badgeLabel: "AI Scheduling Solutions",
    title: "Stop fighting your spreadsheets",
    subtitle:
      "From hospital wards to gig workforces, Horaion helps teams generate roster options in minutes. Our engine pairs operations research with practical AI to produce schedules around regulations, hard constraints, preferences, and real operational trade-offs.",
    ctaText: "Book a Demo",
    ctaLink: "/demo",
    imageSrc: "/products/overview.webp",
  },
  features: {
    sectionTitle: "Built for the hardest scheduling problems",
    sectionSubtitle: "",
    benefits: [
      "Generate schedules around regulations, coverage requirements, and hard operational rules",
      "See why each assignment was chosen",
      "Fit cleanly into your roster, payroll, and HRIS workflow",
    ],
    items: [
      {
        title: "Constraint-Aware Optimization",
        description:
          "Skills, certifications, fatigue rules, fairness, union agreements, employee preferences — encoded once and respected on every run.",
        icon: "RocketLaunch",
      },
      {
        title: "Fair, Compliant, Transparent",
        description:
          "Configurable checks help managers consider labour rules, contractual requirements, and assignment rationale before publishing.",
        icon: "TrendingUp",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle:
      "From your first conversation to a scheduling workflow your team can test.",
    steps: [
      {
        stepNumber: 1,
        title: "Map your constraints",
        description:
          "We work with your operations team to model every rule that matters — coverage, skills, contracts, preferences.",
      },
      {
        stepNumber: 2,
        title: "Generate schedules",
        description:
          "Generate schedules in minutes. Compare cost, fairness, and coverage trade-offs, then pick the version your team is happiest with.",
      },
      {
        stepNumber: 3,
        title: "Roll out and refine",
        description:
          "Publish to your existing tools, gather feedback, and tune the model so each planning cycle has clearer inputs.",
      },
    ],
  },
  cta: {
    title: "See it run on your roster",
    subtitle:
      "Book a demo and we'll run the engine on your real constraints.",
    primaryButtonText: "Book a demo",
    primaryButtonLink: "/demo",
  },
};
