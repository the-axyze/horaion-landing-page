import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { services } from "./data/services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import StartFree from "./pages/StartFree";

const ServicePageTemplate = lazy(() =>
  import("./components/service").then((m) => ({
    default: m.ServicePageTemplate,
  })),
);

const App = () => {
  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="demo" element={<Demo />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="start-free" element={<StartFree />} />

          {services.map(({ slug, data }) => (
            <Route
              key={slug}
              path={slug}
              element={<ServicePageTemplate data={data} />}
            />
          ))}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
