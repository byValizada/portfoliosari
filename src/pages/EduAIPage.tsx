import React, { useState, useRef, useEffect } from "react";
import { Sparkles, Send, Brain, Compass, Users, Map, Layers, Calendar } from "lucide-react";
import { ChatMessage } from "../types";
import { TIMELINE_EVENTS } from "../data";

export default function EduAIPage() {
  // Chatbot State
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-msg",
      role: "assistant",
      content: "Hello! I am Tural's AI Companion. I would love to talk with you about EduAI, my startup's engineering blueprint, my experience with C#/.NET Core and React, and my vision for AI-powered personalized education pipelines. Ask me anything!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeStage, setActiveStage] = useState(1);

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll chat to bottom on updates
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Handle chatbot send
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage: ChatMessage = {
      id: "msg-" + Date.now(),
      role: "user",
      content: userInput,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setIsTyping(true);

    try {
      const chatHistory = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatHistory }),
      });

      if (!res.ok) {
        throw new Error("HTTP error: " + res.status);
      }

      const data = await res.json();
      
      setMessages((prev) => [
        ...prev,
        {
          id: "reply-" + Date.now(),
          role: "assistant",
          content: data.reply || "I apologize, but I encountered an error computing a model payload.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (err: any) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: "reply-err-" + Date.now(),
          role: "assistant",
          content: "I ran into a small error fetching the AI response. However, you can learn more about EduAI below or shoot me a direct message at turalvalizada32@gmail.com!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const eduStages = [
    {
      level: 1,
      title: "Learning Platform",
      phase: "Phase 1: Foundational System",
      description: "Baseline learning ecosystems using semantic content matrices. Implements standard course outline parsers, diagnostic student assessments, and automated indexing of syllabus criteria.",
      icon: Layers,
      highlight: "Enables structural digital content distribution"
    },
    {
      level: 2,
      title: "AI Assistant",
      phase: "Phase 2: Personalised AI Tutor",
      description: "Deployment of stateful, personalized AI Tutors. Tutors track pupil mastery metrics, adjust lesson tempos, explain STEM equations step-by-step, and offer constructive code reviews.",
      icon: Brain,
      highlight: "94.8% student retention rate based on beta studies"
    },
    {
      level: 3,
      title: "National Education Network",
      phase: "Phase 3: Nationwide Integration",
      description: "Deep secure synchronization with board standards and local school districts. Integrates standardized national templates with local score databases over highly responsive microservice hooks.",
      icon: Users,
      highlight: "Unified administration and regional dashboards"
    },
    {
      level: 4,
      title: "Global Expansion",
      phase: "Phase 4: International Reach",
      description: "Global delivery accommodating low-resource remote schools. Features highly compressed multi-modal offline local model deployments running on budget tablet hardware.",
      icon: Map,
      highlight: "Universal affordable education irrespective of network bandwidth"
    }
  ];

  return (
    <div id="eduai-page" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
      
      {/* Page Header */}
      <section id="eduai-header" className="py-12 border-b border-[#222222] mb-16">
        <div className="flex items-center space-x-2.5 px-3.5 py-1.5 bg-[#1a1a1a] border border-[#333] text-[#61DAFB] text-xs font-mono rounded-full w-fit mb-5">
          <Brain className="h-3.5 w-3.5 text-[#61DAFB]" />
          <span>EduAI / Artificial Intelligence Research Workspace</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          Future of AI Education
        </h1>
        <p className="max-w-2xl text-slate-400 font-display font-light leading-relaxed">
          Developing highly adaptive state machines and conversational companions that align automatically with curriculum templates to provide zero-cost premium learning paths.
        </p>
      </section>

      {/* Main Grid: Info Space on left, AI Twin Chatbot on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-28">
        
        {/* Left column: Stages of EduAI and Vision */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-6">EduAI Structural Stages</h2>
            <p className="text-sm text-slate-400 leading-relaxed font-display font-light mb-8">
              True educational impact requires moving beyond generic chatbot answers. EduAI introduces structural software stages, systematically transitioning regional school classrooms into personalized interactive learning networks.
            </p>

            {/* Stages Selector list */}
            <div className="space-y-4">
              {eduStages.map((stage) => {
                const Icon = stage.icon;
                const isSelected = activeStage === stage.level;
                return (
                  <button
                    key={stage.level}
                    id={`stage-button-${stage.level}`}
                    onClick={() => setActiveStage(stage.level)}
                    className={`w-full text-left p-5 rounded-xl border transition-all flex items-start gap-4 cursor-pointer ${
                      isSelected
                        ? "bg-[#111] border-[#333] shadow-[0_0_15px_rgba(97,218,251,0.08)]"
                        : "bg-[#111]/40 border-[#222] hover:border-[#333]"
                    }`}
                  >
                    <div className={`p-3 rounded-lg ${isSelected ? "bg-white text-black font-semibold" : "bg-[#161616] text-[#A0A0A0]"}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase tracking-wider font-mono text-[#61DAFB] font-bold">
                          {stage.phase}
                        </span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#61DAFB] animate-ping" />}
                      </div>
                      <h3 className="text-base font-display font-bold text-white mb-2">{stage.title}</h3>
                      {isSelected && (
                        <p className="text-xs text-slate-400 leading-relaxed font-mono mt-2 mb-3 bg-[#0A0A0A] p-3 rounded border border-[#222]">
                          {stage.description}
                        </p>
                      )}
                      {isSelected && (
                        <span className="inline-block text-[11px] text-[#61DAFB] font-mono">
                          ✓ Key achievement: {stage.highlight}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right column: AI Digital Twin Chat Console */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="bg-[#111] border border-[#222] rounded-xl flex flex-col h-[550px] overflow-hidden shadow-2xl">
            {/* Chatbox Header */}
            <div className="bg-[#0D0D0D] px-5 py-4 border-b border-[#222] flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#61DAFB] to-[#4F46E5] flex items-center justify-center border border-white/10 text-white font-display font-bold text-sm shadow-md">
                    TV
                  </div>
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-black" />
                </div>
                <div>
                  <h4 className="text-white font-display font-semibold text-sm">Tural Valizada (AI Twin)</h4>
                  <p className="text-[10px] text-slate-500 font-mono tracking-wide">SYSTEM INTEGRATION ACTIVE / GEMINI-3x</p>
                </div>
              </div>
              <Compass className="h-4 w-4 text-[#61DAFB] animate-spin" style={{ animationDuration: "12s" }} />
            </div>

            {/* Chat Messages Log */}
            <div
              ref={chatContainerRef}
              id="chat-messages-container"
              className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#0A0A0A]/55"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl p-4 text-xs md:text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#1A1A1A] border border-[#333] text-white font-display"
                        : "bg-[#161616] border border-[#222] text-slate-300"
                    }`}
                  >
                    {/* Message Header */}
                    <div className="flex items-center space-x-2 mb-2 font-mono text-[9px] opacity-65">
                      <span className="font-bold uppercase tracking-wider">
                        {msg.role === "user" ? "Reviewing Guest" : "Tural's Representative"}
                      </span>
                      <span>•</span>
                      <span>{msg.timestamp}</span>
                    </div>
                    {/* Render text with basic markdown/newlines support */}
                    <p className="whitespace-pre-line font-display leading-relaxed">{msg.content}</p>
                    
                    {msg.role === "assistant" && msg.id === "welcome-msg" && (
                      <div className="mt-4 pt-3 border-t border-[#222] flex flex-wrap gap-1.5">
                        <button
                          onClick={() => setUserInput("How did you design EduAI's architecture?")}
                          className="bg-[#111] hover:bg-[#1A1A1A] text-[#61DAFB] hover:text-[#4F46E5] px-2.5 py-1 rounded text-[10px] font-mono border border-[#222] text-left transition-colors cursor-pointer"
                        >
                          "How did you design EduAI?"
                        </button>
                        <button
                          onClick={() => setUserInput("What backend mechanisms did you use for the student Majors app?")}
                          className="bg-[#111] hover:bg-[#1A1A1A] text-[#61DAFB] hover:text-[#4F46E5] px-2.5 py-1 rounded text-[10px] font-mono border border-[#222] text-left transition-colors cursor-pointer"
                        >
                          "What stacks do you recommend?"
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#161616] border border-[#222] max-w-[85%] rounded-xl p-4 text-xs">
                    <div className="flex items-center space-x-2 mb-1.5 font-mono text-[9px] text-[#61DAFB] font-bold">
                      <span className="tracking-widest">GEMINI PROCESSING</span>
                    </div>
                    <div className="flex items-center space-x-1 py-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-550 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-550 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-550 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Segment */}
            <form onSubmit={handleSendMessage} className="bg-[#0D0D0D] p-3 border-t border-[#222] flex gap-2 shrink-0">
              <input
                id="chatbot-input"
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask Tural's Twin about systems, .NET Core, React, or contacts..."
                className="flex-1 bg-[#0A0A0A] text-xs text-white px-4 py-3 rounded-full border border-[#222] focus:border-[#333] focus:outline-none focus:ring-1 focus:ring-[#61DAFB]/40 placeholder-slate-600 font-display transition-all"
              />
              <button
                id="chatbot-send-btn"
                type="submit"
                disabled={isTyping || !userInput.trim()}
                className="bg-white hover:bg-opacity-90 disabled:bg-[#1a1a1a] disabled:text-slate-600 text-black p-3 rounded-full transition-all shadow-md shrink-0 flex items-center justify-center cursor-pointer"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Chronological Vertical Experience Timeline Segment */}
      <section id="timeline-section" className="mb-10">
        <h2 className="text-center font-mono text-xs tracking-widest text-slate-500 uppercase mb-3">
          TIMELINE JOURNAL
        </h2>
        <h3 className="text-center text-3xl font-display font-bold text-white mb-20">
          Professional Progression
        </h3>

        {/* Vertical timeline line drawn dynamically */}
        <div className="relative border-l border-[#222222] max-w-3xl mx-auto pl-8 sm:pl-12 space-y-16">
          {TIMELINE_EVENTS.map((evt) => {
            return (
              <div key={evt.year} id={`timeline-event-${evt.year}`} className="relative transition-all group">
                
                {/* Visual Circle Node representing timestamps */}
                <span className="absolute -left-12 sm:-left-16 top-1.5 w-8 h-8 rounded-full bg-[#0A0A0A] border-2 border-[#222] flex items-center justify-center shadow-[0_0_12px_rgba(97,218,251,0.06)] z-20 group-hover:border-white transition-all">
                  <Calendar className="h-3 w-3 text-[#61DAFB] group-hover:text-[#4F46E5] transition-colors" />
                </span>

                {/* Event details block card */}
                <div className="bg-[#111111]/80 backdrop-blur-md border border-[#222] p-6 rounded-xl hover:border-[#333333] hover:bg-[#111111] transition-all shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center space-x-2.5">
                      <span className="text-sm font-mono font-bold text-[#61DAFB] bg-[#61DAFB]/10 border border-[#61DAFB]/20 px-2.5 py-0.5 rounded">
                        {evt.year}
                      </span>
                      <h4 className="text-lg font-display font-bold text-slate-100 group-hover:text-white transition-colors">
                        {evt.title}
                      </h4>
                    </div>
                    <span className="text-slate-500 font-mono text-xs tracking-wide uppercase">
                      {evt.subtitle}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-display font-light">
                    {evt.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
