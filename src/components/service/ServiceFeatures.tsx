import { Box, Typography, Container, Grid } from "@mui/material";
import {
  RocketLaunch,
  TrendingUp,
  Security,
  AccessTime,
  Groups,
  Insights,
  Star,
  CheckCircleOutline,
} from "@mui/icons-material";
import type { ServiceData } from "../../types/service";

const iconMap: Record<string, React.ReactNode> = {
  RocketLaunch: <RocketLaunch fontSize="large" sx={{ color: "#FFFCF6" }} />,
  TrendingUp: <TrendingUp fontSize="large" sx={{ color: "#FFFCF6" }} />,
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
          color="#FFFCF6"
          fontWeight={700}
          align="center"
          sx={{ mb: 2 }}
        >
          {data.sectionTitle}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="#FFFCF6"
          sx={{ mb: 8, lineHeight: 1.6, maxWidth: 600, mx: "auto" }}
        >
          {data.sectionSubtitle}
        </Typography>

        {/* Feature cards */}
        <Grid container spacing={4} justifyContent="center">
          {data.items.map((feature, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 3,
                  backdropFilter: "blur(12px)",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid #FFFCF6",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    background: "rgba(255,255,255,0.06)",
                    borderColor: "rgba(255,255,255,0.2)",
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  {iconMap[feature.icon ?? "Default"] ?? iconMap["Default"]}
                </Box>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  color="#FFFCF6"
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
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Benefits subsection */}
        {data.benefits && data.benefits.length > 0 && (
          <Box
            sx={{
              mt: 8,
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <Typography
              variant="h6"
              color="#FFFCF6"
              fontWeight={600}
              sx={{ mb: 3 }}
            >
              What you get
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {data.benefits.map((benefit, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <CheckCircleOutline
                    sx={{ color: "rgba(255,255,255,0.8)", flexShrink: 0 }}
                  />
                  <Typography
                    color="rgba(255,255,255,0.85)"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {benefit}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ServiceFeatures;
