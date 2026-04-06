import { Typography, Box, Stack, IconButton } from "@mui/material";
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
    <Box
      sx={{
        borderRadius: 4,
        height: "100%",
        backdropFilter: "blur(12px)",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid #178FD6",
        p: { xs: 3, md: 4 },
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography variant="h5" fontWeight={600} color="white">
        Find Us
      </Typography>

      {/* Address */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <LocationOnOutlined sx={{ color: "rgba(255,255,255,0.7)" }} />
        <Typography variant="body2" color="rgba(255,255,255,0.7)">
          Enter Address Here
        </Typography>
      </Box>

      {/* Socials */}
      <Box>
        <Typography variant="h6" fontWeight={500} color="white" sx={{ mb: 2 }}>
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
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: 2,
                transition: "all 0.2s ease",
                "&:hover": {
                  color: color,
                  borderColor: color,
                  background: "#FFFCF6",
                },
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default FindUs;
