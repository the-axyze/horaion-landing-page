import { Box, Typography, Container } from "@mui/material";

const AboutHoraion = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 3, md: 8 } }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          color="#FFFCF6"
          align="center"
          fontWeight={700}
          sx={{ mb: 3, fontSize: { xs: "2rem", md: "3rem" } }}
        >
          About Us
        </Typography>
        <Typography
          variant="h6"
          color="#FFFCF6"
          align="center"
          sx={{ lineHeight: 1.8, fontSize: { xs: "1rem", md: "1.15rem" } }}
        >
          At Horaion, our mission is to reimagine HR systems with AI and
          humanity — streamlining operations while keeping people at the center.
          Our core technology was developed at SMU and commercialized by a
          talented team of builders and researchers. We combine state-of-the-art
          optimization, responsible AI, and thoughtful design to help
          organizations schedule smarter, support employees better, and make
          data-informed decisions with confidence.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutHoraion;
