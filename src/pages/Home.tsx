import { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import { Helmet } from "react-helmet-async";

const ProdOverview = lazy(() => import("../components/ProdOverview"));
const Industries = lazy(() => import("../components/Industries"));
const CTA = lazy(() => import("../components/CTA"));
const Testimonials = lazy(() => import("../components/Testimonials"));

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <Suspense fallback={null}>
        <ProdOverview />
      </Suspense>
      <Suspense fallback={null}>
        <Industries />
      </Suspense>
      <Suspense fallback={null}>
        <CTA />
      </Suspense>
      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>
    </>
  );
};

export default Home;
