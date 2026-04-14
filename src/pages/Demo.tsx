import DemoForm from "../components/DemoForm";
import { Typography, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";

const Demo = () => {
  return (
    <>
      <Helmet>
        <title>Book a Demo</title>
      </Helmet>
      <DemoForm />
      <Box sx={{ pb: 6, textAlign: "center" }}>
        <Typography variant="body1" color="rgba(255,255,255,0.7)">
          Have any other questions? Do check out our{" "}
          <Typography
            component={RouterLink}
            to="/faq"
            sx={{
              color: "white",
              fontWeight: 600,
              textDecoration: "underline",
              textUnderlineOffset: 3,
              "&:hover": { opacity: 0.75 },
            }}
          >
            FAQ
          </Typography>{" "}
          or{" "}
          <Typography
            component={RouterLink}
            to="/contact"
            sx={{
              color: "white",
              fontWeight: 600,
              textDecoration: "underline",
              textUnderlineOffset: 3,
              "&:hover": { opacity: 0.75 },
            }}
          >
            contact us
          </Typography>
          .
        </Typography>
      </Box>
    </>
  );
};

export default Demo;
