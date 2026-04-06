import { Box, Typography, Button, Chip } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { ServiceData } from "../../types/service";

interface Props {
  data: ServiceData["hero"];
}

const ServiceHero = ({ data }: Props) => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
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
        {/* LEFT */}
        <Box sx={{ flex: 1 }}>
          {data.badgeLabel && (
            <Chip
              label={data.badgeLabel}
              color="primary"
              size="small"
              sx={{ mb: 2, fontWeight: 600 }}
            />
          )}
          <Typography
            variant="h2"
            color="#FFFCF6"
            fontWeight={700}
            sx={{ mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem" } }}
          >
            {data.title}
          </Typography>
          <Typography
            variant="h6"
            color="#FFFCF6"
            sx={{ lineHeight: 1.6, mb: 4 }}
          >
            {data.subtitle}
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to={data.ctaLink}
            sx={{ borderRadius: 2, px: 4 }}
          >
            {data.ctaText}
          </Button>
        </Box>

        {/* RIGHT - video or image */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ borderRadius: 4, overflow: "hidden", boxShadow: 4 }}>
            {data.videoSrc ? (
              <Box
                component="video"
                autoPlay
                loop
                muted
                playsInline
                sx={{ width: "100%", display: "block", objectFit: "cover" }}
              >
                <source src={data.videoSrc} type="video/mp4" />
              </Box>
            ) : data.imageSrc ? (
              <Box
                component="img"
                src={data.imageSrc}
                alt={data.title}
                sx={{ width: "100%", display: "block", objectFit: "cover" }}
              />
            ) : (
              // Placeholder if neither provided
              <Box
                sx={{
                  width: "100%",
                  height: 320,
                  bgcolor: "grey.300",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography color="text.secondary">
                  Media placeholder
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceHero;
