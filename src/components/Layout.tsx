import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { useState } from "react";

interface LayoutProps {
  toggleTheme: () => void;
  mode: "light" | "dark";
}

const Layout = ({ toggleTheme, mode }: LayoutProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    if (open) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ position: "relative" }}>
          {/* LEFT - Logo */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Horaion
          </Typography>

          {/* CENTER - Navigation */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 3,
            }}
          >
            <Button color="inherit" component={RouterLink} to="/">
              Home
            </Button>

            {/* Dropdown */}
            <Button
              color="inherit"
              onClick={handleToggle}
              endIcon={
                <KeyboardArrowDown
                  sx={{
                    transition: "transform 0.2s ease",
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              }
            >
              Solutions
            </Button>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem
                component={RouterLink}
                to="/service1"
                onClick={handleClose}
              >
                Service 1
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/service2"
                onClick={handleClose}
              >
                Service 2
              </MenuItem>
            </Menu>

            <Button color="inherit" component={RouterLink} to="/about">
              About Us
            </Button>
            <Button color="inherit" component={RouterLink} to="/contact">
              Contact Us
            </Button>
          </Box>

          {/* RIGHT - Theme Toggle */}
          <Box>
            <IconButton color="inherit" onClick={toggleTheme}>
              {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default Layout;
