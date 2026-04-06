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

const industries = [
  "Healthcare",
  "Public Safety",
  "Education",
  "Retail & Hospitality",
  "Manufacturing",
  "Logistics",
  "Others",
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

const DemoForm = () => {
  const [industry, setIndustry] = useState("");
  const [otherIndustry, setOtherIndustry] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // handle submission
    console.log({ industry, otherIndustry, email });
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
          {/* Industry dropdown */}
          <TextField
            select
            fullWidth
            label="Industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            sx={fieldSx}
            slotProps={{
              select: {
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
              },
            }}
          >
            {industries.map((opt) => (
              <MenuItem key={opt} value={opt}>
                {opt}
              </MenuItem>
            ))}
          </TextField>

          {/* "Others" text field — only shown when Others is selected */}
          <Collapse in={industry === "Others"} unmountOnExit>
            <TextField
              fullWidth
              label="Please specify your industry"
              value={otherIndustry}
              onChange={(e) => setOtherIndustry(e.target.value)}
              sx={fieldSx}
            />
          </Collapse>

          {/* Email */}
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={fieldSx}
          />

          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
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
            Request a Demo
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default DemoForm;
