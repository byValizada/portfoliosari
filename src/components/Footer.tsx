import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className="relative z-10 border-t border-slate-900 bg-slate-950/40 backdrop-blur-sm py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Monogram */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-md bg-slate-900 flex items-center justify-center border border-blue-500/30">
              <span className="font-display font-bold text-sm bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                TV
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wider font-display text-slate-200">TURAL VALIZADA</p>
              <p className="text-xs text-slate-500 font-mono">Founder of EduAI | Software Architect</p>
            </div>
          </div>

          {/* Connected Social Nodes */}
          <div className="flex items-center space-x-5">
            <a
              id="footer-social-linkedin"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all shadow-[0_0_10px_rgba(30,41,59,0.5)]"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              id="footer-social-github"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-500 transition-all shadow-[0_0_10px_rgba(30,41,59,0.5)]"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              id="footer-social-twitter"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/20 transition-all shadow-[0_0_10px_rgba(30,41,59,0.5)]"
              aria-label="Twitter Profile"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              id="footer-social-mail"
              href="mailto:turalvalizada32@gmail.com"
              className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-purple-400 hover:border-purple-500/40 transition-all shadow-[0_0_10px_rgba(30,41,59,0.5)]"
              aria-label="Email Tural"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

        </div>

        {/* Bottom divider and info */}
        <div className="mt-8 pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p id="copyright">© 2024 Tural Valizada. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-blue-400 transition-colors cursor-pointer">Security Protocol Verified</span>
            <span className="text-slate-700">|</span>
            <span className="hover:text-purple-400 transition-colors cursor-pointer">Engineered with React + Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
