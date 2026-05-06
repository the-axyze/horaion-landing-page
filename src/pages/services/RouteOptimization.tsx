import routeImg from "../../assets/product/route-optimization.png";
import type { ServiceData } from "../../types/service";
import ServicePage from "./ServicePage";

const ROData: ServiceData = {
  title: "Route Optimization",
  hero: {
    title: "Route Optimization",
    subtitle:
      "Where Horaion started. Born from our work with UParcel on Singapore last-mile, our routing engine plans every stop against real traffic, capacity, and time windows — and re-plans the moment reality changes.",
    ctaText: "Book a Demo",
    ctaLink: "/demo",
    imageSrc: routeImg,
  },
  features: {
    sectionTitle: "Routing that holds up in the real world",
    sectionSubtitle: "",
    benefits: [
      "Live re-routing on traffic, cancellations, and new orders",
      "Multi-vehicle, multi-depot, multi-shift planning",
      "Per-route analytics on cost, distance, and on-time performance",
    ],
    items: [
      {
        title: "Smart Route Planning",
        description:
          "Plan thousands of stops across vehicles in seconds — respecting time windows, capacity, driver hours, and customer SLAs.",
        icon: "RocketLaunch",
      },
      {
        title: "Real-Time Re-Routing",
        description:
          "Traffic spikes, cancellations, and add-on orders trigger an instant re-plan. Drivers see updates in their app without manual dispatch.",
        icon: "TrendingUp",
      },
      {
        title: "Driver-First Mobile App",
        description:
          "Drivers get turn-by-turn directions, proof of delivery, and one-tap escalation built in — no second app, no extra logins.",
        icon: "FlashOn",
      },
      {
        title: "Operations Analytics",
        description:
          "See cost-per-stop, on-time rate, and idle time per driver and per route. Identify the patterns that move the needle.",
        icon: "Insights",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubtitle:
      "From a list of stops to a dispatched fleet in minutes.",
    steps: [
      {
        stepNumber: 1,
        title: "Upload your stops",
        description:
          "Connect your order management system or upload a CSV. Vehicle and driver constraints are configured once.",
      },
      {
        stepNumber: 2,
        title: "Generate optimized routes",
        description:
          "The engine produces routes that meet every constraint and minimize distance, time, and cost — your call which to optimize for.",
      },
      {
        stepNumber: 3,
        title: "Dispatch and track",
        description:
          "Drivers receive routes on their phone. Operations sees live progress; the engine re-plans on the fly when reality shifts.",
      },
    ],
  },
  cta: {
    title: "Routes that keep up with your day",
    subtitle:
      "See the engine that powered our first deployment with UParcel.",
    primaryButtonText: "Book a Demo",
    primaryButtonLink: "/demo",
  },
};

const RouteOptimization = () => <ServicePage data={ROData} />;

export default RouteOptimization;
