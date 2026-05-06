import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  type SxProps,
  type Theme,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import HoraionLogo from "../../assets/HoraionLogo.png";
import { TRANSITION_FAST } from "../../lib/transitions";
import { primaryLinks } from "./navConfig";
import SolutionsMenu from "./SolutionsMenu";

interface Props {
  onOpenDrawer: () => void;
}

const navLinkSx = (active: boolean): SxProps<Theme> => ({
  fontWeight: 500,
  position: "relative",
  whiteSpace: "nowrap",
  transition: TRANSITION_FAST,
  "&:hover": { transform: "scale(1.07)" },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 2,
    left: "50%",
    transform: "translateX(-50%)",
    width: active ? "70%" : "0%",
    height: "2px",
    bgcolor: "canvas.cream",
    borderRadius: 1,
    transition: "width 0.2s ease",
  },
  "&:hover::after": { width: "70%" },
});

const TopBar = ({ onOpenDrawer }: Props) => {
  const location = useLocation();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "transparent",
        backdropFilter: "blur(8px)",
        borderBottom: "1px rgba(255,255,255,0.1)",
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <Box
          component={RouterLink}
          to="/"
          sx={{
            height: 150,
            width: 150,
            maxHeight: { xs: 100, md: 125 },
            maxWidth: { xs: 100, md: 125 },
            display: "inline-block",
          }}
        >
          <Box
            component="img"
            sx={{ width: "100%", height: "100%" }}
            alt="Horaion Logo"
            src={HoraionLogo}
          />
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            sx={navLinkSx(location.pathname === "/")}
          >
            Home
          </Button>

          <SolutionsMenu />

          {primaryLinks.map((link) => (
            <Button
              key={link.path}
              color="inherit"
              component={RouterLink}
              to={link.path}
              sx={navLinkSx(location.pathname === link.path)}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexShrink: 0,
            ml: { xs: "auto", md: 0 },
          }}
        >
          <Button
            variant="contained"
            component={RouterLink}
            to="/demo"
            sx={{
              display: { xs: "none", md: "inline-flex" },
              fontWeight: 600,
              borderRadius: 2,
              bgcolor: "primary.main",
              color: "canvas.cream",
              whiteSpace: "nowrap",
              transition: TRANSITION_FAST,
              "&:hover": {
                transform: "scale(1.07)",
                bgcolor: "primary.dark",
              },
            }}
          >
            Book a Demo
          </Button>

          <IconButton
            sx={{ color: "canvas.cream", display: { xs: "flex", md: "none" } }}
            onClick={onOpenDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
