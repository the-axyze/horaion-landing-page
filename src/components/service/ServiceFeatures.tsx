import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import {
  RocketLaunch,
  TrendingUp,
  Security,
  AccessTime,
  Groups,
  Insights,
  Star,
} from "@mui/icons-material";
import type { ServiceData } from "../../types/service";

// Map icon name strings to actual icon components
const iconMap: Record<string, React.ReactNode> = {
  RocketLaunch: <RocketLaunch fontSize="large" color="primary" />,
  TrendingUp: <TrendingUp fontSize="large" color="primary" />,
  Security: <Security fontSize="large" color="primary" />,
  AccessTime: <AccessTime fontSize="large" color="primary" />,
  Groups: <Groups fontSize="large" color="primary" />,
  Insights: <Insights fontSize="large" color="primary" />,
  Default: <Star fontSize="large" color="primary" />,
};

interface Props {
  data: ServiceData["features"];
}

const ServiceFeatures = ({ data }: Props) => {
  return (
    <Box sx={{ py: 10, px: { xs: 3, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          color="white"
          fontWeight={700}
          align="center"
          sx={{ mb: 2 }}
        >
          {data.sectionTitle}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="white"
          sx={{ mb: 8, lineHeight: 1.6, maxWidth: 600, mx: "auto" }}
        >
          {data.sectionSubtitle}
        </Typography>

        <Grid container spacing={4}>
          {data.items.map((feature, index) => (
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
                  "&:hover": { boxShadow: 4, transform: "translateY(-4px)" },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  {iconMap[feature.icon ?? "Default"] ?? iconMap["Default"]}
                </Box>
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

export default ServiceFeatures;
