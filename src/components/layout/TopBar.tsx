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
import { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import horaionLogo from "../../assets/logos/horaion-logo-transparent.svg";
import { TRANSITION_FAST } from "../../lib/transitions";
import { primaryLinks } from "./navConfig";
import SolutionsMenu from "./SolutionsMenu";

interface Props {
  onOpenDrawer: () => void;
}

const navLinkSx = (active: boolean): SxProps<Theme> => ({
  fontWeight: 500,
  fontSize: "1.25rem",
  position: "relative",
  whiteSpace: "nowrap",
  transition: TRANSITION_FAST,

  // improves readability on bright backgrounds
  textShadow: "0 1px 3px rgba(0,0,0,0.45)",

  "&:hover": {
    transform: "scale(1.07)",
  },

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

  "&:hover::after": {
    width: "70%",
  },
});

const TopBar = ({ onOpenDrawer }: Props) => {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: {
          xs: "rgba(5,10,26,0.92)",
          md: scrolled
            ? "rgba(5,10,26,0.82)"
            : "linear-gradient(to bottom, rgba(5,10,26,0.55), rgba(5,10,26,0.15))",
        },

        backdropFilter: {
          xs: "none",
          md: "blur(14px)",
        },

        WebkitBackdropFilter: {
          xs: "none",
          md: "blur(14px)",
        },

        borderBottom: {
          xs: "1px solid rgba(255,255,255,0.1)",
          md: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid transparent",
        },

        boxShadow: {
          xs: "none",
          md: scrolled ? "0 8px 32px rgba(0,0,0,0.25)" : "none",
        },

        transition:
          "background 0.25s ease, border 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <Box
          component={RouterLink}
          to="/"
          sx={{
            width: { xs: 150, md: 240 },
            height: { xs: 76, md: 96 },
            display: "inline-flex",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            sx={{ width: "100%", height: "100%", objectFit: "contain" }}
            alt="Horaion Logo"
            src={horaionLogo}
            loading="eager"
            decoding="async"
          />
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
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

              textShadow: "0 1px 3px rgba(0,0,0,0.35)",

              "&:hover": {
                transform: "scale(1.07)",
                bgcolor: "primary.dark",
              },
            }}
          >
            Book a Demo
          </Button>

          <IconButton
            sx={{
              color: "canvas.cream",
              display: { xs: "flex", md: "none" },
            }}
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
