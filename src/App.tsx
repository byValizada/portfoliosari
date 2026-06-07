import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InteractiveNetwork from "./components/InteractiveNetwork";
import Home from "./pages/Home";
import EduAIPage from "./pages/EduAIPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <div id="app-container" className="relative min-h-screen flex flex-col justify-between overflow-x-hidden select-none cosmic-mesh">
        
        {/* Interactive canvas background constellation mesh */}
        <InteractiveNetwork />

        {/* Persistent Desktop and Mobile navigation */}
        <Navbar />

        {/* Key view content routes */}
        <main id="main-content" className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eduai" element={<EduAIPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback routing */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer element */}
        <Footer />
        
      </div>
    </Router>
  );
}
