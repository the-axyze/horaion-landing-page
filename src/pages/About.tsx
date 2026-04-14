import AboutHoraion from "../components/AboutHoraion";
import Story from "../components/Story";
import TeamBackground from "../components/TeamBackground";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <AboutHoraion />
      <Story />
      <TeamBackground />
    </>
  );
};

export default About;
