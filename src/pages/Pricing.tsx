import { Helmet } from "react-helmet-async";
import PricePlans from "../components/PricePlans";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing</title>
      </Helmet>
      <PricePlans />
    </>
  );
};

export default Pricing;
