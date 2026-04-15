import {
  AppBar,
  Toolbar,
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
import { KeyboardArrowDown, Menu as MenuIcon } from "@mui/icons-material";
import {
  Outlet,
  Link as RouterLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import background from "../assets/background.svg";
import HoraionLogo from "../assets/HoraionLogo.png";

const serviceLinks = [
  { label: "AI Scheduling Solutions", path: "/ai-scheduling-solutions" },
];

const Layout = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const open = Boolean(anchorEl);
  const isServiceActive = serviceLinks.some(
    (s) => location.pathname === s.path,
  );

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(open ? null : event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleDrawerNav = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
    setSolutionsOpen(false);
  };

  const navLinkSx = (path: string) => ({
    fontWeight: 500,
    position: "relative",
    whiteSpace: "nowrap",
    transition: "transform 0.2s ease",
    "&:hover": { transform: "scale(1.07)" },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 2,
      left: "50%",
      transform: "translateX(-50%)",
      width: location.pathname === path ? "70%" : "0%",
      height: "2px",
      bgcolor: "#FFFCF6",
      borderRadius: 1,
      transition: "width 0.2s ease",
    },
    "&:hover::after": {
      width: "70%",
    },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
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
          {/* LEFT - Logo */}
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

          {/* CENTER - Desktop Navigation */}
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
              sx={navLinkSx("/")}
            >
              Home
            </Button>

            {/* Solutions dropdown */}
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
              sx={{
                fontWeight: 500,
                position: "relative",
                whiteSpace: "nowrap",
                transition: "transform 0.2s ease",
                "&:hover": { transform: "scale(1.07)" },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 2,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: isServiceActive ? "70%" : "0%",
                  height: "2px",
                  bgcolor: "#FFFCF6",
                  borderRadius: 1,
                  transition: "width 0.2s ease",
                },
                "&:hover::after": { width: "70%" },
              }}
            >
              Solutions
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  mt: 1,
                  borderRadius: 2,
                  backdropFilter: "blur(12px)",
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#FFFCF6",
                  "& .MuiMenuItem-root:hover": {
                    background: "rgba(255,255,255,0.15)",
                  },
                },
              }}
            >
              {serviceLinks.map((s) => (
                <MenuItem
                  key={s.path}
                  component={RouterLink}
                  to={s.path}
                  onClick={handleClose}
                  selected={location.pathname === s.path}
                  sx={{
                    "&.Mui-selected": {
                      background: "rgba(255,255,255,0.2)",
                      fontWeight: 700,
                    },
                  }}
                >
                  {s.label}
                </MenuItem>
              ))}
            </Menu>

            <Button
              color="inherit"
              component={RouterLink}
              to="/about"
              sx={navLinkSx("/about")}
            >
              About Us
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/contact"
              sx={navLinkSx("/contact")}
            >
              Contact Us
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/pricing"
              sx={navLinkSx("/pricing")}
            >
              Pricing
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/faq"
              sx={navLinkSx("/faq")}
            >
              FAQ
            </Button>
          </Box>

          {/* RIGHT - Buttons + Hamburger */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexShrink: 0,
              ml: { xs: "auto", md: 0 },
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                component={RouterLink}
                to="/demo"
                sx={{
                  fontWeight: 600,
                  borderRadius: 2,
                  bgcolor: "#178FD6",
                  color: "#FFFCF6",
                  whiteSpace: "nowrap",
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "scale(1.07)", bgcolor: "#034488" },
                }}
              >
                Book a Demo
              </Button>
              <Button
                variant="outlined"
                component={RouterLink}
                to="/start-free"
                sx={{
                  fontWeight: 600,
                  borderRadius: 2,
                  borderColor: "rgba(255,255,255,0.7)",
                  color: "#FFFCF6",
                  whiteSpace: "nowrap",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.07)",
                    borderColor: "#EDECE8",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Start for Free
              </Button>
              <Button
                color="inherit"
                variant="text"
                component="a"
                href="https://ui-horizon-dev-rbac.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "scale(1.07)" },
                }}
              >
                Sign In
              </Button>
            </Box>

            <IconButton
              sx={{ color: "#FFFCF6", display: { xs: "flex", md: "none" } }}
              onClick={() => setDrawerOpen(true)}
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
        PaperProps={{
          sx: {
            background: "linear-gradient(160deg, #0d1b4b 0%, #1a3a7c 100%)",
            color: "#FFFCF6",
            width: 260,
          },
        }}
      >
        <Box sx={{ pt: 2 }}>
          <List>
            <ListItemButton
              onClick={() => handleDrawerNav("/")}
              selected={location.pathname === "/"}
              sx={{ "&.Mui-selected": { bgcolor: "rgba(255,255,255,0.15)" } }}
            >
              <ListItemText primary="Home" />
            </ListItemButton>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

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
                {serviceLinks.map((s) => (
                  <ListItemButton
                    key={s.path}
                    sx={{
                      pl: 4,
                      "&.Mui-selected": { bgcolor: "rgba(255,255,255,0.15)" },
                    }}
                    selected={location.pathname === s.path}
                    onClick={() => handleDrawerNav(s.path)}
                  >
                    <ListItemText primary={s.label} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

            {[
              { label: "About Us", path: "/about" },
              { label: "Contact Us", path: "/contact" },
              { label: "Pricing", path: "/pricing" },
              { label: "FAQ", path: "/faq" },
            ].map((item) => (
              <ListItemButton
                key={item.path}
                onClick={() => handleDrawerNav(item.path)}
                selected={location.pathname === item.path}
                sx={{ "&.Mui-selected": { bgcolor: "rgba(255,255,255,0.15)" } }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}

            <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

            <ListItemButton
              onClick={() =>
                window.open(
                  "https://ui-horizon-dev-rbac.vercel.app/login",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <ListItemText primary="Sign In" />
            </ListItemButton>

            <Box sx={{ px: 2, py: 1 }}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleDrawerNav("/demo")}
                sx={{
                  fontWeight: 600,
                  borderRadius: 2,
                  bgcolor: "#178FD6",
                  color: "#FFFCF6",
                  mb: 1,
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "scale(1.03)", bgcolor: "#034488" },
                }}
              >
                Book a Demo
              </Button>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => handleDrawerNav("/start-free")}
                sx={{
                  fontWeight: 600,
                  borderRadius: 2,
                  borderColor: "rgba(255,255,255,0.7)",
                  color: "#FFFCF6",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    borderColor: "#EDECE8",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Start for Free
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>

      <Outlet />
    </Box>
  );
};

export default Layout;
