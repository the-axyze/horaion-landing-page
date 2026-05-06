import type { ServiceData } from "../../types/service";
import ServicePage from "./ServicePage";

const DFData: ServiceData = {
  title: "Demand Forecasting",
  hero: {
    title: "Demand Forecasting",
    subtitle:
      "Leverage historical data and AI-driven models to predict future demand with precision. Stay ahead of peak periods and make smarter staffing and inventory decisions.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    imageSrc: "/src/assets/product/demand-forecasting.png",
  },
  features: {
    sectionTitle: "Features",
    sectionSubtitle: "",
    benefits: [
      "Accurate short and long-term demand predictions",
      "Automatic detection of seasonal trends and anomalies",
      "Actionable insights to guide staffing and inventory decisions",
    ],
    items: [
      {
        title: "AI-Driven Predictions",
        description:
          "Harness machine learning models trained on your historical data to generate highly accurate demand forecasts across time horizons.",
        icon: "Insights",
      },
      {
        title: "Peak Period Planning",
        description:
          "Identify upcoming demand surges in advance so you can scale resources, staffing, and inventory before pressure hits.",
        icon: "TrendingUp",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle:
      "Three simple steps to get up and running with Demand Forecasting.",
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
          "Integrate with your existing tools and import your historical data with zero disruption.",
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

const DemandForecasting = () => <ServicePage data={DFData} />;

export default DemandForecasting;
