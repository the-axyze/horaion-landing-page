import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  IconButton,
} from "@mui/material";

import { LinkedIn, Instagram, LocationOnOutlined } from "@mui/icons-material";

const socials = [
  {
    icon: <Instagram />,
    href: "https://instagram.com/",
    color: "#C13584",
  },
  {
    icon: <LinkedIn />,
    href: "https://sg.linkedin.com/",
    color: "#0077B5",
  },
];

const FindUs = () => {
  return (
    <Card sx={{ borderRadius: 4, boxShadow: 5, height: "100%" }}>
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, p: 2 }}>
          <Typography variant="h5" fontWeight={600}>
            Find Us
          </Typography>

          {/* Address */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOnOutlined sx={{ color: "primary.main" }} />
            <Typography variant="body2" color="text.secondary">
              Enter Address Here
            </Typography>
          </Box>

          {/* Socials */}
          <Box>
            <Typography variant="h6" fontWeight={500} sx={{ mb: 2 }}>
              Find our Socials
            </Typography>

            <Stack direction="row" spacing={2}>
              {socials.map(({ icon, href, color }) => (
                <IconButton
                  key={href}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                    "&:hover": {
                      color: color,
                      borderColor: color,
                    },
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Stack>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FindUs;
