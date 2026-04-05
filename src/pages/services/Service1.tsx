import ServicePage from "./ServicePage";
import type { ServiceData } from "../../types/service";

const service1Data: ServiceData = {
  hero: {
    title: "AI Scheduling Solutions",
    subtitle:
      "Solve complex workforce scheduling in minutes, not hours. Our optimization engine combines operations research with responsible AI to deliver feasible, fair, and efficient schedules.",
    badgeLabel: "Popular",
    ctaText: "Get Started",
    ctaLink: "/contact",
    videoSrc: "/placeholder-video.mp4",
  },
  features: {
    sectionTitle: "Features",
    sectionSubtitle: "",
    benefits: [
      "Fast scenario generation and side-by-side comparisons",
      "Transparent trade-offs and explainable decisions",
      "Simple export and integration options",
    ],
    items: [
      {
        title: "Demand & Capacity Planning",
        description:
          "Balance labor demand with staffing capacity, skills, and constraints to reduce overtime and improve service levels.",
        icon: "RocketLaunch",
      },
      {
        title: "Fair & Compliant Scheduling",
        description:
          "Respect labor laws, union rules, and employee preferences while maximizing coverage and minimizing costs.",
        icon: "TrendingUp",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle:
      "Three simple steps to get up and running with Service One.",
    steps: [
      {
        stepNumber: 1,
        title: "Sign Up",
        description:
          "Create your account in minutes and configure your workspace to match your team's needs.",
      },
      {
        stepNumber: 2,
        title: "Connect",
        description:
          "Integrate with your existing tools and import your data with zero disruption.",
      },
      {
        stepNumber: 3,
        title: "Go Live",
        description:
          "Launch with confidence. Our onboarding team is available every step of the way.",
      },
    ],
  },
  cta: {
    title: "Ready to Get Started?",
    subtitle: "Try Service One free for 30 days. No credit card required.",
    primaryButtonText: "Start Free Trial",
    primaryButtonLink: "/signup",
    secondaryButtonText: "Book a Demo",
    secondaryButtonLink: "/demo",
  },
};

const Service1 = () => <ServicePage data={service1Data} />;

export default Service1;
