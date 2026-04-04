import { Box, Typography, Container, Button } from "@mui/material";

const stats = [
  { value: "10,000+", label: "Organizations Trust Us" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Expert Support" },
];

const CTA = () => {
  return (
    <Box sx={{ pt: 10, pb: 4, px: { xs: 3, md: 8 } }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          color="white"
          fontWeight={700}
          align="center"
          sx={{ mb: 2 }}
        >
          Ready to Transform Your Scheduling Process?
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="white"
          sx={{ mb: 6, lineHeight: 1.6, maxWidth: 600, mx: "auto" }}
        >
          Join thousands of organizations already using our AI technology to
          solve their most complex scheduling challenges.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // ✅ center horizontally
            gap: 2,
            mb: 5,
            flexWrap: "wrap",
            mx: "auto",
            textAlign: "center", // ✅ helps when wrapped
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              py: 1.5,
              px: 4,
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: 2,
              bgcolor: "purple",
              color: "white",
              transition: "transform 0.2s ease",
              "&:hover": { transform: "scale(1.05)", bgcolor: "purple" },
            }}
          >
            Start Free Trial
          </Button>
          <Typography
            variant="body2"
            color="rgba(255,255,255,0.6)"
            sx={{
              fontSize: "0.8rem",
              textAlign: "center", // ✅ keeps it centered under button on small screens
            }}
          >
            No credit card required • 14-day free trial • Cancel anytime
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // ✅ center all stats horizontally
            alignItems: "center",
            gap: { xs: 4, md: 15 }, // ✅ more breathing room
            flexWrap: "wrap",
            textAlign: "center", // ✅ center text inside each stat
            pt: 8,
          }}
        >
          {stats.map((stat) => (
            <Box key={stat.label} sx={{ gap: 3 }}>
              <Typography
                fontWeight={700}
                color="white"
                sx={{
                  fontSize: { xs: "2rem", md: "2.4rem" },
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                color="rgba(255,255,255,0.7)"
                sx={{ fontSize: "0.85rem", mt: 0.5, letterSpacing: 0.5 }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CTA;
