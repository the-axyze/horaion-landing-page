import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TRANSITION_FAST } from "../../lib/transitions";
import {
  primaryLinks,
  serviceLinks,
  type NavLink,
} from "./navConfig";

interface Props {
  open: boolean;
  onClose: () => void;
}

const listItemStateSx = {
  "&:hover": {
    bgcolor: "rgba(255,255,255,0.08)",
  },
  "&.Mui-selected": {
    bgcolor: "rgba(255,255,255,0.16)",
  },
  "&.Mui-selected:hover": {
    bgcolor: "rgba(255,255,255,0.2)",
  },
};

const MobileDrawer = ({ open, onClose }: Props) => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [openNested, setOpenNested] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();
  const location = useLocation();

  const go = (path: string) => {
    navigate(path);
    onClose();
    setSolutionsOpen(false);
    setOpenNested({});
  };

  const toggleNested = (label: string) =>
    setOpenNested((current) => ({
      ...current,
      [label]: !current[label],
    }));

  const isActivePath = (link: NavLink): boolean =>
    link.path === location.pathname ||
    Boolean(link.children?.some((child) => isActivePath(child)));

  const renderServiceLink = (link: NavLink, depth = 1): React.ReactNode => {
    const active = isActivePath(link);
    const nestedOpen = openNested[link.label] ?? active;

    if (link.children?.length) {
      return (
        <Box key={link.label}>
          <ListItemButton
            onClick={() => toggleNested(link.label)}
            selected={active}
            sx={{ ...listItemStateSx, pl: 2 + depth * 2 }}
          >
            <ListItemText
              primary={link.label}
              primaryTypographyProps={{ fontWeight: depth === 1 ? 600 : 500 }}
            />
            <KeyboardArrowDown
              sx={{
                transition: TRANSITION_FAST,
                transform: nestedOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </ListItemButton>
          <Collapse in={nestedOpen} timeout="auto" unmountOnExit>
            <List disablePadding>
              {link.path && (
                <ListItemButton
                  sx={{ ...listItemStateSx, pl: 4 + depth * 2 }}
                  selected={location.pathname === link.path}
                  onClick={() => go(link.path!)}
                >
                  <ListItemText primary={link.pathLabel ?? link.label} />
                </ListItemButton>
              )}
              {link.children.map((child) => renderServiceLink(child, depth + 1))}
            </List>
          </Collapse>
        </Box>
      );
    }

    if (!link.path) return null;

    return (
      <ListItemButton
        key={link.path}
        sx={{ ...listItemStateSx, pl: 2 + depth * 2 }}
        selected={location.pathname === link.path}
        onClick={() => go(link.path!)}
      >
        <ListItemText primary={link.label} />
      </ListItemButton>
    );
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          background: "linear-gradient(160deg, #0d1b4b 0%, #1a3a7c 100%)",
          color: "canvas.cream",
          width: 260,
        },
      }}
    >
      <Box sx={{ pt: 2 }}>
        <List>
          <ListItemButton
            onClick={() => go("/")}
            selected={location.pathname === "/"}
            sx={listItemStateSx}
          >
            <ListItemText primary="Home" />
          </ListItemButton>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

          <ListItemButton
            onClick={() => setSolutionsOpen(!solutionsOpen)}
            sx={listItemStateSx}
          >
            <ListItemText primary="Solutions" />
            <KeyboardArrowDown
              sx={{
                transition: TRANSITION_FAST,
                transform: solutionsOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </ListItemButton>
          <Collapse in={solutionsOpen} timeout="auto" unmountOnExit>
            <List disablePadding>
              {serviceLinks.map((s) =>
                s.children?.length && !s.path ? (
                  <Box key={s.label}>
                    <ListItemButton disabled sx={{ opacity: "1 !important" }}>
                      <ListItemText
                        primary={s.label}
                        primaryTypographyProps={{
                          color: "rgba(255,252,246,0.58)",
                          fontSize: "0.72rem",
                          fontWeight: 800,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                        }}
                      />
                    </ListItemButton>
                    {s.children.map((child) => renderServiceLink(child))}
                  </Box>
                ) : (
                  renderServiceLink(s, 0)
                ),
              )}
            </List>
          </Collapse>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

          {primaryLinks.map((item) => (
            <ListItemButton
              key={item.path}
              onClick={() => go(item.path)}
              selected={location.pathname === item.path}
              sx={listItemStateSx}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}

          <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

          <Box sx={{ px: 2, py: 1 }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => go("/demo")}
              sx={{
                fontWeight: 600,
                borderRadius: 2,
                bgcolor: "primary.main",
                color: "canvas.cream",
                transition: TRANSITION_FAST,
                "&:hover": {
                  transform: "scale(1.03)",
                  bgcolor: "primary.dark",
                },
              }}
            >
              Book a Demo
            </Button>
          </Box>
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
