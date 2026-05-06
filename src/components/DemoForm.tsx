import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  MenuItem,
  Button,
  Collapse,
} from "@mui/material";
import { sendDemoRequest } from "../api/demo";

const industries = [
  "Healthcare",
  "Public Safety",
  "Education",
  "Retail & Hospitality",
  "Manufacturing",
  "Logistics",
  "Others",
];

const companySizeOptions: { label: string; value: number }[] = [
  { label: "1–10", value: 10 },
  { label: "11–50", value: 50 },
  { label: "51–200", value: 200 },
  { label: "201–1,000", value: 1000 },
  { label: "1,001–5,000", value: 5000 },
  { label: "5,000+", value: 10000 },
];

const countryRegions = [
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
];

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    color: "#FFFCF6",
    borderRadius: 2,
    "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
    "&:hover fieldset": { borderColor: "rgba(255,255,255,0.6)" },
    "&.Mui-focused fieldset": { borderColor: "#FFFCF6" },
  },
  "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.6)" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#FFFCF6" },
  "& .MuiSelect-icon": { color: "rgba(255,255,255,0.6)" },
};

const selectMenuProps = {
  MenuProps: {
    PaperProps: {
      sx: {
        bgcolor: "#034488",
        color: "#FFFCF6",
        "& .MuiMenuItem-root:hover": {
          bgcolor: "rgba(255,255,255,0.1)",
        },
        "& .MuiMenuItem-root.Mui-selected": {
          bgcolor: "rgba(255,255,255,0.15)",
        },
      },
    },
  },
};

const DemoForm = () => {
  const [name, setName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitleOrRole, setJobTitleOrRole] = useState("");
  const [industry, setIndustry] = useState("");
  const [otherIndustry, setOtherIndustry] = useState("");
  const [companySize, setCompanySize] = useState<number | "">("");
  const [countryRegion, setCountryRegion] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    const resolvedIndustry =
      industry === "Others" ? otherIndustry.trim() : industry;

    if (
      !name.trim() ||
      !workEmail.trim() ||
      !companyName.trim() ||
      !jobTitleOrRole.trim() ||
      !resolvedIndustry ||
      !companySize ||
      !countryRegion
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      await sendDemoRequest({
        name: name.trim(),
        workEmail: workEmail.trim(),
        phoneNumber: phoneNumber.trim() || undefined,
        companyName: companyName.trim(),
        jobTitleOrRole: jobTitleOrRole.trim(),
        industry: resolvedIndustry,
        companySize: Number(companySize),
        countryRegion,
      });

      alert("Demo request sent!");
      setName("");
      setWorkEmail("");
      setPhoneNumber("");
      setCompanyName("");
      setJobTitleOrRole("");
      setIndustry("");
      setOtherIndustry("");
      setCompanySize("");
      setCountryRegion("");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ py: 10, px: { xs: 3, md: 8 } }}>
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          color="#FFFCF6"
          fontWeight={700}
          align="center"
          sx={{ mb: 2 }}
        >
          Book a Demo
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="rgba(255,255,255,0.7)"
          sx={{ mb: 6, lineHeight: 1.6 }}
        >
          See how Horaion can work for your team. Fill in your details and we'll
          be in touch shortly.
        </Typography>

        <Box
          sx={{
            backdropFilter: "blur(12px)",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 4,
            p: { xs: 3, md: 5 },
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <TextField
            fullWidth
            required
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={fieldSx}
          />

          <TextField
            fullWidth
            required
            type="email"
            label="Work Email"
            value={workEmail}
            onChange={(e) => setWorkEmail(e.target.value)}
            sx={fieldSx}
          />

          <TextField
            fullWidth
            label="Phone Number (Optional)"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={fieldSx}
          />

          <TextField
            fullWidth
            required
            label="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            sx={fieldSx}
          />

          <TextField
            fullWidth
            required
            label="Job Title / Role"
            value={jobTitleOrRole}
            onChange={(e) => setJobTitleOrRole(e.target.value)}
            sx={fieldSx}
          />

          <TextField
            select
            fullWidth
            required
            label="Industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            sx={fieldSx}
            slotProps={{ select: selectMenuProps }}
          >
            {industries.map((opt) => (
              <MenuItem key={opt} value={opt}>
                {opt}
              </MenuItem>
            ))}
          </TextField>

          <Collapse in={industry === "Others"} unmountOnExit>
            <TextField
              fullWidth
              required
              label="Please specify your industry"
              value={otherIndustry}
              onChange={(e) => setOtherIndustry(e.target.value)}
              sx={fieldSx}
            />
          </Collapse>

          <TextField
            select
            fullWidth
            required
            label="Company Size"
            value={companySize === "" ? "" : String(companySize)}
            onChange={(e) => setCompanySize(Number(e.target.value))}
            sx={fieldSx}
            slotProps={{ select: selectMenuProps }}
          >
            {companySizeOptions.map((opt) => (
              <MenuItem key={opt.value} value={String(opt.value)}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            fullWidth
            required
            label="Country / Region"
            value={countryRegion}
            onChange={(e) => setCountryRegion(e.target.value)}
            sx={fieldSx}
            slotProps={{ select: selectMenuProps }}
          >
            {countryRegions.map((opt) => (
              <MenuItem key={opt} value={opt}>
                {opt}
              </MenuItem>
            ))}
          </TextField>

          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
            disabled={submitting}
            sx={{
              mt: 1,
              py: 1.5,
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: 2,
              bgcolor: "#178FD6",
              color: "#FFFCF6",
              transition: "transform 0.2s ease",
              "&:hover": { transform: "scale(1.02)", bgcolor: "#034488" },
            }}
          >
            {submitting ? "Sending..." : "Request a Demo"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default DemoForm;
