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
        <title>Horaion | AI Workforce Scheduling</title>
        <meta
          name="description"
          content="Horaion helps teams build workforce schedules around demand, rules, employee preferences, and operational constraints."
        />
        <meta property="og:title" content="Horaion | AI Workforce Scheduling" />
        <meta
          property="og:description"
          content="Build workable rosters around demand, constraints, preferences, and conflicts."
        />
        <meta property="og:site_name" content="Horaion" />
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
