import Hero from "../components/Hero";
import ProdOverview from "../components/ProdOverview";
import Industries from "../components/Industries";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <ProdOverview />
      <Industries />
      <CTA />
      <Testimonials />
    </>
  );
};

export default Home;
