import { Box, Button, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { ServiceData } from "../../types/service";

interface Props {
  data: ServiceData["cta"];
}

const ServiceCTA = ({ data }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 10,
        px: { xs: 3, md: 8 },
        textAlign: "center",
        background: "linear-gradient(135deg, #04264d 0%, #034488 100%)",
        borderTop: "1px solid rgba(210,172,87,0.38)",
        color: "#FFFCF6",
      }}
    >
      {/* Soft blue glow behind the headline */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: -80,
          left: "50%",
          transform: "translateX(-50%)",
          width: 640,
          maxWidth: "120%",
          height: 320,
          background:
            "radial-gradient(ellipse at center, rgba(23,143,214,0.35) 0%, rgba(23,143,214,0) 70%)",
          pointerEvents: "none",
        }}
      />
      <Container maxWidth="md" sx={{ position: "relative" }}>
        <Typography variant="h3" fontWeight={700} sx={{ mb: 2 }}>
          {data.title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 6,
            lineHeight: 1.6,
            fontWeight: 400,
            color: "rgba(204,221,232,0.82)",
          }}
        >
          {data.subtitle}
        </Typography>
        <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to={data.primaryButtonLink}
            sx={{
              bgcolor: "#D2AC57",
              color: "#05122a",
              fontWeight: 700,
              borderRadius: 2,
              px: 4,
              boxShadow: "0 12px 30px -10px rgba(210,172,87,0.6)",
              "&:hover": { bgcolor: "#C19A44" },
            }}
          >
            {data.primaryButtonText}
          </Button>
          {data.secondaryButtonText && (
            <Button
              variant="outlined"
              size="large"
              component={RouterLink}
              to={data.secondaryButtonLink ?? "/"}
              sx={{
                borderColor: "rgba(255,252,246,0.5)",
                color: "#EAF1FB",
                borderRadius: 2,
                px: 4,
                "&:hover": {
                  borderColor: "#FFFCF6",
                  bgcolor: "rgba(255,255,255,0.06)",
                },
              }}
            >
              {data.secondaryButtonText}
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceCTA;
