import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import SchedulingSolutions from "./pages/services/SchedulingSolutions";
import RouteOptimization from "./pages/services/RouteOptimization";
import StartFree from "./pages/StartFree";
import DemandForecasting from "./pages/services/DemandForecasting";
import ProfileManagement from "./pages/services/ProfileManagement";
import FlexiScheduling from "./pages/services/FlexiScheduling";
import GigScheduling from "./pages/services/GigScheduling";
import LeaveApp from "./pages/services/LeaveApp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />

        {/* solutions routes */}
        <Route
          path="ai-scheduling-solutions"
          element={<SchedulingSolutions />}
        />
        <Route path="/route-optimization" element={<RouteOptimization />} />
        <Route path="/demand-forecasting" element={<DemandForecasting />} />
        <Route path="/profile-management" element={<ProfileManagement />} />
        <Route path="/flexi-scheduling" element={<FlexiScheduling />} />
        <Route path="/gig-scheduling" element={<GigScheduling />} />
        <Route path="/leave-application" element={<LeaveApp />} />

        <Route path="demo" element={<Demo />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="start-free" element={<StartFree />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
