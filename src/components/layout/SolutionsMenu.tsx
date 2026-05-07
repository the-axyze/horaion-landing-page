import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { TRANSITION_FAST } from "../../lib/transitions";
import { serviceLinks } from "./navConfig";

const isServicePath = (pathname: string) =>
  serviceLinks.some((s) =>
    s.children
      ? s.children.some((c) => c.path === pathname)
      : s.path === pathname,
  );

const SolutionsMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const location = useLocation();
  const open = Boolean(anchorEl);
  const active = isServicePath(location.pathname);

  const close = () => setAnchorEl(null);

  return (
    <>
      <Button
        color="inherit"
        onClick={(e) => setAnchorEl(open ? null : e.currentTarget)}
        endIcon={
          <KeyboardArrowDown
            sx={{
              transition: TRANSITION_FAST,
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        }
        sx={{
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
        }}
      >
        Solutions
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={close}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: 2,

            // opaque background
            bgcolor: "#081120",

            // optional subtle border
            border: "1px solid rgba(255,255,255,0.08)",

            color: "canvas.cream",

            "& .MuiMenuItem-root:hover": {
              backgroundColor: "rgba(255,255,255,0.08)",
            },
          },
        }}
      >
        {serviceLinks.map((s) =>
          s.children ? (
            <Box key={s.label}>
              <MenuItem disabled sx={{ fontWeight: 700, opacity: 0.7 }}>
                {s.label}
              </MenuItem>
              {s.children.map((child) => (
                <MenuItem
                  key={child.path}
                  component={RouterLink}
                  to={child.path}
                  onClick={close}
                  selected={location.pathname === child.path}
                  sx={{
                    pl: 3,
                    "&.Mui-selected": {
                      background: "rgba(255,255,255,0.2)",
                      fontWeight: 700,
                    },
                  }}
                >
                  {child.label}
                </MenuItem>
              ))}
            </Box>
          ) : (
            <MenuItem
              key={s.path}
              component={RouterLink}
              to={s.path!}
              onClick={close}
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
          ),
        )}
      </Menu>
    </>
  );
};

export default SolutionsMenu;
