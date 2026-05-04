import type { ServiceData } from "../../types/service";
import ServicePage from "./ServicePage";

const gigData: ServiceData = {
  title: "Gig Scheduling",
  hero: {
    title: "Gig Scheduling",
    subtitle:
      "Manage on-demand and gig workers efficiently with smart scheduling tools designed for flexibility and scale.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    videoSrc: "/placeholder-video.mp4",
  },
  features: {
    sectionTitle: "Features",
    sectionSubtitle: "",
    benefits: [
      "Efficient gig workforce allocation",
      "Scalable scheduling for fluctuating demand",
      "Reduced manual coordination",
    ],
    items: [
      {
        title: "On-Demand Staffing",
        description:
          "Quickly assign available gig workers to shifts based on demand spikes.",
        icon: "FlashOn",
      },
      {
        title: "Automated Matching",
        description:
          "Match the right workers to the right tasks based on skills and availability.",
        icon: "AutoAwesome",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle: "Seamlessly manage your gig workforce in three steps.",
    steps: [
      {
        stepNumber: 1,
        title: "Add Workers",
        description: "Register your gig workforce and their availability.",
      },
      {
        stepNumber: 2,
        title: "Assign Jobs",
        description:
          "Automatically assign jobs based on demand and skill match.",
      },
      {
        stepNumber: 3,
        title: "Track Performance",
        description: "Monitor job completion and optimize future scheduling.",
      },
    ],
  },
  cta: {
    title: "Scale Your Workforce",
    subtitle: "Optimize gig scheduling effortlessly.",
    primaryButtonText: "Book a Demo",
    primaryButtonLink: "/demo",
  },
};

const GigScheduling = () => <ServicePage data={gigData} />;

export default GigScheduling;
