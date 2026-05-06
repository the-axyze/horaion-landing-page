import { apiFetch } from "./client";
import { ENDPOINTS } from "./endpoints";
import type { ApiResponse } from "./types";

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export const sendContactForm = (payload: ContactPayload) =>
  apiFetch<ApiResponse>(ENDPOINTS.contact, {
    method: "POST",
    body: payload,
  });
