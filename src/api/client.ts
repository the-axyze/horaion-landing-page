import type { ApiErrorResponse } from "./types";

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
};

export const apiFetch = async <T>(
  path: string,
  { body, headers, ...init }: RequestOptions = {},
): Promise<T> => {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();

  if (!res.ok) {
    const err = data as ApiErrorResponse;
    throw new Error(err.message || "Request failed");
  }

  return data as T;
};
