import { Typography, Box, Container, TextField, Button } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import { useState } from "react";

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const StartFree = () => {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const hasError = touched && !isValidEmail(email);

  const handleSubmit = () => {
    setTouched(true);
    if (isValidEmail(email)) {
      setSubmitted(true);
    }
  };

  return (
    <Box sx={{ py: 10, px: { xs: 3, md: 8 } }}>
      <Container maxWidth="sm">
        {!submitted ? (
          <>
            <Typography
              variant="h3"
              color="#FFFCF6"
              fontWeight={700}
              align="center"
            >
              Start For Free
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="rgba(255,255,255,0.7)"
              sx={{ mb: 6, lineHeight: 1.6 }}
            >
              Enter your organization email and you will receive an invitation
              key and link to complete your onboarding.
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
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched(true)}
                error={hasError}
                helperText={
                  hasError ? "Please enter a valid email address" : ""
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#FFFCF6",
                    borderRadius: 2,
                    "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.6)",
                    },
                    "&.Mui-focused fieldset": { borderColor: "#FFFCF6" },
                  },
                  "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.6)" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#FFFCF6" },
                  "& .MuiFormHelperText-root.Mui-error": { color: "#ff8a80" },
                }}
              />
              <Button
                variant="contained"
                size="large"
                onClick={handleSubmit}
                sx={{
                  py: 1.5,
                  alignSelf: "center",
                  size: "medium",
                  fontWeight: 700,
                  fontSize: "1rem",
                  borderRadius: 2,
                  bgcolor: "#178FD6",
                  color: "#FFFCF6",
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "scale(1.02)", bgcolor: "#034488" },
                }}
              >
                Get Invitation Key
              </Button>
            </Box>
          </>
        ) : (
          <Box
            sx={{
              backdropFilter: "blur(12px)",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 4,
              p: { xs: 4, md: 6 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              textAlign: "center",
            }}
          >
            <CheckCircleOutline sx={{ fontSize: 64, color: "#178FD6" }} />
            <Typography variant="h4" color="#FFFCF6" fontWeight={700}>
              Submitted!
            </Typography>
            <Typography
              variant="h6"
              color="rgba(255,255,255,0.7)"
              sx={{ lineHeight: 1.7 }}
            >
              Please check your email for more details.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default StartFree;
