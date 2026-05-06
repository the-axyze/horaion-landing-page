import { createTheme } from "@mui/material";

const FONT_SANS =
  '"Inter", system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif';

// Tighter tracking on headlines reads more editorial / less display-y.
const headline = { fontFamily: FONT_SANS, letterSpacing: "-0.01em" };

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#178FD6" },
    background: { default: "#050a1a", paper: "rgba(255,255,255,0.04)" },
  },
  typography: {
    fontFamily: FONT_SANS,
    h1: { ...headline, fontWeight: 700 },
    h2: { ...headline, fontWeight: 700 },
    h3: { ...headline, fontWeight: 700 },
    h4: { ...headline, fontWeight: 600 },
    h5: { ...headline, fontWeight: 600 },
    h6: { ...headline, fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
});
