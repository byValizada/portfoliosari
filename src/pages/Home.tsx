import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Code2, Server, Cloud, Database, ArrowUpRight, Trophy, Sparkles, BookOpen } from "lucide-react";
import { STATISTICS, SKILL_GROUPS, PROJECTS } from "../data";

export default function Home() {
  const spotlightProject = PROJECTS.find((p) => p.id === "eduai-spotlight");
  const otherProjects = PROJECTS.filter((p) => p.id !== "eduai-spotlight");

  return (
    <div id="home-page" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
      
      {/* 1. Hero Section */}
      <section id="hero-section" className="text-center py-20 md:py-32 relative overflow-hidden">
        {/* Subtle decorative grid background layer just for visual appeal */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#61DAFB]/5 to-transparent blur-3xl rounded-full" />
        
        {/* Centered Launcher Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#333] text-[#61DAFB] text-xs font-mono mb-8 pulse-glow">
          <Sparkles className="h-3 w-3" />
          <span>v4.2.0 released — Now with Vite 5 and ReactFlux support</span>
        </div>

        {/* Hero Display Headings */}
        <h1 id="hero-title" className="text-5xl md:text-7xl font-display font-extrabold text-white tracking-tight mb-6">
          <span className="block mb-2">TURAL VALIZADA</span>
          <span className="bg-gradient-to-r from-[#61DAFB] to-[#4F46E5] bg-clip-text text-transparent glow-text-blue">
            Software Architect
          </span>
        </h1>

        <p id="hero-subtitle" className="max-w-xl mx-auto text-lg md:text-xl text-[#888] font-display font-light leading-relaxed mb-10">
          Founder of <span className="text-white font-normal">EduAI</span>. Engineering enterprise-scale architectures, modern reactive interfaces, and deep educational AI models.
        </p>

        {/* Hero Interactive Commands */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            id="hero-view-projects-btn"
            to="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-opacity-90 shadow-lg transition-all hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            id="hero-contact-btn"
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-display font-semibold text-[#A0A0A0] bg-[#161616] hover:bg-[#222] border border-[#222] hover:border-[#333] rounded-full transition-all hover:text-white"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* 2. Bento Statistics Section */}
      <section id="statistics-section" className="mb-28">
        <h2 className="text-center font-mono text-xs tracking-widest text-slate-600 uppercase mb-8">
          STATISTICS OVERVIEW
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {STATISTICS.map((stat, idx) => (
            <div
              key={idx}
              id={`stat-card-${idx}`}
              className={
                idx === 0 
                  ? "cosmic-card-blue p-8 flex flex-col md:flex-row items-center gap-6 rounded-xl"
                  : "cosmic-card-purple p-8 flex flex-col md:flex-row items-center gap-6 rounded-xl"
              }
            >
              <div className="text-5xl md:text-6xl font-display font-extrabold text-white shrink-0 bg-[#161616] px-5 py-4 rounded-lg border border-[#222] shadow-md">
                <span className={idx === 0 ? "text-[#61DAFB]" : "text-[#4F46E5]"}>{stat.value}</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-display font-semibold text-slate-200 mb-1">{stat.label}</h3>
                <p className="text-xs text-[#888] leading-relaxed font-mono">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Skills Grid Section */}
      <section id="skills-section" className="mb-32">
        <h2 className="text-center font-mono text-xs tracking-widest text-slate-600 uppercase mb-3">
          EXPERTISE SEGMENTATION
        </h2>
        <h3 className="text-center text-3xl font-display font-bold text-white mb-16">
          System Core Capabilities
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group) => {
            const isBlue = group.colorTheme === "blue";
            const isPurple = group.colorTheme === "purple";
            const isIndigo = group.colorTheme === "indigo";
            
            let cardStyle = "cosmic-card-blue";
            let badgeStyle = "text-[#61DAFB] bg-[#61DAFB]/10 border-[#61DAFB]/20";
            let IconHeader = Code2;

            if (group.category === "Backend") {
              IconHeader = Server;
              cardStyle = "cosmic-card-blue";
              badgeStyle = "text-[#61DAFB] bg-[#61DAFB]/10 border-[#61DAFB]/20";
            } else if (group.category === "Frontend") {
              IconHeader = Code2;
              cardStyle = "cosmic-card-purple";
              badgeStyle = "text-[#4F46E5] bg-[#4F46E5]/10 border-[#4F46E5]/20";
            } else if (group.category === "AI & ML") {
              IconHeader = Cpu;
              cardStyle = "cosmic-card-blue";
              badgeStyle = "text-[#61DAFB] bg-[#61DAFB]/10 border-[#61DAFB]/20";
            } else {
              IconHeader = Cloud;
              cardStyle = "cosmic-card-purple";
              badgeStyle = "text-[#4F46E5] bg-[#4F46E5]/10 border-[#4F46E5]/20";
            }

            return (
              <div key={group.category} id={`skill-card-${group.category.toLowerCase().replace(/\s/g, "-")}`} className={`${cardStyle} p-6 rounded-xl flex flex-col justify-between`}>
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#222]">
                    <span className="text-sm tracking-wider font-mono uppercase text-slate-300 font-bold">
                      {group.category}
                    </span>
                    <IconHeader className="h-5 w-5 text-slate-400 shrink-0" />
                  </div>

                  <ul className="space-y-3.5">
                    {group.skills.map((skill) => (
                      <li key={skill.name} className="flex items-center justify-between">
                        <span className="text-xs md:text-sm text-[#A0A0A0] font-mono tracking-tight">{skill.name}</span>
                        <span className={`text-[9px] px-2 py-0.5 rounded font-mono border uppercase tracking-wider ${badgeStyle}`}>
                          {skill.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Simulated Stack Category Meta Indicators in Card Footer */}
                <div className="flex items-center space-x-2 mt-8 pt-4 border-t border-[#222] text-[10px] text-slate-600 font-mono">
                  <span>SYSTEM_SECURE_VERIFIED</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Spotlight: EduAI Module */}
      {spotlightProject && (
        <section id="eduai-spotlight-section" className="mb-32">
          <div className="cosmic-card-blue p-8 md:p-12 rounded-2xl relative overflow-hidden">
            {/* Ambient radial overlay behind spotlight card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-tr from-[#61DAFB]/5 via-[#4F46E5]/5 to-transparent blur-3xl rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Writeups Column */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#333] text-[#61DAFB] text-xs font-mono mb-6 w-fit leading-none">
                  <Sparkles className="h-3 w-3 shrink-0 text-[#61DAFB]" />
                  <span>Flagship EdTech Venture</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  EduAI: Revolutionizing Education with AI
                </h3>

                <p className="text-sm md:text-base text-slate-400 leading-relaxed font-display font-light mb-8">
                  EduAI revolutionizing Education with AI / powered recommendations, adaptive environments, and automated evaluation software to empower regional schools and provide students with real-time AI Tutor companions.
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <Link
                    id="eduai-view-details-btn"
                    to="/eduai"
                    className="inline-flex items-center px-6 py-3 rounded-full text-xs md:text-sm font-display font-bold text-black bg-white hover:bg-opacity-90 shadow-md transition-all text-center"
                  >
                    Explore EduAI Platform
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Dynamic Interactive Screenshot Mock-up Column */}
              <div className="lg:col-span-7 bg-[#0b0f19] border border-[#222] rounded-xl overflow-hidden shadow-2xl relative">
                {/* Header segment of browser / system frame */}
                <div className="bg-[#0D0D0D] px-4 py-3 border-b border-[#222] flex items-center justify-between">
                  {/* Browser circles */}
                  <div className="flex items-center space-x-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-60 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-60 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-60 inline-block" />
                  </div>
                  {/* Browser URL bar */}
                  <div className="bg-[#0A0A0A] border border-[#222] rounded text-[10px] text-[#888] px-4 py-1 font-mono w-2/3 truncate text-center">
                    https://eduai-dashboard.com/tural
                  </div>
                  <div className="text-[10px] text-emerald-500 font-mono flex items-center shrink-0">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 block animate-ping" />
                    SIM_LIVE
                  </div>
                </div>

                {/* Simulated Dashboard content rendering */}
                <div className="p-5 font-mono text-xs">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                    <div className="bg-[#111] border border-[#222] p-3 rounded text-center">
                      <span className="text-[10px] text-slate-500 block">Total Learners</span>
                      <span className="text-sm font-bold text-white">52,074</span>
                    </div>
                    <div className="bg-[#111] border border-[#222] p-3 rounded text-center">
                      <span className="text-[10px] text-slate-500 block">Adaptability Rate</span>
                      <span className="text-sm font-bold text-[#61DAFB]">94.8%</span>
                    </div>
                    <div className="bg-[#111] border border-[#222] p-3 rounded text-center">
                      <span className="text-[10px] text-slate-500 block">AI Lessons</span>
                      <span className="text-sm font-bold text-white">18.2K</span>
                    </div>
                    <div className="bg-[#111] border border-[#222] p-3 rounded text-center">
                      <span className="text-[10px] text-slate-500 block">Local Schools</span>
                      <span className="text-sm font-bold text-blue-400">12</span>
                    </div>
                  </div>

                  {/* SVG Chart area */}
                  <div className="bg-[#0A0A0A] border border-[#222] p-4 rounded mb-5">
                    <p className="text-[10px] text-slate-400 mb-3 uppercase tracking-wider font-semibold">Active Learning Adaptive Paths / Weekly Curve</p>
                    <div className="h-32 flex items-end justify-between relative">
                      <svg className="absolute inset-0 w-full h-full text-indigo-500/30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30" preserveAspectRatio="none">
                        <path d="M0,25 Q15,5 30,18 T60,8 T90,22 T100,2" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
                        <path d="M0,25 Q15,5 30,18 T60,8 T90,22 T100,2 L100,30 L0,30 Z" fill="rgba(97, 218, 251, 0.03)" />
                        {/* Higher blue line */}
                        <path d="M0,20 Q20,15 40,5 T80,12 T100,8" fill="none" stroke="#4F46E5" strokeWidth="1" strokeDasharray="1.5" />
                      </svg>
                      
                      {/* Fake grid markings */}
                      <span className="absolute bottom-1 left-1 text-[8px] text-slate-600">0% base</span>
                      <span className="absolute top-1 right-1 text-[8px] text-emerald-500">100% capacity</span>
                    </div>
                  </div>

                  {/* Tutor simulated chatbot block */}
                  <div className="bg-[#111] border border-[#222] rounded-md p-3.5 flex flex-col space-y-2">
                    <p className="text-[9px] uppercase tracking-wider text-[#4F46E5] font-semibold mb-1">Stateful AI Tutor dialogue simulator</p>
                    <div className="bg-[#0A0A0A] p-2.5 rounded text-slate-300 border border-[#222]">
                      <span className="text-[#61DAFB] font-bold block mb-1">💡 Personalized AI Tutor:</span>
                      "Excellent! You successfully resolved the .NET Dependency Injection hierarchy. Next, let's explore transient versus scoped lifetimes..."
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Roadmap elements inside EduAI panel */}
            <div className="mt-12 pt-10 border-t border-[#222]">
              <p className="font-mono text-xs tracking-wider text-slate-500 uppercase mb-6">VISION ROADMAP PROGRESS</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div id="roadmap-q1" className="bg-[#111] p-5 rounded-lg border border-[#222]">
                  <span className="inline-block bg-[#61DAFB] text-black text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full mb-3">Q1 Beta Launch</span>
                  <p className="text-xs text-slate-400 font-mono leading-relaxed">
                    CURRICULUM ALIGNMENT: Automated extraction of national education templates, enabling tailored study sequences.
                  </p>
                </div>

                <div id="roadmap-q2" className="bg-[#111] p-5 rounded-lg border border-[#222]">
                  <span className="inline-block bg-[#4F46E5] text-[#FFFFFF] text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full mb-3">Q2 Global Expansion</span>
                  <p className="text-xs text-slate-400 font-mono leading-relaxed">
                    LOCAL TRANSLATIONS: Reconciling AI semantic evaluation scripts across multilingual databases for regional compliant schools.
                  </p>
                </div>

                <div id="roadmap-q3" className="bg-[#111] p-5 rounded-lg border border-[#222]">
                  <span className="inline-block bg-[#61DAFB] text-black text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full mb-3">Q3 AI Tutor Integration</span>
                  <p className="text-xs text-slate-400 font-mono leading-relaxed">
                    REAL-TIME SYNC: Multi-modal conversational voice companion tutors responding to math and software queries.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>
      )}

      {/* 5. Experience Timeline teaser widget */}
      <section id="timeline-teaser-section" className="mb-32 text-center">
        <div className="max-w-3xl mx-auto cosmic-card-purple p-8 rounded-xl flex flex-col md:flex-row items-center justify-between text-left gap-6">
          <div>
            <span className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-[#111] text-[#61DAFB] border border-[#222] text-[10px] font-mono uppercase tracking-wider mb-3">
              Vision Roadmap
            </span>
            <h4 className="text-xl font-display font-semibold text-white mb-2">EduAI Vision & Journey Timeline</h4>
            <p className="text-xs text-slate-400 font-display">Discover Tural's detailed growth trajectory from the 2024 concept launch to projected 2028+ global adoptions.</p>
          </div>
          <Link
            id="timeline-view-eduai-btn"
            to="/eduai"
            className="shrink-0 bg-[#161616] hover:bg-[#222] text-[#A0A0A0] hover:text-white px-5 py-3 rounded-full border border-[#222] hover:border-[#333] text-xs font-mono transition-all flex items-center"
          >
            Review Roadmap Timeline
            <ArrowUpRight className="ml-2 h-4 w-4 text-[#61DAFB]" />
          </Link>
        </div>
      </section>

      {/* 6. Projects Gallery */}
      <section id="projects-gallery-section" className="mb-10">
        <h2 className="text-center font-mono text-xs tracking-widest text-slate-500 uppercase mb-3">
          PORTFOLIO SHOWCASE
        </h2>
        <h3 className="text-center text-3xl font-display font-bold text-white mb-16">
          Featured Engineering Architecture
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => {
            const isBackend = project.id === "uni-preference";
            const currentStyle = isBackend ? "cosmic-card-blue" : "cosmic-card-purple";
            return (
              <div key={project.id} id={`project-card-${project.id}`} className={`${currentStyle} p-8 rounded-2xl flex flex-col justify-between`}>
                <div>
                  {/* Category line */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                      SYSTEM APPLICATION
                    </span>
                    <span className="font-mono text-xs font-semibold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      {project.metrics}
                    </span>
                  </div>

                  <h4 className="text-2xl font-display font-bold text-white mb-4">
                    {project.title}
                  </h4>

                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-display font-light mb-6">
                    {project.description}
                  </p>

                  {/* Architecture Block Details */}
                  <div className="bg-[#0A0A0A] p-4 rounded-lg border border-[#222] mb-6 font-mono text-[11px] leading-relaxed">
                    <p className="text-slate-500 uppercase tracking-wider text-[10px] mb-2 font-bold flex items-center">
                      <Database className="h-3 w-3 mr-1 text-[#61DAFB]" />
                      Architectural Specification
                    </p>
                    <p className="text-[#888]">
                      {project.architectureDetails}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-3 py-1 rounded-md bg-[#161616] text-slate-400 border border-[#222]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subpage or GitHub details */}
                <div className="pt-6 border-t border-[#222] flex items-center justify-between">
                  <span className="text-[10px] text-slate-600 font-mono tracking-wider">SECURE_RELEASES_STABLE</span>
                  <Link
                    id={`view-project-link-${project.id}`}
                    to="/projects"
                    className="inline-flex items-center font-mono text-xs font-semibold text-[#61DAFB] hover:text-[#4F46E5] transition-colors"
                  >
                    View Engineering Specs
                    <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
