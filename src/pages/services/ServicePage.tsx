// reusable template for pages
import React from "react";
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
      <ServiceHero data={data.hero} />
      <ServiceFeatures data={data.features} />
      <ServiceHowItWorks data={data.howItWorks} />
      <ServiceCTA data={data.cta} />
    </>
  );
};

export default ServicePage;
