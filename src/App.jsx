// src/App.jsx

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

// Component to reset scroll position to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <TooltipProvider>
      <Router>
        <ScrollToTop />

        <div className="flex flex-col min-h-screen bg-background text-foreground">
          {/* Fixed Navbar */}
          <Navbar />

          {/* Main Content - grows to fill space, with top padding for fixed navbar */}
          <main className="flex-grow pt-20">
            {" "}
            {/* pt-20 matches your navbar height */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Footer always at bottom */}
          <Footer />
        </div>
      </Router>
    </TooltipProvider>
  );
}
