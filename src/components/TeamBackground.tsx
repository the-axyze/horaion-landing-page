import { Box, Typography, Grid, Avatar } from "@mui/material";

// helper
const getInitials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("");

const team = [
  {
    name: "Person 1",
    role: "Role",
    description: "Description of person 1",
    image: "",
  },
  {
    name: "Person 2",
    role: "Role 2",
    description: "Description of person 2",
    image: "",
  },
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
