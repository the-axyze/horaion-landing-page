// import flexiImg from "../public/flexi-scheduling.webp";
import type { ServiceData } from "../../types/service";

export const flexiSchedulingData: ServiceData = {
  title: "Flexi Scheduling",
  hero: {
    title: "Flexi Scheduling",
    subtitle:
      "Hospitals, retailers, and 24/7 operations don't run on fixed shifts anymore. Build a roster that respects every employee's preferred hours — and still hits coverage every single day.",
    ctaText: "Book a Demo",
    ctaLink: "/demo",
    imageSrc: "../public/flexi-scheduling.webp",
  },
  features: {
    sectionTitle: "Flexibility, without the chaos",
    sectionSubtitle: "",
    benefits: [
      "Employees declare availability; the optimizer does the rest",
      "Swaps and last-minute changes update everyone in real time",
      "Coverage and fairness checks run on every regenerate",
    ],
    items: [
      {
        title: "Preference-First Allocation",
        description:
          "Each employee's preferred hours, days off, and capacity feed straight into the optimizer — alongside coverage targets and skill requirements.",
        icon: "Schedule",
      },
      {
        title: "Live Re-Optimization",
        description:
          "When someone calls in sick or demand shifts, the schedule rebalances in seconds and notifies only the affected staff.",
        icon: "Update",
      },
      {
        title: "Fairness That's Measurable",
        description:
          "Track who's getting the unpopular shifts, the weekends, and the overtime. Distribute load evenly — by employee or by team.",
        icon: "TrendingUp",
      },
      {
        title: "Self-Serve Swaps",
        description:
          "Employees swap shifts directly with eligible peers. The system enforces every rule in the background — no manager bottleneck.",
        icon: "AutoAwesome",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle:
      "From preference capture to a published roster — same week.",
    steps: [
      {
        stepNumber: 1,
        title: "Capture preferences",
        description:
          "Employees submit availability and preferred hours through a simple form, recurring every cycle.",
      },
      {
        stepNumber: 2,
        title: "Generate the roster",
        description:
          "The optimizer builds a roster that meets coverage, respects contracts, and matches preferences as closely as possible.",
      },
      {
        stepNumber: 3,
        title: "Approve swaps in real time",
        description:
          "Staff initiate swaps from their phones; managers approve with one tap; the system handles compliance checks behind the scenes.",
      },
    ],
  },
  cta: {
    title: "A flexible roster your team will actually thank you for",
    subtitle:
      "Show your operations the difference a preference-aware schedule makes.",
    primaryButtonText: "Book a Demo",
    primaryButtonLink: "/demo",
  },
};
