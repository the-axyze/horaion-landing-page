import { Box, Stack, Typography } from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";

type StoryLogo = {
  src: string;
  alt: string;
  href?: string;
};

type StoryEntry = {
  title: string;
  description?: string;
  logos?: StoryLogo[];
};

// Drop logo files under src/assets/logos/ and import them above the array,
// then reference the imported value in `src`.
//
// import acmeLogo from "../assets/logos/acme.svg";
// ...
// logos: [{ src: acmeLogo, alt: "Acme" }]
const story: StoryEntry[] = [
  {
    title: "In the beginning...",
    description: "How Horaion started.",
  },
  {
    title: "Prototype 1",
    description: "Our first pilots with early partners.",
    logos: [],
  },
  {
    title: "Prototype 2",
    description: "Refining the product with more design partners.",
    logos: [],
  },
  {
    title: "Final Product",
    description: "Live with our launch customers.",
    logos: [],
  },
];

const LogoStrip = ({ logos }: { logos: StoryLogo[] }) => {
  if (logos.length === 0) return null;

  return (
    <Stack
      direction="row"
      spacing={{ xs: 1.5, sm: 2 }}
      useFlexGap
      flexWrap="wrap"
      sx={{ mt: 1.5, alignItems: "center" }}
    >
      {logos.map((logo) => {
        const img = (
          <Box
            component="img"
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            sx={{
              height: { xs: 24, sm: 32 },
              width: "auto",
              maxWidth: { xs: 80, sm: 110 },
              objectFit: "contain",
              filter: "grayscale(1) brightness(1.6)",
              opacity: 0.75,
              transition: "filter 0.2s ease, opacity 0.2s ease",
              "&:hover": {
                filter: "none",
                opacity: 1,
              },
            }}
          />
        );

        return logo.href ? (
          <Box
            key={logo.alt}
            component="a"
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: "inline-flex" }}
          >
            {img}
          </Box>
        ) : (
          <Box key={logo.alt} sx={{ display: "inline-flex" }}>
            {img}
          </Box>
        );
      })}
    </Stack>
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
        sx={{ pb: { xs: 3, md: 5 }, fontSize: { xs: "2rem", md: "3rem" } }}
      >
        Our Story
      </Typography>

      <Timeline
        sx={{
          maxWidth: 720,
          mx: "auto",
          p: 0,
          // Drop the empty "opposite" side so content gets full width — this
          // is what makes a single-column layout that works on mobile.
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {story.map((entry, idx) => {
          const isLast = idx === story.length - 1;
          return (
            <TimelineItem key={entry.title}>
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
                <Typography
                  variant="h6"
                  fontWeight={600}
                  color="#FFFCF6"
                  sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                >
                  {entry.title}
                </Typography>

                {entry.description && (
                  <Typography
                    variant="body2"
                    color="#CCDDE8"
                    sx={{ mt: 0.5, lineHeight: 1.6 }}
                  >
                    {entry.description}
                  </Typography>
                )}

                {entry.logos && <LogoStrip logos={entry.logos} />}
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Box>
  );
};

export default Story;
