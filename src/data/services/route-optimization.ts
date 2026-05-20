import type { ServiceData } from "../../types/service";

export const routeOptimizationData: ServiceData = {
  title: "Route Optimization",
  hero: {
    title: "Route Optimization",
    subtitle:
      "Where Horaion started. Born from our work with UParcel on Singapore last-mile, our routing engine plans every stop around real traffic, service duration, time windows, and transport constraints.",
    ctaText: "Book a Demo",
    ctaLink: "/demo",
    imageSrc: "/products/route-optimization.webp",
  },
  features: {
    sectionTitle: "Routing that holds up in the real world",
    sectionSubtitle: "",
    benefits: [
      "Account for service duration at every stop, not just drive time",
      "Respect both customer service windows and provider availability windows",
      "Choose routes based on the right transport mode, cost, and travel time",
    ],
    items: [
      {
        title: "Service-Aware Planning",
        description:
          "Plan thousands of stops in seconds while factoring in on-site service duration, appointment windows, capacity, and operational SLAs.",
        icon: "RocketLaunch",
      },
      {
        title: "Time Window Matching",
        description:
          "Match each job to the right service window and the right provider window, so schedules stay realistic before the route even starts.",
        icon: "Schedule",
      },
      {
        title: "Transport-Aware Optimization",
        description:
          "Optimize differently for cars, vans, bikes, or mixed fleets - balancing travel time, route cost, and operational fit for each job.",
        icon: "TrendingUp",
      }
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle: "From a list of jobs to a dispatched field team in minutes.",
    steps: [
      {
        stepNumber: 1,
        title: "Load jobs, windows, and resources",
        description:
          "Connect your order management system or upload a CSV with job duration, service windows, provider availability, and transport constraints.",
      },
      {
        stepNumber: 2,
        title: "Generate optimized routes",
        description:
          "The engine builds routes that respect every constraint and optimize for the right outcome - travel time, cost, transport mode, or a balanced mix.",
      },
      {
        stepNumber: 3,
        title: "Review and assign",
        description:
          "Review the generated routes, assign them to the right drivers or service providers, and share the plan with your operations team.",
      },
    ],
  },
  cta: {
    title: "Routes that keep up with your day",
    subtitle:
      "See how service duration, time windows, and transport-aware planning fit into one routing engine.",
    primaryButtonText: "Book a Demo",
    primaryButtonLink: "/demo",
  },
};
