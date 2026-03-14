import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

interface AppProps {
  toggleTheme: () => void;
  mode: "light" | "dark";
}

const App = ({ toggleTheme, mode }: AppProps) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout toggleTheme={toggleTheme} mode={mode} />}
      >
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
