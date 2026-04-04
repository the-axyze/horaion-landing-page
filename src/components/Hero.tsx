import { Typography, Box, Button } from "@mui/material";

const stats = [
  { value: "98%", label: "Accuracy" },
  { value: "10x", label: "Faster" },
  { value: "24/7", label: "Available" },
];

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        px: { xs: 3, md: 8 },
        py: { xs: 6, md: 0 },
      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        gap={8}
        width="100%"
      >
        {/* LEFT SIDE */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h2"
            fontWeight={700}
            color="white"
            sx={{ mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem" } }}
          >
            Master Complex Scheduling with AI
          </Typography>
          <Typography
            variant="h6"
            color="white"
            sx={{ lineHeight: 1.6, mb: 4 }}
          >
            Transform your most challenging scheduling problems into automated
            solutions. Our AI engine understands constraints, preferences, and
            conflicts to create optimal schedules in seconds.
          </Typography>

          {/* CTA Button */}
          <Button
            variant="contained"
            size="large"
            sx={{
              py: 1.5,
              px: 4,
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: 2,
              bgcolor: "purple",
              color: "white",
              mb: 5,
              transition: "transform 0.2s ease",
              "&:hover": { transform: "scale(1.05)", bgcolor: "purple" },
            }}
          >
            Get Started Free
          </Button>

          {/* Stats Row */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 4, md: 6 },
              flexWrap: "wrap",
            }}
          >
            {stats.map((stat) => (
              <Box key={stat.label}>
                <Typography
                  fontWeight={700}
                  color="white"
                  sx={{ fontSize: { xs: "2rem", md: "2.4rem" }, lineHeight: 1 }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  color="rgba(255,255,255,0.7)"
                  sx={{ fontSize: "0.85rem", mt: 0.5, letterSpacing: 0.5 }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* RIGHT SIDE */}
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: 4,
            }}
          >
            <Box
              component="video"
              autoPlay
              loop
              muted
              playsInline
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            >
              <source src="/placeholder-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
