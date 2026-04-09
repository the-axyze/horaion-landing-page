// MovingBorder.tsx
import { Box } from "@mui/material";

interface MovingBorderProps {
  children: React.ReactNode;
  borderRadius?: string | number;
}

export const MovingBorder = ({
  children,
  borderRadius = "8px",
}: MovingBorderProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        borderRadius,
        padding: "2px", // border thickness
        background: "linear-gradient(90deg, #178FD6, #FFFCF6, #178FD6)",
        backgroundSize: "200% 200%",
        animation: "borderMove 3s linear infinite",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius,
          backgroundColor: "transparent", // keeps button visible
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          borderRadius,
        }}
      >
        {children}
      </Box>

      {/* Global keyframes */}
      <style>
        {`
          @keyframes borderMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
        `}
      </style>
    </Box>
  );
};
