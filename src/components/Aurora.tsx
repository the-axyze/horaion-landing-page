import { Box } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";

type Blob = {
  pos: { top?: string; left?: string; right?: string; bottom?: string };
  size: string;
  color: string;
  blur: string;
  animation: string;
};

const blobs: Blob[] = [
  {
    pos: { top: "-10%", left: "-10%" },
    size: "55vmax",
    color: "rgba(23,143,214,0.55)",
    blur: "80px",
    animation: "auroraDrift1 22s ease-in-out infinite",
  },
  {
    pos: { bottom: "-15%", right: "-10%" },
    size: "60vmax",
    color: "rgba(3,68,136,0.55)",
    blur: "90px",
    animation: "auroraDrift2 28s ease-in-out infinite",
  },
  {
    pos: { top: "30%", left: "40%" },
    size: "40vmax",
    color: "rgba(120,180,255,0.18)",
    blur: "70px",
    animation: "auroraDrift3 35s ease-in-out infinite",
  },
];

const keyframes = {
  "@keyframes auroraDrift1": {
    "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
    "50%": { transform: "translate3d(6vw, -4vh, 0) scale(1.15)" },
  },
  "@keyframes auroraDrift2": {
    "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
    "50%": { transform: "translate3d(-5vw, 5vh, 0) scale(1.1)" },
  },
  "@keyframes auroraDrift3": {
    "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1.05)" },
    "50%": { transform: "translate3d(3vw, 6vh, 0) scale(0.95)" },
  },
};

const Aurora = () => (
  <>
    <GlobalStyles styles={keyframes} />
    <Box
      aria-hidden
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {blobs.map((b, i) => (
        <Box
          key={i}
          sx={{
            display: { xs: i === 0 ? "block" : "none", md: "block" },
            position: "absolute",
            ...b.pos,
            width: { xs: "72vw", md: b.size },
            height: { xs: "72vw", md: b.size },
            borderRadius: "50%",
            background: `radial-gradient(circle at 50% 50%, ${b.color}, transparent 60%)`,
            filter: { xs: "blur(40px)", md: `blur(${b.blur})` },
            animation: { xs: "none", md: b.animation },
          }}
        />
      ))}
      {/* Vignette — tightens edges around the blobs. */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)",
        }}
      />
    </Box>
  </>
);

export default Aurora;
