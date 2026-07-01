import type { ServiceData } from "../../types/service";
import { demandForecastingData } from "./demand-forecasting";
import { flexiSchedulingData } from "./flexi-scheduling";
import { gigSchedulingData } from "./gig-scheduling";
import { leaveApplicationData } from "./leave-application";
import { profileManagementData } from "./profile-management";
import { routeOptimizationData } from "./route-optimization";
import { schedulingSolutionsData } from "./scheduling-solutions";
import { shiftPreferencesData } from "./shift-preferences";

export type ServiceRouteEntry = {
  /** URL path segment, no leading slash. */
  slug: string;
  data: ServiceData;
};

export const services: ServiceRouteEntry[] = [
  { slug: "ai-scheduling-solutions", data: schedulingSolutionsData },
  { slug: "route-optimization", data: routeOptimizationData },
  { slug: "demand-forecasting", data: demandForecastingData },
  { slug: "profile-management", data: profileManagementData },
  { slug: "flexi-scheduling", data: flexiSchedulingData },
  { slug: "shift-preferences", data: shiftPreferencesData },
  { slug: "gig-scheduling", data: gigSchedulingData },
  { slug: "leave-application", data: leaveApplicationData },
];
