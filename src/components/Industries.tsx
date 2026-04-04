import { Box, Typography, Container, Grid, Avatar } from "@mui/material";
import {
  LocalHospital,
  LocalPolice,
  School,
  Restaurant,
  PrecisionManufacturing,
  LocalShipping,
} from "@mui/icons-material";

const industries = [
  {
    icon: <LocalHospital fontSize="large" />,
    name: "Healthcare",
    description:
      "Nurse rostering, on-call rotations, skill-mix, and compliance.",
  },
  {
    icon: <LocalPolice fontSize="large" />, // ✅ better than AccountBalance
    name: "Public Safety",
    description:
      "Police, fire, and EMS coverage planning with fairness constraints.",
  },
  {
    icon: <School fontSize="large" />,
    name: "Education",
    description: "Scheduling for faculty, staff, and student services.",
  },
  {
    icon: <Restaurant fontSize="large" />, // ✅ better for hospitality
    name: "Retail & Hospitality",
    description: "Demand-driven staffing with seasonal and hourly variability.",
  },
  {
    icon: <PrecisionManufacturing fontSize="large" />, // ✅ more modern
    name: "Manufacturing",
    description: "Multi-line shift design with skill constraints and downtime.",
  },
  {
    icon: <LocalShipping fontSize="large" />, // ✅ better than plane
    name: "Logistics",
    description:
      "Warehouse, drivers, and field operations scheduling at scale.",
  },
];

const Industries = () => {
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
          Industries We Serve
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="white"
          sx={{ mb: 8, lineHeight: 1.6, maxWidth: 600, mx: "auto" }}
        >
          Flexible and reliable scheduling for complex, shift-based operations
          across sectors.
        </Typography>

        <Grid container spacing={4}>
          {industries.map((industry, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 4, // ✅ rounded corners
                  background: "rgba(255,255,255,0.03)", // subtle glass look
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.08)",
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
                <Avatar
                  sx={{
                    width: 72,
                    height: 72,
                    bgcolor: "primary.main",
                    background: "transparent",
                    mb: 2,
                  }}
                >
                  {industry.icon}
                </Avatar>
                <Typography
                  variant="h6"
                  color="white"
                  fontWeight={600}
                  sx={{ mb: 1 }}
                >
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
