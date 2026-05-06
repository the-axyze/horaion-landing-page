import type { ServiceData } from "../../types/service";

export const gigSchedulingData: ServiceData = {
  title: "Gig Scheduling",
  hero: {
    title: "Gig Scheduling",
    subtitle:
      "Pizza Hut Singapore trusts us to fill shifts across their stores every week. Match a fluid pool of part-time and gig workers to demand peaks — automatically — with the same engine.",
    ctaText: "Book a Demo",
    ctaLink: "/demo",
    imageSrc: "/src/assets/product/gig-scheduling.png",
  },
  features: {
    sectionTitle: "Built for fluid workforces",
    sectionSubtitle: "",
    benefits: [
      "Open shifts auto-matched to available workers in seconds",
      "Backfill no-shows and last-minute drops without phone calls",
      "Honor worker preferences and weekly hour caps",
    ],
    items: [
      {
        title: "Demand-Driven Shift Filling",
        description:
          "Forecasted demand becomes a shift plan, then a worker assignment — with skill, location, and availability constraints baked in.",
        icon: "FlashOn",
      },
      {
        title: "Self-Serve for Workers",
        description:
          "Workers claim, swap, or release shifts from their phones. Managers approve in one tap, and the schedule updates everywhere instantly.",
        icon: "AutoAwesome",
      },
      {
        title: "No-Show Backfill",
        description:
          "When a worker drops out, the system instantly offers the slot to the next-best matches — most gaps fill before a manager even sees them.",
        icon: "Update",
      },
      {
        title: "Multi-Site Visibility",
        description:
          "Run dozens of stores, branches, or service areas from one console. Workers can see open shifts across sites they're qualified for.",
        icon: "Groups",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle: "From open shifts to confirmed coverage in three steps.",
    steps: [
      {
        stepNumber: 1,
        title: "Define your shift patterns",
        description:
          "Tell us what coverage looks like — by store, role, time block. We translate it into a model.",
      },
      {
        stepNumber: 2,
        title: "Open shifts to your worker pool",
        description:
          "The engine matches shifts to qualified, available workers and offers them through the channels you already use.",
      },
      {
        stepNumber: 3,
        title: "Auto-fill and confirm",
        description:
          "Workers accept; the schedule confirms automatically. Managers see only the exceptions that need their attention.",
      },
    ],
  },
  cta: {
    title: "Scale your gig workforce without scaling chaos",
    subtitle:
      "See how teams running hundreds of shifts a week stay on top of coverage.",
    primaryButtonText: "Book a Demo",
    primaryButtonLink: "/demo",
  },
};
