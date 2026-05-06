import { createTheme } from "@mui/material";

const FONT_SANS =
  '"Inter", system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif';

const headline = { fontFamily: FONT_SANS, letterSpacing: "-0.01em" };

declare module "@mui/material/styles" {
  interface Palette {
    canvas: { cream: string; mist: string };
  }
  interface PaletteOptions {
    canvas?: { cream?: string; mist?: string };
  }
}

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#178FD6",
      light: "#7ec8ff",
      dark: "#034488",
    },
    background: {
      default: "#050a1a",
      paper: "rgba(255,255,255,0.04)",
    },
    canvas: {
      cream: "#FFFCF6",
      mist: "#CCDDE8",
    },
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
