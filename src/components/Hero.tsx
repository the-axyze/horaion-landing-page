import { Box, Button, Typography } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { motion, useReducedMotion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { fadeUp, scaleIn, staggerParent } from "../lib/motion";
import MediaFrame from "./MediaFrame";
import { MovingBorder } from "./MovingBorder";

const stats = [
  { value: "98%", label: "Accuracy" },
  { value: "10x", label: "Faster" },
  { value: "24/7", label: "Available" },
];

const heroKeyframes = {
  "@keyframes heroFloat": {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-10px)" },
  },
  "@keyframes shimmer": {
    "0%": { backgroundPosition: "200% center" },
    "100%": { backgroundPosition: "-200% center" },
  },
};

const Eyebrow = () => (
  <Box
    component={motion.div}
    variants={fadeUp}
    sx={{
      display: "inline-flex",
      alignItems: "center",
      gap: 1,
      px: 1.5,
      py: 0.5,
      mb: 3,
      borderRadius: 999,
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.85)",
      background: "rgba(23,143,214,0.12)",
      border: "1px solid rgba(23,143,214,0.35)",
      backdropFilter: "blur(8px)",
    }}
  >
    <Box
      component="span"
      sx={{
        width: 6,
        height: 6,
        borderRadius: "50%",
        bgcolor: "#7ec8ff",
        boxShadow: "0 0 10px #7ec8ff",
      }}
    />
    Built for complex workforces
  </Box>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <Box
    sx={{
      position: "relative",
      pl: 1.5,
      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: 4,
        bottom: 8,
        width: "2px",
        borderRadius: 1,
        background: "linear-gradient(180deg, #178FD6 0%, transparent 100%)",
      },
    }}
  >
    <Typography
      variant="h3"
      sx={{
        fontWeight: 700,
        color: "#FFFCF6",
        fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
        lineHeight: 1,
      }}
    >
      {value}
    </Typography>
    <Typography
      sx={{
        color: "rgba(204,221,232,0.75)",
        fontSize: "0.8rem",
        mt: 0.75,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      {label}
    </Typography>
  </Box>
);

const HeroCopy = () => (
  <Box
    component={motion.div}
    variants={staggerParent}
    initial="hidden"
    animate="show"
    sx={{ flex: "1 1 26rem" }}
  >
    <Typography
      component={motion.h1}
      variants={fadeUp}
      variant="h1"
      sx={{
        fontWeight: 700,
        color: "#FFFCF6",
        mb: 3,
        fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
        lineHeight: 1.05,
      }}
    >
      Master Complex Scheduling with{" "}
      <Box
        component="span"
        sx={{
          background:
            "linear-gradient(90deg, #7ec8ff 0%, #178FD6 50%, #7ec8ff 100%)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: { xs: "none", md: "shimmer 6s linear infinite" },
        }}
      >
        AI
      </Box>
    </Typography>
    <Typography
      component={motion.p}
      variants={fadeUp}
      variant="h6"
      sx={{
        color: "rgba(255,252,246,0.78)",
        lineHeight: 1.6,
        mb: 4,
        maxWidth: "32rem",
        fontWeight: 400,
      }}
    >
      Transform your most challenging scheduling problems into automated
      solutions. Our AI engine understands constraints, preferences, and
      conflicts to create optimal schedules.
    </Typography>
    <Box
      component={motion.div}
      variants={fadeUp}
      sx={{ display: "inline-block", mb: 5 }}
    >
      <MovingBorder borderRadius="8px">
        <Button
          variant="contained"
          component={RouterLink}
          to="/demo"
          sx={{
            py: 1.5,
            px: 4,
            fontWeight: 700,
            fontSize: "1rem",
            borderRadius: 2,
            bgcolor: "#178FD6",
            color: "#FFFCF6",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              bgcolor: "#034488",
              boxShadow: "0 12px 30px -8px rgba(23,143,214,0.55)",
            },
          }}
        >
          Book a Demo with Us
        </Button>
      </MovingBorder>
    </Box>
    <Box
      component={motion.div}
      variants={fadeUp}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "clamp(1.5rem, 4vw, 3rem)",
      }}
    >
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </Box>
  </Box>
);

const HeroMedia = ({ float }: { float: boolean }) => (
  <Box
    component={motion.div}
    variants={scaleIn}
    initial="hidden"
    animate="show"
    sx={{
      flex: "1 1 26rem",
      animation: {
        xs: "none",
        md: float ? "heroFloat 7s ease-in-out infinite" : "none",
      },
    }}
  >
    <MediaFrame>
      <Box
        component="img"
        src="/products/dashboard.webp"
        alt="Master complex scheduling with AI"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        sx={{ width: "100%", height: "auto", display: "block" }}
      />
    </MediaFrame>
  </Box>
);

const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <>
      <GlobalStyles styles={heroKeyframes} />
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          px: "clamp(1.5rem, 5vw, 4rem)",
          py: "clamp(3rem, 6vw, 5rem)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(1.5rem, 3vw, 2.5rem)",
            width: "100%",
          }}
        >
          <Box
            component={motion.div}
            variants={staggerParent}
            initial="hidden"
            animate="show"
          >
            <Eyebrow />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "clamp(2rem, 5vw, 4rem)",
              width: "100%",
            }}
          >
            <HeroMedia float={!reduce} />
            <HeroCopy />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
