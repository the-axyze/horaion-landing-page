import { lazy, Suspense, type ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import { services } from "./data/services";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Demo = lazy(() => import("./pages/Demo"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Pricing = lazy(() => import("./pages/Pricing"));
const StartFree = lazy(() => import("./pages/StartFree"));

const ServicePageTemplate = lazy(() =>
  import("./components/service").then((m) => ({
    default: m.ServicePageTemplate,
  })),
);

const routeFallback = <div style={{ minHeight: "40vh" }} />;

const withSuspense = (element: ReactNode) => (
  <Suspense fallback={routeFallback}>{element}</Suspense>
);

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={withSuspense(<Contact />)} />
          <Route path="about" element={withSuspense(<About />)} />
          <Route path="pricing" element={withSuspense(<Pricing />)} />
          <Route path="demo" element={withSuspense(<Demo />)} />
          <Route path="faq" element={withSuspense(<FAQ />)} />
          <Route path="start-free" element={withSuspense(<StartFree />)} />

          {services.map(({ slug, data }) => (
            <Route
              key={slug}
              path={slug}
              element={withSuspense(<ServicePageTemplate data={data} />)}
            />
          ))}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
