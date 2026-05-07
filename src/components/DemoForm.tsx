import {
  Box,
  Button,
  Collapse,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { sendDemoRequest } from "../api/demo";
import {
  companySizeOptions,
  countryRegions,
  industries,
} from "../data/demoFormOptions";
import { TRANSITION_FAST } from "../lib/transitions";
import { glassFieldSx, glassSelectMenuProps } from "./forms/styles";

const initialState = {
  name: "",
  workEmail: "",
  phoneNumber: "",
  companyName: "",
  jobTitleOrRole: "",
  industry: "",
  otherIndustry: "",
  companySize: "" as number | "",
  countryRegion: "",
};

const DemoForm = () => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);

  const set = <K extends keyof typeof initialState>(
    key: K,
    value: (typeof initialState)[K],
  ) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async () => {
    const resolvedIndustry =
      form.industry === "Others" ? form.otherIndustry.trim() : form.industry;

    if (
      !form.name.trim() ||
      !form.workEmail.trim() ||
      !form.companyName.trim() ||
      !form.jobTitleOrRole.trim() ||
      !resolvedIndustry ||
      !form.companySize ||
      !form.countryRegion
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      await sendDemoRequest({
        name: form.name.trim(),
        workEmail: form.workEmail.trim(),
        phoneNumber: form.phoneNumber.trim() || undefined,
        companyName: form.companyName.trim(),
        jobTitleOrRole: form.jobTitleOrRole.trim(),
        industry: resolvedIndustry,
        companySize: Number(form.companySize),
        countryRegion: form.countryRegion,
      });
      alert("Demo request sent!");
      setForm(initialState);
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
          color="canvas.cream"
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
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            sx={glassFieldSx}
          />
          <TextField
            fullWidth
            required
            type="email"
            label="Work Email"
            value={form.workEmail}
            onChange={(e) => set("workEmail", e.target.value)}
            sx={glassFieldSx}
          />
          <TextField
            fullWidth
            label="Phone Number (Optional)"
            value={form.phoneNumber}
            onChange={(e) => set("phoneNumber", e.target.value)}
            sx={glassFieldSx}
          />
          <TextField
            fullWidth
            required
            label="Company Name"
            value={form.companyName}
            onChange={(e) => set("companyName", e.target.value)}
            sx={glassFieldSx}
          />
          <TextField
            fullWidth
            required
            label="Job Title / Role"
            value={form.jobTitleOrRole}
            onChange={(e) => set("jobTitleOrRole", e.target.value)}
            sx={glassFieldSx}
          />

          <TextField
            select
            fullWidth
            required
            label="Industry"
            value={form.industry}
            onChange={(e) => set("industry", e.target.value)}
            sx={glassFieldSx}
            slotProps={{ select: glassSelectMenuProps }}
          >
            {industries.map((opt) => (
              <MenuItem key={opt} value={opt}>
                {opt}
              </MenuItem>
            ))}
          </TextField>

          <Collapse in={form.industry === "Others"} unmountOnExit>
            <TextField
              fullWidth
              required
              label="Please specify your industry"
              value={form.otherIndustry}
              onChange={(e) => set("otherIndustry", e.target.value)}
              sx={glassFieldSx}
            />
          </Collapse>

          <TextField
            select
            fullWidth
            required
            label="Company Size"
            value={form.companySize === "" ? "" : String(form.companySize)}
            onChange={(e) => set("companySize", Number(e.target.value))}
            sx={glassFieldSx}
            slotProps={{ select: glassSelectMenuProps }}
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
            value={form.countryRegion}
            onChange={(e) => set("countryRegion", e.target.value)}
            sx={glassFieldSx}
            slotProps={{ select: glassSelectMenuProps }}
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
              bgcolor: "primary.main",
              color: "canvas.cream",
              transition: TRANSITION_FAST,
              "&:hover": { transform: "scale(1.02)", bgcolor: "primary.dark" },
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
