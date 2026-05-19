import type { ServiceData } from "../../types/service";

export const flexiSchedulingData: ServiceData = {
  title: "Flexi Scheduling",
  hero: {
    title: "Flexi Scheduling",
    subtitle:
      "For teams with variable demand and changing availability, we build rosters that keep coverage steady without turning scheduling into a manual grind.",
    ctaText: "Book a Demo",
    ctaLink: "/demo",
    imageSrc: "/products/flexi-scheduling.webp",
  },
  features: {
    sectionTitle: "Flexible scheduling, without the noise",
    sectionSubtitle: "",
    benefits: [
      "Capture availability and shift rules in one place",
      "Keep coverage aligned as demand changes",
      "Give managers a clear view of roster trade-offs",
    ],
    items: [],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle:
      "From variable availability to a workable roster.",
    steps: [
      {
        stepNumber: 1,
        title: "Capture availability",
        description:
          "Collect preferred hours, off-days, and role constraints in a simple workflow.",
      },
      {
        stepNumber: 2,
        title: "Generate the roster",
        description:
          "Build a roster that meets coverage, respects contracts, and fits the demand pattern.",
      },
      {
        stepNumber: 3,
        title: "Review and publish",
        description:
          "Review the output with your team, make any necessary edits, and publish it into your existing process.",
      },
    ],
  },
  cta: {
    title: "Make flexible scheduling less manual",
    subtitle:
      "See how the same scheduling engine can handle variable demand without a pile of spreadsheets.",
    primaryButtonText: "Book a Demo",
    primaryButtonLink: "/demo",
  },
};
