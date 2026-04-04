import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Avatar,
  IconButton,
} from "@mui/material";
import { FormatQuote, ArrowBack, ArrowForward } from "@mui/icons-material";

const testimonials = [
  {
    quote:
      "Horaion completely transformed how our team operates. We cut our reporting time in half within the first month alone.",
    name: "Sarah Lim",
    role: "Operations Manager",
    company: "TechCorp Pte Ltd",
    initials: "SL",
  },
  {
    quote:
      "The onboarding was seamless and the support team was incredibly responsive. I'd recommend this to any growing business.",
    name: "James Tan",
    role: "Head of Product",
    company: "Finova Solutions",
    initials: "JT",
  },
  {
    quote:
      "We evaluated five platforms before choosing Horaion. The depth of features at this price point is unmatched.",
    name: "Priya Nair",
    role: "CTO",
    company: "Meridian Health",
    initials: "PN",
  },
];

const INTERVAL_MS = 4000;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [fade, setFade] = useState(true);

  const goTo = (index: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 200);
  };

  const prev = () =>
    goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      goTo((current + 1) % testimonials.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [current, paused]);

  const t = testimonials[current];

  return (
    <Box sx={{ pt: 4, pb: 10, px: { xs: 3, md: 8 } }}>
      <Container maxWidth="md">
        <Typography
          variant="h5"
          align="center"
          color="white"
          sx={{ mb: 6, lineHeight: 1.6, maxWidth: 600, mx: "auto" }}
        >
          Don't just take it from us. Hear what our customers have to say about
          our solution.
        </Typography>

        <Paper
          elevation={0}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 3,
            opacity: fade ? 1 : 0,
            transform: fade ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.2s ease, transform 0.2s ease",
            minHeight: 260,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "transparent",
          }}
        >
          <Box>
            <FormatQuote
              sx={{
                fontSize: 48,
                color: "black",
                mb: 2,
                transform: "scaleX(-1)",
              }}
            />
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ lineHeight: 1.8, mb: 4, fontWeight: 400 }}
            >
              {t.quote}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              sx={{
                bgcolor: "primary.main",
                fontWeight: 600,
                width: 48,
                height: 48,
              }}
            >
              {t.initials}
            </Avatar>
            <Box>
              <Typography variant="subtitle1" fontWeight={700}>
                {t.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t.role}, {t.company}
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Controls */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          sx={{ mt: 4 }}
        >
          <IconButton onClick={prev} size="small">
            <ArrowBack fontSize="small" />
          </IconButton>

          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => goTo(index)}
              sx={{
                width: index === current ? 24 : 8,
                height: 8,
                borderRadius: 4,
                bgcolor: index === current ? "primary.main" : "divider",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}

          <IconButton onClick={next} size="small">
            <ArrowForward fontSize="small" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
