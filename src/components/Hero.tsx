import { Typography, Box } from "@mui/material";

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
            Horaion
          </Typography>
          <Typography variant="h6" color="white" sx={{ lineHeight: 1.6 }}>
            A short and engaging description goes here. Explain what you do in
            one or two sentences so users immediately understand your value.
          </Typography>
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
