import { Box, Button, Chip, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import MediaFrame from "../MediaFrame";
import { MovingBorder } from "../MovingBorder";
import { fadeUp, scaleIn, staggerParent } from "../../lib/motion";
import type { ServiceData } from "../../types/service";

interface Props {
  data: ServiceData["hero"];
}

const HeroMedia = ({ data }: Props) => {
  if (data.videoSrc) {
    return (
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{ width: "100%", display: "block" }}
      >
        <source src={data.videoSrc} type="video/mp4" />
      </Box>
    );
  }
  if (data.imageSrc) {
    return (
      <Box
        component="img"
        src={data.imageSrc}
        alt={data.title}
        sx={{ width: "100%", display: "block" }}
      />
    );
  }
  return (
    <Box
      sx={{
        width: "100%",
        height: 320,
        bgcolor: "rgba(255,255,255,0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography color="rgba(255,255,255,0.4)">Media placeholder</Typography>
    </Box>
  );
};

const HeroCopy = ({ data }: Props) => (
  <Box
    component={motion.div}
    variants={staggerParent}
    initial="hidden"
    animate="show"
    sx={{ flex: "1 1 26rem" }}
  >
    {data.badgeLabel && (
      <Chip
        component={motion.div}
        variants={fadeUp}
        label={data.badgeLabel}
        size="small"
        sx={{
          mb: 2,
          fontWeight: 600,
          color: "rgba(255,255,255,0.9)",
          background: "rgba(23,143,214,0.15)",
          border: "1px solid rgba(23,143,214,0.4)",
          backdropFilter: "blur(8px)",
        }}
      />
    )}
    <Typography
      component={motion.h1}
      variants={fadeUp}
      variant="h1"
      sx={{
        color: "#FFFCF6",
        fontWeight: 700,
        mb: 3,
        fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)",
        lineHeight: 1.1,
        backgroundImage:
          "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.78) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {data.title}
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
      {data.subtitle}
    </Typography>
    <Box
      component={motion.div}
      variants={fadeUp}
      sx={{ display: "inline-block" }}
    >
      <MovingBorder borderRadius="8px">
        <Button
          variant="contained"
          component={RouterLink}
          to={data.ctaLink}
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
          {data.ctaText}
        </Button>
      </MovingBorder>
    </Box>
  </Box>
);

const ServiceHero = ({ data }: Props) => {
  return (
    <Box
      sx={{
        px: "clamp(1.5rem, 5vw, 4rem)",
        pt: "clamp(2rem, 5vw, 4rem)",
        pb: "clamp(3rem, 6vw, 5rem)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "clamp(2rem, 5vw, 4rem)",
          width: "100%",
        }}
      >
        <Box
          component={motion.div}
          variants={scaleIn}
          initial="hidden"
          animate="show"
          sx={{ flex: "1 1 26rem" }}
        >
          <MediaFrame>
            <HeroMedia data={data} />
          </MediaFrame>
        </Box>
        <HeroCopy data={data} />
      </Box>
    </Box>
  );
};

export default ServiceHero;
