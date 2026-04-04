import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import {
  RocketLaunch,
  ElectricBolt,
  Security,
  AccessTime,
  Groups,
  Insights,
} from "@mui/icons-material";

const features = [
  {
    icon: <RocketLaunch fontSize="large" color="primary" />,
    title: "AI-Powered Intelligence",
    description:
      "Advanced machine learning algorithms understand complex scheduling constraints and preferences to generate optimal solutions.",
  },
  {
    icon: <AccessTime fontSize="large" color="primary" />,
    title: "Real-Time Optimization",
    description:
      "Instantly adapt to changes, conflicts, and new requirements. Your schedule stays perfect as conditions evolve.",
  },
  {
    icon: <Groups fontSize="large" color="primary" />,
    title: "Multi-Stakeholder Support",
    description:
      "Coordinate schedules across teams, departments, and external partners with intelligent conflict resolution.",
  },
  {
    icon: <ElectricBolt fontSize="large" color="primary" />,
    title: "Lightning Fast Results",
    description:
      "Generate complex schedules in seconds, not hours. What used to take days now happens instantly.",
  },
  {
    icon: <Security fontSize="large" color="primary" />,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA standards protect your sensitive data.",
  },
  {
    icon: <Insights fontSize="large" color="primary" />,
    title: "Analytics & Insights",
    description:
      "Deep analytics reveal scheduling patterns, optimization opportunities, and resource utilization metrics.",
  },
];

const ProductOverview = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 3, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Typography
          variant="h3"
          color="white"
          fontWeight={700}
          align="center"
          sx={{ mb: 2 }}
        >
          Powerful Features for Complex Scheduling
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="white"
          sx={{ mb: 8, lineHeight: 1.6, maxWidth: 600, mx: "auto" }}
        >
          Our AI engine handles the complexity so you can focus on what matters
          most. From simple appointments to multi-resource project scheduling.
        </Typography>

        {/* Feature Grid */}
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    boxShadow: 4,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductOverview;
