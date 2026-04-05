import { Typography, Grid } from "@mui/material";
import ContactForm from "../components/ContactForm";
import FindUs from "../components/FindUs";

const Contact = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <Typography variant="h3" color="white" fontWeight={700}>
          Contact Us
        </Typography>

        <Typography variant="h6" color="white" sx={{ mt: 2 }}>
          Tell us about your scheduling challenges and we'll show you how
          Horaion can help.
        </Typography>
      </div>

      <Grid container spacing={4} alignItems="flex-start">
        <Grid size={{ xs: 12, md: 6 }}>
          <ContactForm />
        </Grid>

        {/* placeholder for FindUs */}
        <Grid size={{ xs: 12, md: 6 }}>
          <FindUs />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
