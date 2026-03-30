import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Container,
} from "@mui/material";
import { Check } from "@mui/icons-material";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Perfect for getting started and exploring core features.",
    cta: "Get Started",
    highlighted: false,
    features: [
      "Up to 3 projects",
      "Basic analytics dashboard",
      "1GB storage",
      "Community support",
      "API access",
    ],
  },
  {
    name: "Advanced",
    price: "$10",
    period: "/mth",
    description:
      "Great for growing teams that need more power and flexibility.",
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Unlimited projects",
      "Advanced analytics & reports",
      "20GB storage",
      "Priority email support",
      "API access",
      "Custom integrations",
      "Team collaboration tools",
    ],
  },
  {
    name: "Pro",
    price: "$25",
    period: "/mth",
    description: "Built for professionals who need the full suite of tools.",
    cta: "Start Free Trial",
    highlighted: false,
    features: [
      "Everything in Advanced",
      "Unlimited storage",
      "Dedicated account manager",
      "24/7 phone & email support",
      "Custom branding",
      "Advanced security controls",
      "SLA guarantee",
    ],
  },
];

const PricePlans = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 3, md: 8 } }}>
      {/* Header */}
      <Container maxWidth="md">
        <Typography
          variant="h3"
          color="white"
          fontWeight={700}
          align="center"
          sx={{ mb: 2 }}
        >
          Pricing
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="white"
          sx={{ mb: 8, lineHeight: 1.6 }}
        >
          Achieve more with our advanced plans or try it out free for 30 days.
          Change or cancel your plans anytime.
        </Typography>
      </Container>

      {/* Cards */}
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={3}
          alignItems="stretch"
          justifyContent="center"
        >
          {plans.map((plan) => (
            <Card
              key={plan.name}
              elevation={plan.highlighted ? 8 : 1}
              sx={{
                flex: 1,
                maxWidth: { md: 340 },
                borderRadius: 3,
                border: plan.highlighted ? "2px solid" : "1px solid",
                borderColor: plan.highlighted ? "primary.main" : "divider",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* Most Popular badge */}
              {plan.badge && (
                <Chip
                  label={plan.badge}
                  color="primary"
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    fontWeight: 600,
                  }}
                />
              )}

              <CardContent sx={{ p: 4, flexGrow: 1 }}>
                {/* Plan name */}
                <Typography
                  variant="overline"
                  color="text.secondary"
                  fontWeight={600}
                >
                  {plan.name}
                </Typography>

                {/* Price */}
                <Box
                  display="flex"
                  alignItems="flex-end"
                  gap={0.5}
                  sx={{ mt: 1, mb: 2 }}
                >
                  <Typography variant="h3" fontWeight={700}>
                    {plan.price}
                  </Typography>
                  {plan.period && (
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {plan.period}
                    </Typography>
                  )}
                </Box>

                {/* Description */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  {plan.description}
                </Typography>

                {/* CTA */}
                <Button
                  variant={plan.highlighted ? "contained" : "outlined"}
                  fullWidth
                  size="large"
                  sx={{ borderRadius: 2, mb: 3 }}
                >
                  {plan.cta}
                </Button>

                {/* Features */}
                <List disablePadding>
                  {plan.features.map((feature) => (
                    <ListItem key={feature} disablePadding sx={{ mb: 1 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <Check fontSize="small" color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PricePlans;
