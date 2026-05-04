import type { ServiceData } from "../../types/service";
import ServicePage from "./ServicePage";

const PMData: ServiceData = {
  title: "Profile Management",
  hero: {
    title: "Profile Management",
    subtitle:
      "Centralise and manage employee profiles, skills, certifications, and availability in one place. Ensure the right people are assigned to the right roles with up-to-date information at your fingertips.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    videoSrc: "/placeholder-video.mp4",
  },
  features: {
    sectionTitle: "Features",
    sectionSubtitle: "",
    benefits: [
      "Centralised employee data accessible across your organisation",
      "Real-time updates to skills, certifications, and availability",
      "Seamless integration with scheduling and workforce tools",
    ],
    items: [
      {
        title: "Unified Employee Profiles",
        description:
          "Store and manage all employee information — skills, certifications, availability, and work history — in a single, easily accessible platform.",
        icon: "Groups",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Define who can view and edit employee data with granular permission settings, keeping sensitive information secure and compliant.",
        icon: "Security",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle:
      "Three simple steps to get up and running with Profile Management.",
    steps: [
      {
        stepNumber: 1,
        title: "Sign Up",
        description:
          "Create your account in minutes and configure your workspace to match your organisation's structure.",
      },
      {
        stepNumber: 2,
        title: "Connect",
        description:
          "Import existing employee data from your current systems with zero disruption to your operations.",
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

const ProfileManagement = () => <ServicePage data={PMData} />;

export default ProfileManagement;
