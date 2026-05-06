import { Instagram, LinkedIn, LocationOnOutlined } from "@mui/icons-material";
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";

const socials = [
  {
    label: "Instagram",
    icon: <Instagram />,
    href: "https://instagram.com/",
    color: "#C13584",
    disabled: true,
  },
  {
    label: "LinkedIn",
    icon: <LinkedIn />,
    href: "https://sg.linkedin.com/",
    color: "#0077B5",
    disabled: true,
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
          Institute of Innovation and Entrepreneurship, SMU
          <br />
          81 Victoria St, Singapore 188065
        </Typography>
      </Box>

      {/* Socials */}
      <Box>
        <Typography variant="h6" fontWeight={500} color="white" sx={{ mb: 2 }}>
          Find our Socials
        </Typography>

        <Stack direction="row" spacing={2}>
          {socials.map(({ label, icon, href, color, disabled }) => {
            const button = (
              <IconButton
                aria-label={label}
                component={disabled ? "button" : "a"}
                href={disabled ? undefined : href}
                target={disabled ? undefined : "_blank"}
                rel={disabled ? undefined : "noopener noreferrer"}
                disabled={disabled}
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
                  "&.Mui-disabled": {
                    color: "rgba(255,255,255,0.3)",
                    borderColor: "rgba(255,255,255,0.15)",
                  },
                }}
              >
                {icon}
              </IconButton>
            );

            return (
              <Tooltip
                key={label}
                title={disabled ? "Coming soon!" : label}
                arrow
              >
                {disabled ? (
                  <Box component="span" sx={{ display: "inline-flex" }}>
                    {button}
                  </Box>
                ) : (
                  button
                )}
              </Tooltip>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default FindUs;
