import { apiFetch } from "./client";
import { ENDPOINTS } from "./endpoints";
import type { ApiResponse } from "./types";

export type DemoPayload = {
  industry: string;
  otherIndustry?: string;
  email: string;
};

export const sendDemoRequest = (payload: DemoPayload) =>
  apiFetch<ApiResponse>(ENDPOINTS.demo, {
    method: "POST",
    body: { type: "demo", ...payload },
  });
