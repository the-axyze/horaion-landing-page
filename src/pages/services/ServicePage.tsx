// reusable template for pages
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
  document.title = `Solutions | ${data.title}`;
  return (
    <>
      {/* <Helmet>
        <title>Solutions | {data.title}</title>
      </Helmet> */}
      <ServiceHero data={data.hero} />
      <ServiceFeatures data={data.features} />
      <ServiceHowItWorks data={data.howItWorks} />
      <ServiceCTA data={data.cta} />
    </>
  );
};

export default ServicePage;
