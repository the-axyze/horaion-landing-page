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
    icon: <RocketLaunch fontSize="large" />,
    title: "Constraint-Aware Planning",
    description:
      "Model your scheduling rules, preferences, and coverage needs so the roster starts from the realities of your operation.",
  },
  {
    icon: <AccessTime fontSize="large" />,
    title: "Responsive Planning",
    description:
      "Adjust to changes, conflicts, and new requirements while keeping the roster aligned with operational needs.",
  },
  {
    icon: <Groups fontSize="large" />,
    title: "Multi-Stakeholder Support",
    description:
      "Coordinate schedules across teams, departments, and external partners with intelligent conflict resolution.",
  },
  {
    icon: <ElectricBolt fontSize="large" />,
    title: "Faster Planning Cycles",
    description:
      "Generate schedule options more efficiently, helping teams reduce manual effort and review trade-offs sooner.",
  },
  {
    icon: <Security fontSize="large" />,
    title: "Security-Minded Workflows",
    description:
      "Support careful handling of workforce data across scheduling workflows, access needs, and operational reviews.",
  },
  {
    icon: <Insights fontSize="large" />,
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
          color="#FFFCF6"
          fontWeight={700}
          align="center"
          sx={{ mb: 2 }}
        >
          Powerful Features for Complex Scheduling
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="#FFFCF6"
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
                  borderRadius: 4, // ✅ rounded corners
                  background: "rgba(255,255,255,0.03)", // subtle glass look
                  backdropFilter: "blur(6px)",
                  border: "1px solid #EDECE8",
                  transition: "all 0.3s ease",
                  height: "100%", // ✅ equal height cards
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",

                  "&:hover": {
                    transform: "translateY(-6px)", // 🔥 lift effect
                    borderColor: "rgba(255,255,255,0.2)",
                    background: "rgba(255,255,255,0.06)",
                  },
                }}
              >
                <Box color="#FFFCF6" sx={{ mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography
                  variant="h6"
                  color="#FFFCF6"
                  fontWeight={600}
                  sx={{ mb: 1 }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="#FFFCF6"
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
