import type { ServiceData } from "../../types/service";

export const shiftPreferencesData: ServiceData = {
  title: "Shift Preferences",
  hero: {
    badgeLabel: "Shift Preferences",
    title: "Let employees tell you which shifts they prefer",
    subtitle:
      "Employees can mark the shifts they prefer for specific dates, giving managers a clearer signal before the roster is generated. Horaion uses those preferences alongside coverage needs and the past 30 days of fulfilment history.",
    ctaText: "Book a Demo",
    ctaLink: "/demo",
    imageSrc: "/products/shift-preference.webp",
  },
  features: {
    sectionTitle: "Preference-aware scheduling",
    sectionSubtitle:
      "Give staff a simple way to express shift preferences, while keeping managers in control of the final roster.",
    benefits: [
      "Employees select preferred shifts for specific dates",
      "Managers get a clearer view of staff preferences before scheduling",
      "Past 30-day fulfilment history helps balance fairness across the workforce",
    ],
    items: [
      {
        title: "Date-Specific Choices",
        description:
          "Employees mark which shifts they prefer for a specific date, giving managers useful preference data without a heavy request workflow.",
        icon: "AccessTime",
      },
      {
        title: "Fairness Over Time",
        description:
          "Horaion considers the past 30 days of preference fulfilment, helping managers balance fairness when not every request can be granted.",
        icon: "Groups",
      },
      {
        title: "Coverage First",
        description:
          "Preferences guide the roster, while coverage, rules, roles, and staffing demand stay at the centre of each schedule.",
        icon: "TrendingUp",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle:
      "From employee preference capture to a roster managers can review.",
    steps: [
      {
        stepNumber: 1,
        title: "Employees mark preferred shifts",
        description:
          "Staff choose the shifts they would like to work for specific dates, giving managers cleaner input than informal messages or side conversations.",
      },
      {
        stepNumber: 2,
        title: "Horaion weighs 30-day fulfilment",
        description:
          "The scheduler considers preference fulfilment from the past 30 days across the workforce, so preferences can be balanced more consistently over time.",
      },
      {
        stepNumber: 3,
        title: "Managers review the roster",
        description:
          "The generated roster keeps coverage and rules at the centre, while surfacing a plan that better reflects employee preferences where possible.",
      },
    ],
  },
  cta: {
    title: "See preferences in the roster flow",
    subtitle:
      "See how shift preferences can improve fairness and reduce manual back-and-forth before schedules are published.",
    primaryButtonText: "Book a Demo",
    primaryButtonLink: "/demo",
  },
};
