import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  KeyboardArrowDown,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { Outlet, Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";

interface LayoutProps {
  toggleTheme: () => void;
  mode: "light" | "dark";
}

const Layout = ({ toggleTheme, mode }: LayoutProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(open ? null : event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleDrawerNav = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
    setSolutionsOpen(false);
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
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            Horaion
          </Typography>

          {/* CENTER - Desktop Navigation */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: { xs: "none", md: "flex" },
              gap: 3,
            }}
          >
            <Button color="inherit" component={RouterLink} to="/">
              Home
            </Button>

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

          {/* RIGHT - Theme toggle + hamburger */}
          <Box
            sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
          >
            <IconButton color="inherit" onClick={toggleTheme}>
              {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

            {/* Hamburger - mobile only */}
            <IconButton
              color="inherit"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250, pt: 2 }}>
          <List>
            <ListItemButton onClick={() => handleDrawerNav("/")}>
              <ListItemText primary="Home" />
            </ListItemButton>

            <Divider />

            {/* Solutions with collapse */}
            <ListItemButton onClick={() => setSolutionsOpen(!solutionsOpen)}>
              <ListItemText primary="Solutions" />
              <KeyboardArrowDown
                sx={{
                  transition: "transform 0.2s ease",
                  transform: solutionsOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </ListItemButton>
            <Collapse in={solutionsOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => handleDrawerNav("/service1")}
                >
                  <ListItemText primary="Service 1" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => handleDrawerNav("/service2")}
                >
                  <ListItemText primary="Service 2" />
                </ListItemButton>
              </List>
            </Collapse>

            <Divider />

            <ListItemButton onClick={() => handleDrawerNav("/about")}>
              <ListItemText primary="About Us" />
            </ListItemButton>

            <ListItemButton onClick={() => handleDrawerNav("/contact")}>
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      <Outlet />
    </>
  );
};

export default Layout;
