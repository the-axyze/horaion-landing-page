import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";
import { Box, Stack, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

import aisgLogo from "../assets/logos/aisg.jpg";
import horaionLogo from "../assets/logos/horaion-logo-transparent.svg";
import uparcelLogo from "../assets/logos/uparcel.webp";
import { EASE_OUT_EXPO } from "../lib/motion";
import Reveal from "./Reveal";

const MotionTimelineItem = motion(TimelineItem);

type StoryLogo = {
  src: string;
  alt: string;
  href?: string;
};

type StoryEntry = {
  // Free-form so you can write a single month ("Mar 2023") or a range
  // ("Late 2025 → 2026"). Replace with real dates once confirmed.
  date: string;
  title: string;
  description?: string;
  logos?: StoryLogo[];
};

const story: StoryEntry[] = [
  {
    date: "2022 - 2023",
    title: "On-demand delivery assignment recommender",
    description:
      "AI Singapore and UParcel project to improve delivery assignment matching for on-demand operations.",
    logos: [
      { src: aisgLogo, alt: "AI Singapore" },
      { src: uparcelLogo, alt: "UParcel" },
    ],
  },
  {
    date: "2022 - 2024",
    title: "Next-generation roster management via reinforcement learning",
    description:
      "AI Singapore and BIPO Services project using reinforcement learning to improve roster planning and scheduling.",
    logos: [{ src: aisgLogo, alt: "AI Singapore" }],
  },
  {
    date: "2023 - 2025",
    title: "Acute workforce response via Generative Flow Networks and Graph Neural Networks",
    description:
      "AI Singapore and BIPO Services project using patient lifecycle demand signals, Generative Flow Networks, and Graph Neural Networks to improve staffing response.",
    logos: [{ src: aisgLogo, alt: "AI Singapore" }],
  },
  {
    date: "Mar 2025",
    title: "Backed by AI Singapore",
    description:
      "Joined forces with AI Singapore to push our scheduling research deeper into applied AI.",
    logos: [{ src: aisgLogo, alt: "AI Singapore" }],
  },
  {
    date: "Late 2025 → 2026",
    title: "Horaion is born",
    description:
      "Three years of work, a team that spans software engineering, business development and investor relations — all pulling in one direction.",
    logos: [{ src: horaionLogo, alt: "Horaion" }],
  },
];

const LogoTile = ({ logo }: { logo: StoryLogo }) => {
  const tile = (
    <Box
      sx={{
        flexShrink: 0,
        width: "clamp(56px, 8vw, 80px)",
        height: "clamp(56px, 8vw, 80px)",
        borderRadius: 2,
        bgcolor: "rgba(255,255,255,0.95)",
        border: "1px solid rgba(255,255,255,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 1.25,
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={logo.src}
        alt={logo.alt}
        loading="lazy"
        sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
      />
    </Box>
  );

  if (!logo.href) return tile;
  return (
    <Box
      component="a"
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ display: "inline-flex" }}
    >
      {tile}
    </Box>
  );
};

const StoryHeader = () => (
  <>
    <Reveal>
      <Typography
        align="center"
        sx={{
          color: "#7ec8ff",
          fontWeight: 700,
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          mb: 1,
        }}
      >
        The Journey
      </Typography>
    </Reveal>
    <Reveal delay={0.05}>
      <Typography
        variant="h3"
        color="#FFFCF6"
        align="center"
        sx={{
          fontWeight: 700,
          pb: 1.5,
          fontSize: "clamp(2rem, 5vw, 3rem)",
        }}
      >
        Our Story
      </Typography>
    </Reveal>
    <Reveal delay={0.1}>
      <Typography
        align="center"
        color="rgba(255,255,255,0.65)"
        sx={{
          pb: "clamp(2rem, 5vw, 4rem)",
          fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
          maxWidth: 560,
          mx: "auto",
        }}
      >
        Three years in the making — from logistics, to gig work, to hospitals.
      </Typography>
    </Reveal>
  </>
);

const StoryItem = ({
  entry,
  idx,
  isLast,
  reduce,
}: {
  entry: StoryEntry;
  idx: number;
  isLast: boolean;
  reduce: boolean;
}) => (
  <MotionTimelineItem
    initial={reduce ? false : { opacity: 0, y: 24 }}
    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.65, delay: idx * 0.08, ease: EASE_OUT_EXPO }}
  >
    <TimelineSeparator>
      <TimelineDot
        sx={{
          bgcolor: "#178FD6",
          boxShadow: "0 0 0 4px rgba(23,143,214,0.15)",
        }}
      />
      {!isLast && (
        <TimelineConnector sx={{ bgcolor: "rgba(255,255,255,0.2)" }} />
      )}
    </TimelineSeparator>
    <TimelineContent sx={{ pb: "clamp(1.5rem, 3vw, 2.5rem)", pl: 2.5 }}>
      <Stack direction="row" spacing={2.5} alignItems="flex-start">
        {entry.logos?.[0] && <LogoTile logo={entry.logos[0]} />}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="overline"
            color="#178FD6"
            sx={{
              fontWeight: 700,
              letterSpacing: "0.08em",
              lineHeight: 1.2,
              display: "block",
            }}
          >
            {entry.date}
          </Typography>
          <Typography
            variant="h6"
            fontWeight={600}
            color="#FFFCF6"
            sx={{ fontSize: "clamp(1rem, 2.4vw, 1.25rem)", mt: 0.25 }}
          >
            {entry.title}
          </Typography>
          {entry.description && (
            <Typography
              variant="body2"
              color="#CCDDE8"
              sx={{ mt: 0.75, lineHeight: 1.6 }}
            >
              {entry.description}
            </Typography>
          )}
        </Box>
      </Stack>
    </TimelineContent>
  </MotionTimelineItem>
);

const Story = () => {
  const reduce = useReducedMotion() ?? false;

  return (
    <Box
      sx={{
        px: "clamp(1rem, 4vw, 3rem)",
        py: "clamp(3rem, 8vw, 6rem)",
      }}
    >
      <StoryHeader />
      <Timeline
        sx={{
          maxWidth: 760,
          mx: "auto",
          p: 0,
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {story.map((entry, idx) => (
          <StoryItem
            key={`${entry.date}-${entry.title}`}
            entry={entry}
            idx={idx}
            isLast={idx === story.length - 1}
            reduce={reduce}
          />
        ))}
      </Timeline>
    </Box>
  );
};

export default Story;
