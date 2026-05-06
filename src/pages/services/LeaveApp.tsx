import type { ServiceData } from "../../types/service";
import ServicePage from "./ServicePage";

const leaveData: ServiceData = {
  title: "Leave Application",
  hero: {
    title: "Leave Application",
    subtitle:
      "Simplify leave requests and approvals with a streamlined system that keeps everyone informed and operations running smoothly.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    imageSrc: "/src/assets/product/leave-application.png"
  },
  features: {
    sectionTitle: "Features",
    sectionSubtitle: "",
    benefits: [
      "Easy leave request submission",
      "Automated approval workflows",
      "Clear visibility of team availability",
    ],
    items: [
      {
        title: "Simple Requests",
        description:
          "Employees can submit leave requests in just a few clicks.",
        icon: "EventNote",
      },
      {
        title: "Approval Workflows",
        description:
          "Managers can review and approve requests with automated notifications.",
        icon: "CheckCircle",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle: "Manage leave efficiently in three simple steps.",
    steps: [
      {
        stepNumber: 1,
        title: "Submit Request",
        description: "Employees submit leave requests through the system.",
      },
      {
        stepNumber: 2,
        title: "Review",
        description:
          "Managers review requests with full visibility of schedules.",
      },
      {
        stepNumber: 3,
        title: "Approve & Sync",
        description:
          "Approved leaves are automatically reflected in schedules.",
      },
    ],
  },
  cta: {
    title: "Streamline Leave Management",
    subtitle: "Make leave requests simple and transparent.",
    primaryButtonText: "Book a Demo",
    primaryButtonLink: "/demo",
  },
};

const LeaveApp = () => <ServicePage data={leaveData} />;

export default LeaveApp;
