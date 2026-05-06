import type { ServiceData } from "../../types/service";
import ServicePage from "./ServicePage";

const ROData: ServiceData = {
  title: "Route Optimization",
  hero: {
    title: "Route Optimization",
    subtitle:
      "Automatically calculate the most efficient delivery and transit routes based on real-time traffic, vehicle capacity, and time windows — reducing fuel costs and improving on-time performance.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    imageSrc: "/src/assets/product/route-optimization.png"
  },
  features: {
    sectionTitle: "Features",
    sectionSubtitle: "",
    benefits: [
      "Real-time route adjustments based on live traffic data",
      "Multi-stop and multi-vehicle route planning",
      "Detailed analytics on route performance and cost savings",
    ],
    items: [
      {
        title: "Smart Route Planning",
        description:
          "Generate optimized routes across multiple stops and vehicles, factoring in delivery windows, vehicle capacity, and driver availability.",
        icon: "RocketLaunch",
      },
      {
        title: "Real-Time Adaptability",
        description:
          "Dynamically reroute in response to traffic, road closures, or last-minute order changes to keep deliveries on schedule.",
        icon: "TrendingUp",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle:
      "Three simple steps to get up and running with Route Optimization.",
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
    subtitle: "Book a demo with us and try it for free!",
    primaryButtonText: "Book a demo",
    primaryButtonLink: "/demo",
  },
};

const RouteOptimization = () => <ServicePage data={ROData} />;

export default RouteOptimization;
