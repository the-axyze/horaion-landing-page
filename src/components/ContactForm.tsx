import { Box, Button, Fade, Modal, TextField, Typography } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import { useState } from "react";
import { sendContactForm } from "../api/contact";

type Field = {
  name: "name" | "email" | "message";
  label: string;
  required: boolean;
  multiline?: boolean;
  rows?: number;
  validate?: (value: string) => string | null;
};

const fields: Field[] = [
  {
    name: "name",
    label: "Full Name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    required: true,
    validate: (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : "Enter a valid email",
  },
  {
    name: "message",
    label: "How can we help?",
    required: true,
    multiline: true,
    rows: 4,
    validate: (value) => (value.length > 200 ? "Max 200 characters" : null),
  },
];

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    color: "white",
    "& fieldset": { borderColor: "rgba(255,255,255,0.25)" },
    "&:hover fieldset": { borderColor: "rgba(255,255,255,0.5)" },
    "&.Mui-focused fieldset": { borderColor: "white" },
  },
  "& .MuiInputBase-input::placeholder": {
    color: "rgba(255,255,255,0.4)",
    opacity: 1,
  },
  "& .MuiFormHelperText-root": {
    color: "rgba(255,255,255,0.5)",
  },
  "& .MuiFormHelperText-root.Mui-error": {
    color: "#ff8a80",
  },
};

const ContactForm = () => {
  const [form, setForm] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [successOpen, setSuccessOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateField = (field: Field, value: string) => {
    if (field.required && !value) return "This field is required";
    if (field.validate) return field.validate(value);
    return null;
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const field = fields.find((f) => f.name === name)!;
    setErrors((prev) => ({ ...prev, [name]: validateField(field, value) }));
  };

  const handleSubmit = async () => {
    const newErrors: Record<string, string | null> = {};
    fields.forEach((field) => {
      const value = form[field.name] || "";
      newErrors[field.name] = validateField(field, value);
    });
    setErrors(newErrors);
    if (Object.values(newErrors).some((e) => e !== null)) return;

    try {
      await sendContactForm({
        name: form.name,
        email: form.email,
        message: form.message,
        sourcePage:
          typeof window !== "undefined"
            ? window.location.pathname + window.location.search
            : undefined,
      });

      setForm({});
      setSuccessOpen(true);
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <>
      {/* Success Modal */}
      <Modal
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        closeAfterTransition
      >
        <Fade in={successOpen}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "85%", sm: 420 },
              backdropFilter: "blur(16px)",
              background: "rgba(3, 68, 136, 0.85)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 4,
              p: { xs: 4, md: 5 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              textAlign: "center",
              outline: "none",
            }}
          >
            <CheckCircleOutline sx={{ fontSize: 56, color: "#178FD6" }} />
            <Typography variant="h6" fontWeight={700} color="#FFFCF6">
              Message Sent!
            </Typography>
            <Typography
              variant="body1"
              color="rgba(255,255,255,0.75)"
              sx={{ lineHeight: 1.7 }}
            >
              We will get back to you as soon as we can.
            </Typography>
            <Button
              variant="contained"
              onClick={() => setSuccessOpen(false)}
              sx={{
                mt: 1,
                fontWeight: 600,
                borderRadius: 2,
                bgcolor: "#178FD6",
                color: "#FFFCF6",
                px: 4,
                "&:hover": { bgcolor: "#034488" },
              }}
            >
              Close
            </Button>
          </Box>
        </Fade>
      </Modal>

      {/* Form */}
      <Box
        sx={{
          borderRadius: 4,
          height: "100%",
          backdropFilter: "blur(12px)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid #178FD6",
          p: { xs: 3, md: 4 },
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {fields.map((field) => (
          <Box key={field.name}>
            <Typography
              variant="body2"
              fontWeight={500}
              color="rgba(255,255,255,0.85)"
              sx={{ mb: 0.5 }}
            >
              {field.label}{" "}
              {field.required && (
                <Box component="span" sx={{ color: "#ff8a80" }}>
                  *
                </Box>
              )}
            </Typography>

            <TextField
              name={field.name}
              placeholder={field.label}
              fullWidth
              required={field.required}
              multiline={field.multiline}
              rows={field.rows}
              value={form[field.name] || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors[field.name]}
              helperText={
                errors[field.name] ||
                (field.name === "message"
                  ? `${form.message?.length || 0}/200`
                  : "")
              }
              type={field.name === "email" ? "email" : "text"}
              slotProps={
                field.name === "message"
                  ? { htmlInput: { maxLength: 200 } }
                  : {}
              }
              sx={fieldSx}
            />
          </Box>
        ))}

        <Button
          variant="contained"
          size="medium"
          onClick={handleSubmit}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            py: 1.5,
            alignSelf: "flex-start",
            fontWeight: 600,
            bgcolor: "#178FD6",
            color: "#FFFCF6",
            transition: "transform 0.2s ease",
            "&:hover": { transform: "scale(1.04)", bgcolor: "#034488" },
          }}
        >
          Send Message
        </Button>
      </Box>
    </>
  );
};

export default ContactForm;
