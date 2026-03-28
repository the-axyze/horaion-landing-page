import ServicePage from "./ServicePage";
import type { ServiceData } from "../../types/service";

const service1Data: ServiceData = {
  hero: {
    title: "Service One",
    subtitle:
      "A compelling one-liner about what this service does and why it matters to your business.",
    badgeLabel: "Popular",
    ctaText: "Get Started",
    ctaLink: "/contact",
    videoSrc: "/placeholder-video.mp4",
  },
  features: {
    sectionTitle: "What You Get",
    sectionSubtitle:
      "Everything included in Service One, designed to help your team move faster.",
    items: [
      {
        title: "Feature One",
        description:
          "Placeholder description of this feature and its direct benefit.",
        icon: "RocketLaunch",
      },
      {
        title: "Feature Two",
        description:
          "Placeholder description of this feature and its direct benefit.",
        icon: "TrendingUp",
      },
      {
        title: "Feature Three",
        description:
          "Placeholder description of this feature and its direct benefit.",
        icon: "Security",
      },
      {
        title: "Feature Four",
        description:
          "Placeholder description of this feature and its direct benefit.",
        icon: "AccessTime",
      },
      {
        title: "Feature Five",
        description:
          "Placeholder description of this feature and its direct benefit.",
        icon: "Groups",
      },
      {
        title: "Feature Six",
        description:
          "Placeholder description of this feature and its direct benefit.",
        icon: "Insights",
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
