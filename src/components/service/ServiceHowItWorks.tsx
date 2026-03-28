import { Box, Typography, Container, Grid } from "@mui/material";
import type { ServiceData } from "../../types/service";

interface Props {
  data: ServiceData["howItWorks"];
}

const ServiceHowItWorks = ({ data }: Props) => {
  return (
    <Box
      sx={(theme) => ({
        py: 10,
        px: { xs: 3, md: 8 },
        bgcolor:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.background.paper,
      })}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" fontWeight={700} align="center" sx={{ mb: 2 }}>
          {data.sectionTitle}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 8, lineHeight: 1.6, maxWidth: 600, mx: "auto" }}
        >
          {data.sectionSubtitle}
        </Typography>

        <Grid container spacing={4}>
          {data.steps.map((step, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
              >
                {/* Step number circle */}
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  {step.stepNumber}
                </Box>

                {/* Connector line between steps (hidden on last) */}
                {index < data.steps.length - 1 && (
                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      width: "100%",
                    }}
                  />
                )}

                <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                  {step.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceHowItWorks;
