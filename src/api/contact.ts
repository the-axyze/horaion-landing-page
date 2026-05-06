import { apiFetch } from "./client";
import { ENDPOINTS } from "./endpoints";
import type { SubmissionResponse } from "./types";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  sourcePage?: string;
};

export const sendContactForm = (payload: ContactPayload) =>
  apiFetch<SubmissionResponse>(ENDPOINTS.contact, {
    method: "POST",
    body: payload,
  });
