import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import {
  RocketLaunch,
  TrendingUp,
  Security,
  AccessTime,
  Groups,
  Insights,
} from "@mui/icons-material";

const features = [
  {
    icon: <RocketLaunch fontSize="large" color="primary" />,
    title: "Fast Onboarding",
    description:
      "Get up and running in minutes. Our streamlined setup means your team spends less time configuring and more time doing.",
  },
  {
    icon: <TrendingUp fontSize="large" color="primary" />,
    title: "Accelerate Growth",
    description:
      "Drive measurable results with tools built to scale alongside your business, from startup to enterprise.",
  },
  {
    icon: <Security fontSize="large" color="primary" />,
    title: "Enterprise-Grade Security",
    description:
      "Your data is protected with end-to-end encryption and compliance standards that meet the most demanding requirements.",
  },
  {
    icon: <AccessTime fontSize="large" color="primary" />,
    title: "Save Time",
    description:
      "Automate repetitive workflows and free your team to focus on high-impact work that actually moves the needle.",
  },
  {
    icon: <Groups fontSize="large" color="primary" />,
    title: "Built for Teams",
    description:
      "Collaborate seamlessly across departments with shared dashboards, role-based access, and real-time updates.",
  },
  {
    icon: <Insights fontSize="large" color="primary" />,
    title: "Actionable Insights",
    description:
      "Turn raw data into clear decisions with powerful analytics and reporting built directly into the platform.",
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
          What Our Product Can Do For You
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="white"
          sx={{ mb: 8, lineHeight: 1.6, maxWidth: 600, mx: "auto" }}
        >
          Everything you need to run smarter, move faster, and deliver more
          value to your customers — all in one place.
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
