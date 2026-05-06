import type { ServiceData } from "../../types/service";

export const profileManagementData: ServiceData = {
  title: "Profile Management",
  hero: {
    title: "Profile Management",
    subtitle:
      "Skills, certifications, contracts, availability — the data your scheduler needs to work properly. We turn scattered spreadsheets and HR exports into one source of truth that powers every roster decision.",
    ctaText: "Book a Demo",
    ctaLink: "/demo",
    imageSrc: "/src/assets/product/profile-management.png",
  },
  features: {
    sectionTitle: "The foundation under every good schedule",
    sectionSubtitle: "",
    benefits: [
      "One profile per employee, used by every workflow",
      "Cert expiries and contract changes flow through automatically",
      "Two-way sync with HRIS and payroll, no double-entry",
    ],
    items: [
      {
        title: "Unified Employee Profiles",
        description:
          "Skills, qualifications, contracts, working-time rules, and personal preferences in one record — referenced by scheduling, leave, and reporting.",
        icon: "Groups",
      },
      {
        title: "Role-Based Access & Audit",
        description:
          "Granular permissions for HR, managers, and employees, with a full audit trail of who changed what — built for compliance reviews.",
        icon: "Security",
      },
      {
        title: "Certification & Expiry Tracking",
        description:
          "Track qualifications with expiry dates and automatic alerts. Schedules won't assign someone whose cert lapsed yesterday.",
        icon: "EventNote",
      },
      {
        title: "Self-Service for Staff",
        description:
          "Employees update their own contact info, availability, and preferences — with manager approvals where you need them.",
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
          "Define the qualifications, certifications, and working-time rules that matter for your operations — once.",
      },
      {
        stepNumber: 3,
        title: "Sync with scheduling and ops",
        description:
          "Profiles feed directly into rosters, leave approvals, and payroll. Updates propagate everywhere in real time.",
      },
    ],
  },
  cta: {
    title: "One source of truth for your workforce",
    subtitle:
      "See how a clean profile layer makes every downstream system work better.",
    primaryButtonText: "Book a Demo",
    primaryButtonLink: "/demo",
  },
};
