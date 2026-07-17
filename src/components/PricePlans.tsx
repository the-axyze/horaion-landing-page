import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { TRANSITION_BUTTON } from "../lib/transitions";
import { MovingBorder } from "./MovingBorder";

const PricePlans = () => (
  <Box
    sx={{
      px: { xs: 3, md: 8 },
      py: { xs: 10, md: 14 },
      minHeight: "calc(100vh - 88px)",
      display: "flex",
      alignItems: "center",
    }}
  >
    <Container maxWidth="md" sx={{ textAlign: "center" }}>
      <Typography
        variant="overline"
        color="canvas.mist"
        fontWeight={700}
        sx={{ letterSpacing: 2 }}
      >
        Pricing
      </Typography>
      <Typography
        variant="h2"
        color="canvas.cream"
        fontWeight={700}
        sx={{ mt: 1, mb: 3, fontSize: { xs: "2.5rem", md: "3.75rem" } }}
      >
        Pricing built around your operation
      </Typography>
      <Typography
        variant="h6"
        color="canvas.mist"
        sx={{
          mb: 5,
          mx: "auto",
          maxWidth: 680,
          lineHeight: 1.7,
          fontWeight: 400,
        }}
      >
        Every workforce has different scheduling rules, integrations, and
        rollout needs. Book a demo to tell us about your operation and receive
        pricing tailored to your team.
      </Typography>

      <MovingBorder borderRadius="8px">
        <Button
          component={RouterLink}
          to="/demo"
          variant="contained"
          size="large"
          endIcon={<ArrowForward />}
          sx={{
            py: 1.5,
            px: 4,
            borderRadius: 2,
            bgcolor: "primary.main",
            color: "canvas.cream",
            fontSize: "1rem",
            fontWeight: 700,
            transition: TRANSITION_BUTTON,
            "&:hover": {
              bgcolor: "primary.dark",
              transform: "scale(1.03)",
            },
          }}
        >
          Book a Demo
        </Button>
      </MovingBorder>
    </Container>
  </Box>
);

export default PricePlans;
