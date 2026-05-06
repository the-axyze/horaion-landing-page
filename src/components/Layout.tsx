import { Box } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import background from "../assets/background.svg";
import Aurora from "./Aurora";
import MobileDrawer from "./layout/MobileDrawer";
import TopBar from "./layout/TopBar";

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Aurora />
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <TopBar onOpenDrawer={() => setDrawerOpen(true)} />
        <MobileDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
