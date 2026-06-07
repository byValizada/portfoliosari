import { useState } from "react";
import { ExternalLink, Github, Database, Layers, ShieldCheck, CheckSquare, Layers2, LayoutDashboard, Brain, BookOpen } from "lucide-react";
import { PROJECTS } from "../data";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "ai" | "backend" | "frontend">("all");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <div id="projects-page" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
      
      {/* Header segment */}
      <section id="projects-header" className="py-12 border-b border-[#222222] mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          Software Systems Portfolio
        </h1>
        <p className="max-w-2xl text-slate-400 font-display font-light leading-relaxed">
          Review details on enterprise solutions designed by Tural, spanning robust web APIs, modular frontend pipelines, container orchestration diagrams, and natural language evaluations.
        </p>

        {/* Categories toggler tab */}
        <div className="flex flex-wrap gap-2.5 mt-8">
          {(["all", "ai", "backend", "frontend"] as const).map((cat) => (
            <button
              key={cat}
              id={`filter-btn-${cat}`}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider border transition-all cursor-pointer ${
                filter === cat
                  ? "bg-white border-white text-black font-semibold shadow-md"
                  : "bg-[#111] border-[#222] text-[#A0A0A0] hover:text-white"
              }`}
            >
              {cat === "all" ? "All Systems" : `${cat} Architecture`}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Detailed List */}
      <div className="space-y-20">
        {filteredProjects.map((project) => {
          const isEduAI = project.id === "eduai-spotlight";
          const borderStyle = "border-[#222222] hover:border-[#333333]";
          
          return (
            <div
              key={project.id}
              id={`projects-detail-item-${project.id}`}
              className={`bg-[#111111]/80 backdrop-blur-md rounded-2xl p-6 md:p-10 border ${borderStyle} shadow-xl transition-all`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Information block */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">
                        Module release: STABLE
                      </span>
                      <span className="text-xs font-mono font-bold text-[#61DAFB] px-2.5 py-0.5 rounded bg-[#61DAFB]/10 border border-[#61DAFB]/20">
                        {project.metrics}
                      </span>
                    </div>

                    <h2 className="text-3xl font-display font-bold text-white mb-4">
                      {project.title}
                    </h2>

                    <p className="text-sm md:text-base text-slate-400 leading-relaxed font-display font-light mb-6">
                      {project.description}
                    </p>

                    <h3 className="font-mono text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
                      Technology Specifications
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] sm:text-xs font-mono px-3 py-1.5 rounded bg-[#161616] text-slate-400 border border-[#222]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links Row */}
                  <div className="pt-6 border-t border-[#222] flex items-center gap-6">
                    {project.githubUrl && (
                      <a
                        id={`project-github-${project.id}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-mono text-slate-400 hover:text-white transition-colors"
                      >
                        <Github className="h-4 w-4 mr-1.5" />
                        Source repository
                      </a>
                    )}
                    <span className="text-slate-800 text-xs font-mono">|</span>
                    <span className="text-[11px] text-slate-500 font-mono flex items-center">
                      <ShieldCheck className="h-4 w-4 mr-1.5 text-emerald-500" />
                      Protocol verified
                    </span>
                  </div>
                </div>

                {/* Simulated Enterprise Architectural Workflow diagram block */}
                <div className="lg:col-span-6 bg-[#0A0A0A] border border-[#222] p-6 rounded-xl flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-[#61DAFB] font-bold block mb-4 tracking-wider">
                      SYSTEM METRIC & PIPELINE SPECIFICATION
                    </span>

                    {/* Pipelines flowchart based on architecture details */}
                    {isEduAI ? (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3.5 bg-[#111] p-3 rounded border border-[#222]">
                          <LayoutDashboard className="h-5 w-5 text-[#61DAFB] shrink-0" />
                          <div>
                            <p className="text-xs font-bold text-white font-mono">REACT CLIENT DASHBOARD</p>
                            <p className="text-[10px] text-slate-500 font-mono">Renders relative student competency curves & custom outlines</p>
                          </div>
                        </div>
                        <div className="h-6 w-0.5 bg-[#61DAFB]/30 ml-6" />
                        <div className="flex items-center space-x-3.5 bg-[#111] p-3 rounded border border-[#222]">
                          <Layers2 className="h-5 w-5 text-[#61DAFB] shrink-0" />
                          <div>
                            <p className="text-xs font-bold text-white font-mono">EXPRESS ROUTE CONTEXT SEALS</p>
                            <p className="text-[10px] text-slate-500 font-mono">Secures payload validation guidelines & prompts with token limit gates.</p>
                          </div>
                        </div>
                        <div className="h-6 w-0.5 bg-[#61DAFB]/30 ml-6" />
                        <div className="flex items-center space-x-3.5 bg-[#111] p-3 rounded border border-[#222]">
                          <Brain className="h-5 w-5 text-[#4F46E5] shrink-0" />
                          <div>
                            <p className="text-xs font-bold text-white font-mono">GEMINI GENERATIVE LLM AGENT</p>
                            <p className="text-[10px] text-slate-500 font-mono">Decides adaptive content weights based on regional blueprints</p>
                          </div>
                        </div>
                      </div>
                    ) : project.id === "uni-preference" ? (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3.5 bg-[#111] p-3 rounded border border-[#222]">
                          <LayoutDashboard className="h-5 w-5 text-[#61DAFB] shrink-0" />
                          <div>
                            <p className="text-xs font-bold text-white font-mono">SPA CLIENT (REACT + TS)</p>
                            <p className="text-[10px] text-slate-500 font-mono">Captures candidate scores, preference coefficients, and area filters</p>
                          </div>
                        </div>
                        <div className="h-6 w-0.5 bg-[#61DAFB]/30 ml-6" />
                        <div className="flex items-center space-x-3.5 bg-[#111] p-3 rounded border border-[#222]">
                          <Layers className="h-5 w-5 text-[#61DAFB] shrink-0" />
                          <div>
                            <p className="text-xs font-bold text-white font-mono">.NET WEB CONTROLLERS (RESTful)</p>
                            <p className="text-[10px] text-slate-500 font-mono">Executes secure major recommendation logic & verifies regional quotas</p>
                          </div>
                        </div>
                        <div className="h-6 w-0.5 bg-[#61DAFB]/30 ml-6" />
                        <div className="flex items-center space-x-3.5 bg-[#111] p-3 rounded border border-[#222]">
                          <Database className="h-5 w-5 text-[#4F46E5] shrink-0" />
                          <div>
                            <p className="text-xs font-bold text-white font-mono">SQL SERVER / EF CORE MATRIX</p>
                            <p className="text-[10px] text-slate-500 font-mono">Matches database major preferences with location metadata</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3.5 bg-[#111] p-3 rounded border border-[#222]">
                          <BookOpen className="h-5 w-5 text-[#4F46E5] shrink-0" />
                          <div>
                            <p className="text-xs font-bold text-white font-mono">SCANNER OCR & RAW TXT FEED</p>
                            <p className="text-[10px] text-slate-500 font-mono">Digitizes indexes & catalog titles in physical libraries</p>
                          </div>
                        </div>
                        <div className="h-6 w-0.5 bg-[#4F46E5]/30 ml-6" />
                        <div className="flex items-center space-x-3.5 bg-[#111] p-3 rounded border border-[#222]">
                          <Brain className="h-5 w-5 text-[#4F46E5] shrink-0" />
                          <div>
                            <p className="text-xs font-bold text-white font-mono">TF-IDF NLP PROCESSING CLASSIFIER</p>
                            <p className="text-[10px] text-slate-500 font-mono">Analyzes term indexes to automatically tag genre structures</p>
                          </div>
                        </div>
                        <div className="h-6 w-0.5 bg-[#4F46E5]/30 ml-6" />
                        <div className="flex items-center space-x-3.5 bg-[#111] p-3 rounded border border-[#222]">
                          <Database className="h-5 w-5 text-[#61DAFB] shrink-0" />
                          <div>
                            <p className="text-xs font-bold text-white font-mono">MONGODB EVENT DOCUMENT STORE</p>
                            <p className="text-[10px] text-slate-500 font-mono">Persists borrowing registries & document categorization clusters</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Structural Note */}
                  <div className="mt-8 pt-4 border-t border-[#222] text-[10px] text-slate-500 font-mono leading-normal">
                    <p className="font-bold text-slate-400 mb-1">Architectural Standard Disclaimer:</p>
                    All modules adhere to SOLID programming goals, separation of concerns, complete environment variable separation, and strict CORS policies.
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
