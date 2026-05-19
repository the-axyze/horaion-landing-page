import type { ServiceData } from "../../types/service";

export const leaveApplicationData: ServiceData = {
  title: "Leave Application",
  hero: {
    title: "Leave Application",
    subtitle:
      "Leave requests and scheduling stay in the same flow, so managers can approve time off with less back-and-forth.",
    ctaText: "Book a Demo",
    ctaLink: "/demo",
    imageSrc: "/products/leave-application.webp",
  },
  features: {
    sectionTitle: "Leave management",
    sectionSubtitle: "",
    benefits: [
      "Multi-level approvals for different teams and leave types",
      "Simple approval management for managers",
      "Leave updates flow straight into scheduling",
    ],
    items: [
      {
        title: "Multi-Level Approvals",
        description:
          "Set approval chains by team or leave type so the right people review each request.",
        icon: "EventNote",
      },
      {
        title: "Easy Approval Management",
        description:
          "Managers can review and decide on requests from one place.",
        icon: "CheckCircle",
      },
      {
        title: "Fully Integrated Scheduling",
        description:
          "Approved leave flows straight into scheduling.",
        icon: "Insights",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle: "From request to updated scheduling in three steps.",
    steps: [
      {
        stepNumber: 1,
        title: "Submit a request",
        description:
          "Employees submit leave from any device.",
      },
      {
        stepNumber: 2,
        title: "Managers review it",
        description:
          "Approvers review requests in one place.",
      },
      {
        stepNumber: 3,
        title: "Update scheduling automatically",
        description:
          "Once approved, the leave updates scheduling automatically.",
      },
    ],
  },
  cta: {
    title: "Keep leave and scheduling in sync",
    subtitle: "Reduce manual coordination between leave requests and the roster.",
    primaryButtonText: "Book a Demo",
    primaryButtonLink: "/demo",
  },
};
