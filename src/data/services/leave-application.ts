import leaveImg from "../../assets/product/leave-application.webp";
import type { ServiceData } from "../../types/service";

export const leaveApplicationData: ServiceData = {
  title: "Leave Application",
  hero: {
    title: "Leave Application",
    subtitle:
      "Most leave systems treat coverage as someone else's problem. Ours doesn't. Approvals factor in the live roster, so a 'yes' never quietly breaks tomorrow's shift.",
    ctaText: "Book a Demo",
    ctaLink: "/demo",
    imageSrc: leaveImg,
  },
  features: {
    sectionTitle: "Coverage-aware leave management",
    sectionSubtitle: "",
    benefits: [
      "Submit, approve, and reflect leave on the same platform",
      "Real-time view of who's off and what's at risk",
      "Automatic checks against coverage and contracts",
    ],
    items: [
      {
        title: "Roster-Aware Approvals",
        description:
          "Every request shows the manager exactly what coverage looks like on those days — and flags conflicts before they're approved.",
        icon: "EventNote",
      },
      {
        title: "End-to-End Sync",
        description:
          "Approved leave updates the schedule instantly, triggers backfill where needed, and writes back to your HRIS.",
        icon: "CheckCircle",
      },
      {
        title: "Entitlement & Balance Tracking",
        description:
          "Annual leave, medical, time-in-lieu, and custom categories — all tracked, accrued, and reported automatically.",
        icon: "Insights",
      },
      {
        title: "Multi-Level Approvals",
        description:
          "Configure approval chains by team, leave type, or duration. Delegate when approvers are themselves out of office.",
        icon: "Groups",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle:
      "From request to a fully-rebalanced roster in three steps.",
    steps: [
      {
        stepNumber: 1,
        title: "Submit a request",
        description:
          "Employees pick the dates and type of leave from any device. Entitlements and balances are checked automatically.",
      },
      {
        stepNumber: 2,
        title: "Manager reviews against coverage",
        description:
          "Approvers see the impact on the roster side-by-side with the request — no more switching between three systems.",
      },
      {
        stepNumber: 3,
        title: "Auto-update the roster",
        description:
          "Approved leave triggers backfill, notifies affected staff, and syncs to payroll and HRIS.",
      },
    ],
  },
  cta: {
    title: "Stop approving leave blind",
    subtitle: "Give your managers the full picture before they say yes.",
    primaryButtonText: "Book a Demo",
    primaryButtonLink: "/demo",
  },
};
