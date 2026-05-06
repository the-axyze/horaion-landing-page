import type { SxProps, Theme } from "@mui/material";

/** Outlined TextField styled for a dark glass surface (cream text, hairline border). */
export const glassFieldSx: SxProps<Theme> = {
  "& .MuiOutlinedInput-root": {
    color: "canvas.cream",
    borderRadius: 2,
    "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
    "&:hover fieldset": { borderColor: "rgba(255,255,255,0.6)" },
    "&.Mui-focused fieldset": { borderColor: "canvas.cream" },
  },
  "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.6)" },
  "& .MuiInputLabel-root.Mui-focused": { color: "canvas.cream" },
  "& .MuiSelect-icon": { color: "rgba(255,255,255,0.6)" },
};

/** MenuProps for `<TextField select />` — themes the dropdown panel to match the surface. */
export const glassSelectMenuProps = {
  MenuProps: {
    PaperProps: {
      sx: {
        bgcolor: "primary.dark",
        color: "canvas.cream",
        "& .MuiMenuItem-root:hover": {
          bgcolor: "rgba(255,255,255,0.1)",
        },
        "& .MuiMenuItem-root.Mui-selected": {
          bgcolor: "rgba(255,255,255,0.15)",
        },
      },
    },
  },
};
