export const industries = [
  "Healthcare",
  "Public Safety",
  "Education",
  "Hospitality, F&B and Retail",
  "Manufacturing",
  "Logistics",
  "Others",
] as const;

export const companySizeOptions: { label: string; value: number }[] = [
  { label: "1–10", value: 10 },
  { label: "11–50", value: 50 },
  { label: "51–200", value: 200 },
  { label: "201–1,000", value: 1000 },
  { label: "1,001–5,000", value: 5000 },
  { label: "5,000+", value: 10000 },
];

export const countryRegions = [
  "Singapore",
  "Malaysia",
  "Indonesia",
  "Philippines",
  "Thailand",
  "Vietnam",
  "Australia",
  "United States",
  "United Kingdom",
  "Other",
] as const;
