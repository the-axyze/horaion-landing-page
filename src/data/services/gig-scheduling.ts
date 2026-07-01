import type { ServiceData } from "../../types/service";

export const gigSchedulingData: ServiceData = {
  title: "Gig Scheduling",
  hero: {
    badgeLabel: "Gig Scheduling",
    title: "Scale your gig workforce without scaling chaos",
    subtitle:
      "Match a fluid pool of part-time and gig workers to demand peaks, while keeping worker availability and coverage in sync.",
    ctaText: "Book a Demo",
    ctaLink: "/demo",
    imageSrc: "/products/gig-scheduling.webp",
  },
  features: {
    sectionTitle: "Built for fluid workforces",
    sectionSubtitle: "",
    benefits: [
      "Workers define their availability in one place",
      "Coverage requirements are matched automatically",
      "Gig workers stay inside your employee management system",
    ],
    items: [
      {
        title: "Worker Availability",
        description:
          "Workers set when they can work, so the schedule starts from real availability instead of assumptions.",
        icon: "FlashOn",
      },
      {
        title: "Coverage Matching",
        description:
          "Availability feeds directly into shift coverage, helping managers fill the gaps that matter most.",
        icon: "AutoAwesome",
      },
      {
        title: "Unified Workflows",
        description:
          "Keep gig workers connected to the same employee management workflows your team already uses.",
        icon: "Update",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle:
      "From availability capture to confirmed coverage in three steps.",
    steps: [
      {
        stepNumber: 1,
        title: "Capture worker availability",
        description:
          "Workers share their available days, times, and constraints so the schedule reflects reality from the start.",
      },
      {
        stepNumber: 2,
        title: "Match coverage requirements",
        description:
          "The engine matches available workers to required shifts, roles, and coverage targets.",
      },
      {
        stepNumber: 3,
        title: "Sync into employee management",
        description:
          "Confirmed assignments flow back into your employee management system for easier day-to-day administration.",
      },
    ],
  },
  cta: {
    title: "Put it to work on your shifts",
    subtitle:
      "See how teams running hundreds of shifts a week keep availability, coverage, and employee management aligned.",
    primaryButtonText: "Book a Demo",
    primaryButtonLink: "/demo",
  },
};
