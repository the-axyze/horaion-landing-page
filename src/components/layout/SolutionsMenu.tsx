import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, ListSubheader, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { TRANSITION_FAST } from "../../lib/transitions";
import { serviceLinks, type NavLink } from "./navConfig";

const hasChildren = (link: NavLink) => Boolean(link.children?.length);

const isActivePath = (link: NavLink, pathname: string): boolean =>
  link.path === pathname ||
  Boolean(link.children?.some((child) => isActivePath(child, pathname)));

const isServicePath = (pathname: string) =>
  serviceLinks.some((link) => isActivePath(link, pathname));

const menuItemStateSx = {
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  "&.Mui-selected": {
    backgroundColor: "rgba(255,255,255,0.16)",
    fontWeight: 700,
  },
  "&.Mui-selected:hover": {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
};

const SolutionsMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const [submenuLink, setSubmenuLink] = useState<NavLink | null>(null);
  const location = useLocation();
  const open = Boolean(anchorEl);
  const active = isServicePath(location.pathname);

  const closeSubmenu = () => {
    setSubmenuAnchorEl(null);
    setSubmenuLink(null);
  };

  const close = () => {
    closeSubmenu();
    setAnchorEl(null);
  };

  const openSubmenu = (
    event: React.MouseEvent<HTMLElement>,
    link: NavLink,
  ) => {
    setSubmenuAnchorEl(event.currentTarget);
    setSubmenuLink(link);
  };

  const renderMenuLink = (link: NavLink) => {
    const selected = isActivePath(link, location.pathname);

    if (hasChildren(link)) {
      return (
        <MenuItem
          key={link.label}
          onMouseEnter={(event) => openSubmenu(event, link)}
          selected={selected}
          sx={{
            minWidth: 240,
            gap: 1.5,
            justifyContent: "space-between",
            borderLeft: selected
              ? "3px solid rgba(210,172,87,0.9)"
              : "3px solid transparent",
            ...menuItemStateSx,
          }}
        >
          <Box component="span">{link.label}</Box>
          <KeyboardArrowRight fontSize="small" sx={{ opacity: 0.7 }} />
        </MenuItem>
      );
    }

    if (!link.path) return null;

    return (
      <MenuItem
        key={link.path}
        component={RouterLink}
        to={link.path}
        onClick={close}
        onMouseEnter={closeSubmenu}
        selected={selected}
        sx={{
          minWidth: 240,
          borderLeft: selected
            ? "3px solid rgba(210,172,87,0.9)"
            : "3px solid transparent",
          ...menuItemStateSx,
        }}
      >
        {link.label}
      </MenuItem>
    );
  };

  const submenuItems = submenuLink?.children ?? [];

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
          fontSize: "0.8rem",
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
        disableAutoFocusItem
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: 2,
            minWidth: 260,
            bgcolor: "#081120",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "canvas.cream",
            boxShadow: "0 18px 50px rgba(0,0,0,0.34)",
            overflow: "visible",
          },
        }}
      >
        {serviceLinks.map((s) =>
          hasChildren(s) && !s.path ? (
            <Box key={s.label}>
              <ListSubheader
                disableSticky
                sx={{
                  bgcolor: "transparent",
                  color: "rgba(255,252,246,0.58)",
                  fontSize: "0.60rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  lineHeight: 1,
                  py: 1.25,
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </ListSubheader>
              {s.children?.map((child) => renderMenuLink(child))}
            </Box>
          ) : (
            renderMenuLink(s)
          ),
        )}
      </Menu>

      <Menu
        anchorEl={submenuAnchorEl}
        open={Boolean(submenuAnchorEl && submenuLink)}
        onClose={closeSubmenu}
        disableAutoFocusItem
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{
          onMouseLeave: closeSubmenu,
          sx: {
            ml: 0.75,
            borderRadius: 2,
            minWidth: 230,
            bgcolor: "#0b1629",
            border: "1px solid rgba(210,172,87,0.26)",
            color: "canvas.cream",
            boxShadow: "0 18px 50px rgba(0,0,0,0.38)",
          },
        }}
      >
        {submenuLink?.path && (
          <MenuItem
            component={RouterLink}
            to={submenuLink.path}
            onClick={close}
            selected={location.pathname === submenuLink.path}
            sx={menuItemStateSx}
          >
            {submenuLink.pathLabel ?? submenuLink.label}
          </MenuItem>
        )}
        {submenuItems.map((child) =>
          child.path ? (
            <MenuItem
              key={child.path}
              component={RouterLink}
              to={child.path}
              onClick={close}
              selected={location.pathname === child.path}
              sx={menuItemStateSx}
            >
              {child.label}
            </MenuItem>
          ) : null,
        )}
      </Menu>
    </>
  );
};

export default SolutionsMenu;
