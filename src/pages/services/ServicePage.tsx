// reusable template for pages

import { Helmet } from "react-helmet-async";
import {
  ServiceHero,
  ServiceFeatures,
  ServiceHowItWorks,
  ServiceCTA,
} from "../../components/service";
import type { ServiceData } from "../../types/service";

interface Props {
  data: ServiceData;
}

const ServicePage = ({ data }: Props) => {
  return (
    <>
      <Helmet>
        <title>Solutions | AI Scheduling</title>
      </Helmet>
      <ServiceHero data={data.hero} />
      <ServiceFeatures data={data.features} />
      <ServiceHowItWorks data={data.howItWorks} />
      <ServiceCTA data={data.cta} />
    </>
  );
};

export default ServicePage;
