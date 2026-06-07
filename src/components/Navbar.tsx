import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Compass } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "EduAI", path: "/eduai" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav id="nav-header" className="sticky top-0 z-50 bg-[#0A0A0A]/75 backdrop-blur-md border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link id="nav-logo" to="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 bg-[#111] rounded-lg flex items-center justify-center border border-[#222] overflow-hidden shadow-[0_0_15px_rgba(97,218,251,0.15)] bg-gradient-to-br from-[#111] to-[#161616]">
              <span className="font-display font-bold text-lg bg-gradient-to-r from-[#61DAFB] to-[#4F46E5] bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                TV
              </span>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-[#61DAFB] to-[#4F46E5] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display font-semibold text-sm tracking-wider">TURAL VALIZADA</span>
              <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">SW ARCHITECT</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  id={`nav-link-${link.name.toLowerCase()}`}
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 font-display text-sm font-medium tracking-wide transition-colors ${
                    isActive ? "text-[#61DAFB]" : "text-[#A0A0A0] hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <div id={`active-indicator-${link.name.toLowerCase()}`} className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-[#61DAFB] to-[#4F46E5] shadow-[0_0_8px_rgba(97,218,251,0.5)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Call to action button */}
          <div className="hidden md:block">
            <Link
              id="nav-hire-btn"
              to="/contact"
              className="inline-flex items-center px-5 py-2 text-xs font-display font-semibold rounded-full text-black bg-white hover:bg-opacity-90 transition-all border border-transparent"
            >
              Hire Me
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2 rounded-md hover:bg-slate-900 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav panel */}
      {isOpen && (
        <div id="mobile-nav-panel" className="md:hidden bg-[#0A0A0A] border-b border-[#222222] px-4 pt-2 pb-6 space-y-2">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                id={`mobile-link-${link.name.toLowerCase()}`}
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-md font-display text-base font-medium transition-all ${
                  isActive
                    ? "bg-[#111] text-[#61DAFB] border-l-2 border-[#61DAFB]"
                    : "text-[#A0A0A0] hover:bg-[#111] hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            id="mobile-nav-hire-btn"
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center mt-4 w-full py-3 px-4 font-display font-semibold rounded-full text-black bg-white hover:bg-opacity-90 transition-all text-sm animate-pulse"
          >
            Hire Me (Get in touch)
          </Link>
        </div>
      )}
    </nav>
  );
}
