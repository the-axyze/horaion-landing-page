import type { ServiceData } from "../../types/service";

export const profileManagementData: ServiceData = {
  title: "Profile Management",
  hero: {
    badgeLabel: "Profile Management",
    title: "One source of truth for your workforce",
    subtitle:
      "Skills, contracts, availability, and work rules — the data your scheduler needs to work properly. We turn scattered spreadsheets and HR exports into one source of truth that powers every roster decision.",
    ctaText: "Book a Demo",
    ctaLink: "/demo",
    imageSrc: "/products/profile-management.webp",
  },
  features: {
    sectionTitle: "The foundation under every good schedule",
    sectionSubtitle: "",
    benefits: [
      "One profile per employee, used by every workflow",
      "Profile updates stay aligned with scheduling inputs",
    ],
    items: [
      {
        title: "Unified Employee Profiles",
        description:
          "Skills, qualifications, contracts, working-time rules, and personal preferences in one record — referenced by scheduling, leave, and reporting.",
        icon: "Groups",
      },
      {
        title: "Scheduling-Ready Workforce Data",
        description:
          "Keep availability, work rules, and role requirements structured in a format the scheduling engine can use directly.",
        icon: "EventNote",
      },
      {
        title: "Full Integration With Scheduling",
        description:
          "Changes to employee profiles flow into scheduling, so rosters use updated workforce data.",
        icon: "AutoAwesome",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle:
      "From scattered records to a clean profile layer in days, not months.",
    steps: [
      {
        stepNumber: 1,
        title: "Import or onboard staff",
        description:
          "Pull from your existing HRIS or upload via spreadsheet. We map fields and reconcile duplicates automatically.",
      },
      {
        stepNumber: 2,
        title: "Map skills and constraints",
        description:
          "Define the skills, availability, and working-time rules that matter for your operations — once.",
      },
      {
        stepNumber: 3,
        title: "Sync with scheduling and ops",
        description:
          "Profiles feed into rosters, leave approvals, and payroll so teams can work from a more consistent source of workforce data.",
      },
    ],
  },
  cta: {
    title: "See it on your workforce data",
    subtitle:
      "See how a clean profile layer makes every downstream system work better.",
    primaryButtonText: "Book a Demo",
    primaryButtonLink: "/demo",
  },
};
