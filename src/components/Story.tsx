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

import horaionLogo from "../assets/logos/horaion-logo-black-bg.svg";
import { default as aisgLogo, default as pizzahutLogo, default as ttshLogo, default as uparcelLogo } from "../assets/logos/uparcel.webp"; //"../assets/story/aisg.png";

type StoryLogo = {
  src: string;
  alt: string;
  href?: string;
};

type StoryEntry = {
  // Free-form so you can write a single month ("Mar 2023") or a range
  // ("Late 2025 → 2026"). Kept as a string for flexibility — replace with
  // real dates once the months are confirmed.
  date: string;
  title: string;
  description?: string;
  logos?: StoryLogo[];
};

const story: StoryEntry[] = [
  {
    date: "Mar 2023",
    title: "Logistics, where it all began",
    description:
      "Built last-mile route optimization with UParcel — our first taste of solving real operational chaos.",
    logos: [{ src: uparcelLogo, alt: "UParcel" }],
  },
  {
    date: "Jan 2024",
    title: "Scheduling at scale",
    description:
      "Took on gig-worker scheduling for Pizza Hut across stores, balancing demand peaks and worker availability.",
    logos: [{ src: pizzahutLogo, alt: "Pizza Hut" }],
  },
  {
    date: "Aug 2024",
    title: "Healthcare's hardest shift",
    description:
      "Partnered with Tan Tock Seng Hospital on shift scheduling for nurses and doctors — one of the most constraint-heavy problems in the field.",
    logos: [{ src: ttshLogo, alt: "Tan Tock Seng Hospital" }],
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
        width: { xs: 56, sm: 80 },
        height: { xs: 56, sm: 80 },
        borderRadius: 2,
        bgcolor: "rgba(255,255,255,0.95)",
        border: "1px solid rgba(255,255,255,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 1, sm: 1.25 },
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={logo.src}
        alt={logo.alt}
        loading="lazy"
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );

  return logo.href ? (
    <Box
      component="a"
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ display: "inline-flex" }}
    >
      {tile}
    </Box>
  ) : (
    tile
  );
};

const Story = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: { xs: 4, md: 6 } }}>
      <Typography
        variant="h3"
        color="#FFFCF6"
        align="center"
        fontWeight="bold"
        sx={{ pb: { xs: 1, md: 2 }, fontSize: { xs: "2rem", md: "3rem" } }}
      >
        Our Story
      </Typography>
      <Typography
        align="center"
        color="rgba(255,255,255,0.65)"
        sx={{ pb: { xs: 3, md: 5 }, fontSize: { xs: "0.95rem", md: "1.1rem" } }}
      >
        Three years in the making — from logistics, to gig work, to hospitals.
      </Typography>

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
        {story.map((entry, idx) => {
          const isLast = idx === story.length - 1;
          return (
            <TimelineItem key={`${entry.date}-${entry.title}`}>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: "#178FD6",
                    boxShadow: "0 0 0 4px rgba(23,143,214,0.15)",
                  }}
                />
                {!isLast && (
                  <TimelineConnector
                    sx={{ bgcolor: "rgba(255,255,255,0.2)" }}
                  />
                )}
              </TimelineSeparator>
              <TimelineContent
                sx={{ pb: { xs: 3, md: 4 }, pl: { xs: 2, md: 3 } }}
              >
                <Stack
                  direction="row"
                  spacing={{ xs: 2, sm: 2.5 }}
                  alignItems="flex-start"
                >
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
                      sx={{
                        fontSize: { xs: "1rem", md: "1.25rem" },
                        mt: 0.25,
                      }}
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
            </TimelineItem>
          );
        })}
      </Timeline>
    </Box>
  );
};

export default Story;
