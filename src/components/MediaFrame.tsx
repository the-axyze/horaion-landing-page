import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";

const RADIUS = "12px";

const dotColors = [
  "rgba(255,90,90,0.55)",
  "rgba(255,200,80,0.55)",
  "rgba(110,220,140,0.55)",
];

const WindowChrome = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 0.75,
      px: 1.5,
      py: 1,
      bgcolor: "rgba(255,255,255,0.04)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    }}
  >
    {dotColors.map((c) => (
      <Box
        key={c}
        sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: c }}
      />
    ))}
  </Box>
);

type MediaFrameProps = {
  children: ReactNode;
  sx?: SxProps<Theme>;
};

const MediaFrame = ({ children, sx }: MediaFrameProps) => (
  <Box
    sx={[
      {
        position: "relative",
        borderRadius: RADIUS,
        overflow: "hidden",
        boxShadow: "0 30px 80px -20px rgba(23,143,214,0.45)",
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    <WindowChrome />
    {children}
  </Box>
);

export default MediaFrame;
