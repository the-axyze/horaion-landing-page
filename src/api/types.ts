export type SubmissionStatus = "PENDING" | "SENT" | "FAILED";

export type SubmissionResponse = {
  id: number;
  status: SubmissionStatus;
  createdAt: string;
};

export type ApiErrorField = {
  field: string;
  message: string;
};

export type ApiErrorResponse = {
  timestamp: string;
  status: number;
  error: string;
  code: string;
  message: string;
  path: string;
  fieldErrors: ApiErrorField[];
};
