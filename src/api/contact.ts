export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export type ContactResponse = {
  success: boolean;
  message: string;
};

export const sendContactForm = async (
  payload: ContactPayload,
): Promise<ContactResponse> => {
  const res = await fetch("http://localhost:8080/api/v1/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
};
