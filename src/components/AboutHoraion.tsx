import { Box, Typography } from "@mui/material";

const AboutHoraion = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h3"
        color="#FFFCF6"
        align="center"
        sx={{ pb: 2 }}
        fontWeight="bold"
      >
        About Us
      </Typography>
      <Typography
        variant="body1"
        color="#FFFCF6"
        align="center"
        sx={{ px: 10, mx: 10 }}
      >
        At Horaion, our mission is to reimagine HR systems with AI and humanity—
        streamlining operations while keeping people at the center. Our core
        technology was developed at SMU and commercialized by a talented team of
        builders and researchers. We combine state‑of‑the‑art optimization,
        responsible AI, and thoughtful design to help organizations schedule
        smarter, support employees better, and make data‑informed decisions with
        confidence.
      </Typography>
    </Box>
  );
};

export default AboutHoraion;
