import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";
import { useState } from "react";

const fields = [
  { name: "name", label: "Full Name" },
  { name: "phone", label: "Phone Number" },
  { name: "message", label: "Message" },
] as const;

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (value !== "") setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (value === "") setErrors((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = () => {
    const newErrors = {
      name: form.name === "",
      phone: form.phone === "",
      message: form.message === "",
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      alert("Message sent!");
    }
  };

  return (
    <Card sx={{ borderRadius: 4, boxShadow: 5 }}>
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, p: 2 }}>
          <Typography variant="h5" fontWeight={600}>
            Send us a message and we will do our best to get back to you as soon
            as possible!
          </Typography>

          {fields.map(({ name, label }) => (
            <Box key={name}>
              <Typography variant="body2" fontWeight={500} sx={{ mb: 0.5 }}>
                {label}{" "}
                <Box component="span" sx={{ color: "error.main" }}>
                  *
                </Box>
              </Typography>
              <TextField
                name={name}
                placeholder={label}
                required
                fullWidth
                multiline={name === "message"}
                rows={name === "message" ? 4 : 1}
                value={form[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors[name]}
                helperText={
                  errors[name]
                    ? "This field is required"
                    : name === "message"
                      ? `${form.message.length}/200`
                      : ""
                }
                slotProps={
                  name === "message" ? { htmlInput: { maxLength: 200 } } : {}
                }
                sx={{
                  "& .MuiInputLabel-root": { display: "none" },
                  "& .MuiOutlinedInput-root": { borderRadius: 2 },
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
              alignSelf: "flex-end",
            }}
          >
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
