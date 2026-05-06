import { apiFetch } from "./client";
import { ENDPOINTS } from "./endpoints";
import type { SubmissionResponse } from "./types";

export type DemoPayload = {
  name: string;
  workEmail: string;
  phoneNumber?: string;
  companyName: string;
  jobTitleOrRole: string;
  industry: string;
  companySize: number;
  countryRegion: string;
};

export const sendDemoRequest = (payload: DemoPayload) =>
  apiFetch<SubmissionResponse>(ENDPOINTS.demo, {
    method: "POST",
    body: payload,
  });
