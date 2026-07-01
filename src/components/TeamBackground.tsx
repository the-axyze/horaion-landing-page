import { Avatar, Box, Grid, Typography } from "@mui/material";
import hoongChuinLau from "../assets/team/hoong-chuin-lau.jpg";

// helper
const getInitials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("");

const team = [
  {
    name: "Lau Hoong Chuin",
    role: "Founder",
    description: `
Professor Lau Hoong Chuin works across artificial intelligence, operations
research, and large-scale optimization.

As the founder of Horaion, he brings deep expertise in AI-driven planning,
scheduling, and decision-making systems.

His research and industry work span logistics, transportation, urban systems,
and enterprise optimization.

He brings Horaion technical leadership and practical domain expertise in
intelligent workforce optimization.
    `.trim(),
    image: hoongChuinLau,
  },
  // {
  //   name: "Person 2",
  //   role: "Role 2",
  //   description: "Description of person 2",
  //   image: "",
  // },
];

const TeamBackground = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h3"
        color="white"
        align="center"
        fontWeight="bold"
        sx={{ mb: 6 }}
      >
        The Team
      </Typography>

      {team.map((member, index) => (
        <Grid
          key={index}
          container
          spacing={4}
          justifyContent="center"
          sx={{ mb: 6 }}
        >
          {/* LEFT */}
          <Grid
            size={{ xs: 12, md: 4 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar
              src={member.image || undefined}
              sx={{
                width: 120,
                height: 120,
                background: "transparent",
                fontSize: 36,
              }}
            >
              {!member.image && getInitials(member.name)}
            </Avatar>
          </Grid>

          {/* RIGHT */}
          <Grid
            size={{ xs: 12, md: 5 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h5" color="white" fontWeight="bold">
              {member.name}
            </Typography>

            <Typography variant="body1" color="#EDECE8">
              {member.role}
            </Typography>

            <Typography variant="body1" color="#CCDDE8">
              {member.description}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default TeamBackground;
