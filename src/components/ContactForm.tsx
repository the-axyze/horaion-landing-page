import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";
import { useState } from "react";

type Field = {
  name: "name" | "email" | "phone" | "message";
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
    name: "phone",
    label: "Phone Number (Optional)",
    required: false,
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

const ContactForm = () => {
  const [form, setForm] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string | null>>({});

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

    const error = validateField(field, value);

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = () => {
    const newErrors: Record<string, string | null> = {};

    fields.forEach((field) => {
      const value = form[field.name] || "";
      newErrors[field.name] = validateField(field, value);
    });

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((e) => e !== null);

    if (!hasError) {
      alert("Message sent!");
    }
  };

  return (
    <Card sx={{ borderRadius: 4, boxShadow: 5, height: "100%" }}>
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, p: 2 }}>
          {fields.map((field) => (
            <Box key={field.name}>
              <Typography variant="body2" fontWeight={500} sx={{ mb: 0.5 }}>
                {field.label}{" "}
                {field.required && (
                  <Box component="span" sx={{ color: "error.main" }}>
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
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
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
            }}
          >
            Send Message
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
