import type { ServiceData } from "../../types/service";
import ServicePage from "./ServicePage";

const FlexiData: ServiceData = {
  title: "Flexi Scheduling",
  hero: {
    title: "Flexi Scheduling",
    subtitle:
      "Empower your workforce with flexible scheduling options that adapt to employee preferences and operational needs in real time.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    imageSrc: "/src/assets/product/flexi-scheduling.png",
  },
  features: {
    sectionTitle: "Features",
    sectionSubtitle: "",
    benefits: [
      "Flexible shift assignments based on availability",
      "Real-time schedule adjustments",
      "Improved employee satisfaction and retention",
    ],
    items: [
      {
        title: "Dynamic Shift Allocation",
        description:
          "Automatically assign shifts based on employee availability, preferences, and business demand.",
        icon: "Schedule",
      },
      {
        title: "Real-Time Updates",
        description:
          "Instantly update schedules and notify employees of any changes without disruption.",
        icon: "Update",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle: "Three simple steps to implement flexible scheduling.",
    steps: [
      {
        stepNumber: 1,
        title: "Set Preferences",
        description:
          "Employees input their availability and shift preferences.",
      },
      {
        stepNumber: 2,
        title: "Generate Schedule",
        description:
          "Our system creates optimized schedules based on your inputs.",
      },
      {
        stepNumber: 3,
        title: "Adjust Anytime",
        description: "Make real-time adjustments as business needs change.",
      },
    ],
  },
  cta: {
    title: "Ready to Get Started?",
    subtitle: "Experience flexible scheduling today.",
    primaryButtonText: "Book a Demo",
    primaryButtonLink: "/demo",
  },
};

const FlexiScheduling = () => <ServicePage data={FlexiData} />;

export default FlexiScheduling;
