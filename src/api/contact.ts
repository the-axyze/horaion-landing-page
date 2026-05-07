import { apiFetch } from "./client";
import type { SubmissionResponse } from "./types";

const CONTACT_PATH = "/api/v1/public/contact";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  sourcePage?: string;
};

export const sendContactForm = (payload: ContactPayload) =>
  apiFetch<SubmissionResponse>(CONTACT_PATH, {
    method: "POST",
    body: payload,
  });
