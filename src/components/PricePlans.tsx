import { Check } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { pricingPlans, type PricingPlan } from "../data/pricingPlans";
import {
  TRANSITION_BUTTON,
  TRANSITION_FAST,
} from "../lib/transitions";

const PlanCard = ({ plan }: { plan: PricingPlan }) => (
  <Box
    sx={{
      flex: 1,
      maxWidth: { md: 340 },
      borderRadius: 3,
      border: plan.highlighted ? "2px solid" : "1px solid",
      borderColor: "primary.main",
      backdropFilter: "blur(12px)",
      background: plan.highlighted
        ? "rgba(255,255,255,0.18)"
        : "rgba(255,255,255,0.08)",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      p: 4,
      transition: TRANSITION_BUTTON,
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
      },
    }}
  >
    {plan.badge && (
      <Chip
        label={plan.badge}
        size="small"
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          fontWeight: 600,
          bgcolor: "rgba(255,255,255,0.25)",
          color: "canvas.cream",
          border: "1px solid",
          borderColor: "canvas.mist",
        }}
      />
    )}

    <Typography variant="overline" fontWeight={600} color="rgba(255,255,255,0.6)">
      {plan.name}
    </Typography>

    <Box display="flex" alignItems="flex-end" gap={0.5} sx={{ mt: 1, mb: 2 }}>
      <Typography variant="h3" fontWeight={700} color="canvas.cream">
        {plan.price}
      </Typography>
      {plan.period && (
        <Typography
          variant="body1"
          color="rgba(255,255,255,0.6)"
          sx={{ mb: 1 }}
        >
          {plan.period}
        </Typography>
      )}
    </Box>

    <Typography
      variant="body2"
      color="rgba(255,255,255,0.7)"
      sx={{ mb: 3 }}
    >
      {plan.description}
    </Typography>

    <Button
      variant={plan.highlighted ? "contained" : "outlined"}
      fullWidth
      size="large"
      sx={{
        borderRadius: 2,
        mb: 3,
        fontWeight: 600,
        transition: TRANSITION_FAST,
        ...(plan.highlighted
          ? {
              bgcolor: "primary.main",
              color: "canvas.cream",
              "&:hover": {
                bgcolor: "primary.dark",
                transform: "scale(1.02)",
              },
            }
          : {
              borderColor: "rgba(255,255,255,0.4)",
              color: "canvas.cream",
              "&:hover": {
                borderColor: "canvas.cream",
                bgcolor: "rgba(255,255,255,0.08)",
              },
            }),
      }}
    >
      {plan.cta}
    </Button>

    <List disablePadding>
      {plan.features.map((feature) => (
        <ListItem key={feature} disablePadding sx={{ mb: 1 }}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <Check fontSize="small" sx={{ color: "rgba(255,255,255,0.8)" }} />
          </ListItemIcon>
          <ListItemText
            primary={feature}
            primaryTypographyProps={{
              variant: "body2",
              color: "rgba(255,255,255,0.8)",
            }}
          />
        </ListItem>
      ))}
    </List>
  </Box>
);

const PricePlans = () => (
  <Box sx={{ py: 10, px: { xs: 3, md: 8 } }}>
    <Container maxWidth="md">
      <Typography
        variant="h3"
        color="canvas.cream"
        fontWeight={700}
        align="center"
        sx={{ mb: 2 }}
      >
        Pricing
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="canvas.mist"
        sx={{ mb: 8, lineHeight: 1.6 }}
      >
        Achieve more with our advanced plans or try it out free for 30 days.
        Change or cancel your plans anytime.
      </Typography>
    </Container>

    <Container maxWidth="lg">
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={3}
        alignItems="stretch"
        justifyContent="center"
      >
        {pricingPlans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </Box>
    </Container>
  </Box>
);

export default PricePlans;
