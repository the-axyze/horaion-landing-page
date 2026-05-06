import { apiFetch } from "./client";
import type { SubmissionResponse } from "./types";

const DEMO_PATH = "/api/v1/public/demo-requests";

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
  apiFetch<SubmissionResponse>(DEMO_PATH, {
    method: "POST",
    body: payload,
  });
