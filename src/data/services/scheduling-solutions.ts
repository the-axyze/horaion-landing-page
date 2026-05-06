import overviewImg from "../../assets/product/overview.png";
import type { ServiceData } from "../../types/service";

export const schedulingSolutionsData: ServiceData = {
  title: "AI Scheduling Solutions",
  hero: {
    title: "AI Scheduling Solutions",
    subtitle:
      "From hospital wards to gig workforces, we turn weeks of manual rostering into minutes. Our engine pairs operations research with explainable AI to produce schedules that respect hard constraints, preferences, and real operational trade-offs.",
    ctaText: "Book a Demo",
    ctaLink: "/demo",
    imageSrc: "/products/overview.webp",
  },
  features: {
    sectionTitle: "Built for the hardest scheduling problems",
    sectionSubtitle: "",
    benefits: [
      "Generate schedules that respect every hard constraint",
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
          "Built-in checks for labor laws and contractual rules, with audit-ready logs that show exactly why each shift was assigned.",
        icon: "TrendingUp",
      },

    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle:
      "From your first conversation to a live schedule — typically inside a few weeks.",
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
          "Publish to your existing tools, gather feedback, and tune the model. Each cycle gets faster and more accurate.",
      },
    ],
  },
  cta: {
    title: "Stop fighting your spreadsheets",
    subtitle:
      "See it run on your own schedule. Book a demo and we'll show you.",
    primaryButtonText: "Book a demo",
    primaryButtonLink: "/demo",
  },
};
