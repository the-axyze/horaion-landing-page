export type DemoPayload = {
  industry: string;
  otherIndustry?: string;
  email: string;
};

export type ApiResponse = {
  success: boolean;
  message: string;
};

export const sendDemoRequest = async (
  payload: DemoPayload,
): Promise<ApiResponse> => {
  const res = await fetch("http://localhost:8080/api/v1/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "demo", // 🔥 important
      ...payload,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
};
