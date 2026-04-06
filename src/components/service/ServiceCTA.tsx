import { Box, Typography, Button, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { ServiceData } from "../../types/service";

interface Props {
  data: ServiceData["cta"];
}

const ServiceCTA = ({ data }: Props) => {
  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 3, md: 8 },
        textAlign: "center",
        bgcolor: "primary.main",
        color: "#FFFCF6",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight={700} sx={{ mb: 2 }}>
          {data.title}
        </Typography>
        <Typography variant="h6" sx={{ mb: 6, lineHeight: 1.6, opacity: 0.85 }}>
          {data.subtitle}
        </Typography>
        <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to={data.primaryButtonLink}
            sx={{
              bgcolor: "#FFFCF6",
              color: "primary.main",
              fontWeight: 700,
              borderRadius: 2,
              px: 4,
              "&:hover": { bgcolor: "grey.100" },
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
                borderColor: "#FFFCF6",
                color: "#FFFCF6",
                borderRadius: 2,
                px: 4,
                "&:hover": {
                  borderColor: "grey.100",
                  bgcolor: "rgba(255,255,255,0.1)",
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
