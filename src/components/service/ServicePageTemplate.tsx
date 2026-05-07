import type { ServiceData } from "../../types/service";
import ServiceCTA from "./ServiceCTA";
import ServiceFeatures from "./ServiceFeatures";
import ServiceHero from "./ServiceHero";
import ServiceHowItWorks from "./ServiceHowItWorks";

interface Props {
  data: ServiceData;
}

const ServicePageTemplate = ({ data }: Props) => {
  document.title = `Solutions | ${data.title}`;
  return (
    <>
      <ServiceHero data={data.hero} />
      <ServiceFeatures data={data.features} />
      <ServiceHowItWorks data={data.howItWorks} />
      <ServiceCTA data={data.cta} />
    </>
  );
};

export default ServicePageTemplate;
