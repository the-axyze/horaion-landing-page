import React from "react";
import { Box, Typography } from "@mui/material";

const AboutHoraion = () => {
  return (
    <Box sx={{ p: 3, bgcolor: "grey.200" }}>
      <Typography variant="h5" align="center" sx={{ pb: 2 }} fontWeight="bold">
        About Us
      </Typography>
      <Typography variant="body1" align="center">
        Story of the company
      </Typography>
      <Typography variant="body1" align="center">
        Mission and approach
      </Typography>
      <Typography variant="body1" align="center">
        Credibility + proof
      </Typography>
    </Box>
  );
};

export default AboutHoraion;
