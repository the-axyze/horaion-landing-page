import React from "react";
import { Box, Typography, Container, Grid, Avatar } from "@mui/material";
import {
  LocalHospital,
  AccountBalance,
  School,
  ShoppingCart,
  Factory,
  FlightTakeoff,
} from "@mui/icons-material";

const industries = [
  {
    icon: <LocalHospital fontSize="large" />,
    name: "Healthcare",
    description:
      "Streamline patient management, compliance tracking, and operational workflows for healthcare providers.",
  },
  {
    icon: <AccountBalance fontSize="large" />,
    name: "Finance",
    description:
      "Empower financial institutions with secure, real-time data processing and regulatory compliance tools.",
  },
  {
    icon: <School fontSize="large" />,
    name: "Education",
    description:
      "Help educational institutions manage resources, track outcomes, and deliver better learning experiences.",
  },
  {
    icon: <ShoppingCart fontSize="large" />,
    name: "Retail & E-Commerce",
    description:
      "Optimise inventory, personalise customer experiences, and drive conversions across every channel.",
  },
  {
    icon: <Factory fontSize="large" />,
    name: "Manufacturing",
    description:
      "Improve production efficiency, reduce downtime, and gain full visibility across your supply chain.",
  },
  {
    icon: <FlightTakeoff fontSize="large" />,
    name: "Logistics & Travel",
    description:
      "Coordinate complex operations, track assets in real time, and deliver seamless customer journeys.",
  },
];

const Industries = () => {
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
          Industries We Serve
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 8, lineHeight: 1.6, maxWidth: 600, mx: "auto" }}
        >
          Our platform is built to adapt. Whether you're in healthcare, finance,
          or retail, we have the tools to help you thrive.
        </Typography>

        <Grid container spacing={4}>
          {industries.map((industry, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
                sx={{ p: 3 }}
              >
                <Avatar
                  sx={{
                    width: 72,
                    height: 72,
                    bgcolor: "primary.main",
                    mb: 2,
                  }}
                >
                  {industry.icon}
                </Avatar>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                  {industry.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  {industry.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Industries;
