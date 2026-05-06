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
import { drawerOnlyLinks, primaryLinks, serviceLinks } from "./navConfig";

interface Props {
  open: boolean;
  onClose: () => void;
}

const MobileDrawer = ({ open, onClose }: Props) => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const go = (path: string) => {
    navigate(path);
    onClose();
    setSolutionsOpen(false);
  };

  const selectedSx = {
    "&.Mui-selected": { bgcolor: "rgba(255,255,255,0.15)" },
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
            sx={selectedSx}
          >
            <ListItemText primary="Home" />
          </ListItemButton>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

          <ListItemButton onClick={() => setSolutionsOpen(!solutionsOpen)}>
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
                s.children ? (
                  <Box key={s.label}>
                    <ListItemButton>
                      <ListItemText primary={s.label} />
                    </ListItemButton>
                    {s.children.map((child) => (
                      <ListItemButton
                        key={child.path}
                        sx={{ pl: 4 }}
                        selected={location.pathname === child.path}
                        onClick={() => go(child.path)}
                      >
                        <ListItemText primary={child.label} />
                      </ListItemButton>
                    ))}
                  </Box>
                ) : (
                  <ListItemButton
                    key={s.path}
                    selected={location.pathname === s.path}
                    onClick={() => go(s.path!)}
                  >
                    <ListItemText primary={s.label} />
                  </ListItemButton>
                ),
              )}
            </List>
          </Collapse>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

          {[...primaryLinks, ...drawerOnlyLinks].map((item) => (
            <ListItemButton
              key={item.path}
              onClick={() => go(item.path)}
              selected={location.pathname === item.path}
              sx={selectedSx}
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
