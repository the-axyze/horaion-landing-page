import demandImg from "../../assets/product/demand-forecasting.png";
import type { ServiceData } from "../../types/service";
import ServicePage from "./ServicePage";

const DFData: ServiceData = {
  title: "Demand Forecasting",
  hero: {
    title: "Demand Forecasting",
    subtitle:
      "A roster is only as good as the demand it's built for. We forecast at the granularity scheduling actually needs — by hour, by store, by skill — and feed it straight into your shift plan.",
    ctaText: "Book a Demo",
    ctaLink: "/demo",
    imageSrc: demandImg,
  },
  features: {
    sectionTitle: "Forecasts your scheduler can act on",
    sectionSubtitle: "",
    benefits: [
      "Hour-level forecasts, by location and skill",
      "Auto-detected seasonality, holidays, and one-off events",
      "Forecast feeds directly into shift planning — no CSVs in between",
    ],
    items: [
      {
        title: "AI-Driven Predictions",
        description:
          "Models trained on your data — calls, orders, footfall, admissions — and continuously updated as new history arrives.",
        icon: "Insights",
      },
      {
        title: "Peak Period Planning",
        description:
          "Spot demand surges weeks in advance. Plan staffing, inventory, and overtime budget before the pressure hits.",
        icon: "TrendingUp",
      },
      {
        title: "Anomaly & Event Awareness",
        description:
          "Holidays, promotions, weather, and historical anomalies are factored in — and flagged to your team for review.",
        icon: "AutoAwesome",
      },
      {
        title: "Direct to Scheduling",
        description:
          "Forecasts plug straight into our scheduling engine. The team that needs the demand signal already has it.",
        icon: "Schedule",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle:
      "From historical data to a live forecast you can plan against.",
    steps: [
      {
        stepNumber: 1,
        title: "Connect your historical data",
        description:
          "Pull from POS, order systems, EHRs, or call logs. We handle the cleaning and reconciliation.",
      },
      {
        stepNumber: 2,
        title: "Train forecasts on your patterns",
        description:
          "Models learn the seasonality, day-of-week effects, and event impacts unique to your operation.",
      },
      {
        stepNumber: 3,
        title: "Plug into staffing decisions",
        description:
          "Forecasts feed scheduling, shift opening, and capacity planning — with confidence intervals your team can reason about.",
      },
    ],
  },
  cta: {
    title: "Forecast like you mean to act on it",
    subtitle:
      "Demand forecasts that actually drive better schedules — see it on your data.",
    primaryButtonText: "Book a Demo",
    primaryButtonLink: "/demo",
  },
};

const DemandForecasting = () => <ServicePage data={DFData} />;

export default DemandForecasting;
