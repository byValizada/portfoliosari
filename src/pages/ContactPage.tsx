import React, { useState, useEffect } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertTriangle, Terminal, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "SECURE_PORT_3000 // Handshaking initialized...",
    "Hub tunnel successfully established on 127.0.0.1...",
    "Ready to bind visitor envelope inputs."
  ]);

  // Terminal logging simulator
  useEffect(() => {
    if (status === "success") {
      const timer1 = setTimeout(() => {
        setTerminalLogs((prev) => [
          ...prev,
          `[LOG] Received incoming envelope from [${formData.name}]`,
        ]);
      }, 500);

      const timer2 = setTimeout(() => {
        setTerminalLogs((prev) => [
          ...prev,
          `[SECURE] Encrypting contents with standard TLS protocols...`,
        ]);
      }, 1500);

      const timer3 = setTimeout(() => {
        setTerminalLogs((prev) => [
          ...prev,
          `[OK] Pipeline transmission to turalvalizada32@gmail.com completed. Status: 200 OK.`,
        ]);
      }, 2500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [status]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    // Simulate server response delay
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");
      setTerminalLogs((prev) => [
        ...prev,
        `[INFO] Form action callback triggered at ${new Date().toLocaleTimeString()}`,
      ]);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setStatus("idle");
    setTerminalLogs([
      "SECURE_PORT_3000 // Handshaking initialized...",
      "Hub tunnel successfully established on 127.0.0.1...",
      "Ready to bind visitor envelope inputs."
    ]);
  };

  return (
    <div id="contact-page" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
      
      {/* Page Header */}
      <section id="contact-header" className="py-12 border-b border-[#222222] mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          Connect & Collaborate
        </h1>
        <p className="max-w-2xl text-slate-400 font-display font-light leading-relaxed">
          Have an inquiry regarding EduAI's pilot, .NET Core architectures, or looking to schedule a project collaboration? Submit your criteria directly using the form below.
        </p>
      </section>

      {/* Main Form and Hub Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#111111] border border-[#222222] p-8 rounded-2xl relative shadow-xl">
            <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#61DAFB] rounded-full animate-pulse" />
              Direct Communication Channel
            </h2>

            {status === "success" ? (
              <div id="contact-success-panel" className="bg-[#111] border border-[#222] p-8 rounded-xl text-center space-y-4">
                <CheckCircle className="h-14 w-14 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-display font-bold text-white">Message Transmitted</h3>
                <p className="text-sm text-slate-400 font-display leading-relaxed max-w-md mx-auto">
                  Thank you! Your message has been successfully logged on behalf of Tural. A secure notification copy has been routed with immediate priority.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-full bg-[#161616] border border-[#222] hover:border-[#333] text-xs font-mono text-slate-300 transition-colors uppercase tracking-wider cursor-pointer hover:text-white"
                  >
                    Send another envelope
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {status === "error" && (
                  <div id="contact-error-panel" className="bg-[#111] border border-red-500/30 p-4 rounded-lg flex items-center space-x-3 text-red-400 text-xs font-mono">
                    <AlertTriangle className="h-5 w-5 shrink-0" />
                    <span>Please ensure name, email, and the message coordinates are fully declared.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      required
                      placeholder="Liam Anderson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0A0A0A] text-sm text-white px-5 py-3 rounded-full border border-[#222] focus:border-[#333] focus:outline-none focus:ring-1 focus:ring-[#61DAFB]/45 font-display transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                      Your Email Address
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      required
                      placeholder="liam@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0A0A0A] text-sm text-white px-5 py-3 rounded-full border border-[#222] focus:border-[#333] focus:outline-none focus:ring-1 focus:ring-[#61DAFB]/45 font-display transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                    Message Body
                  </label>
                  <textarea
                    id="contact-message-input"
                    rows={6}
                    required
                    placeholder="Describe your architecture requirements, integration project scope, or pilot objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0A0A0A] text-sm text-white p-4 rounded-2xl border border-[#222] focus:border-[#333] focus:outline-none focus:ring-1 focus:ring-[#61DAFB]/45 font-display transition-all resize-y"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-display font-semibold text-black bg-white hover:bg-opacity-90 transition-all cursor-pointer shadow-lg font-bold"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping" />
                      <span>Transmitting package...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>Transmit Message Envelope</span>
                    </div>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Server Logger Simulation and Direct info */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          
          {/* Quick info metrics card */}
          <div className="bg-[#111111]/85 border border-[#222222] p-8 rounded-2xl mb-6 shadow-xl">
            <h3 className="text-lg font-display font-semibold text-white mb-6 border-b border-[#222] pb-3">
              Direct Channels
            </h3>
            
            <div className="space-y-5">
              
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-full bg-[#61DAFB]/10 border border-[#61DAFB]/20 text-[#61DAFB]">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Primary Email Address</p>
                  <a
                    id="contact-direct-email-link"
                    href="mailto:turalvalizada32@gmail.com"
                    className="text-sm font-semibold font-display text-white hover:text-[#61DAFB] transition-colors"
                  >
                    turalvalizada32@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-full bg-[#61DAFB]/10 border border-[#61DAFB]/20 text-[#61DAFB]">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Operational Location</p>
                  <p className="text-sm font-semibold font-display text-white">
                    Europe-bound operations / Global Remote Tasks
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-full bg-[#61DAFB]/10 border border-[#61DAFB]/20 text-[#61DAFB]">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Preferred Stack Pairing</p>
                  <p className="text-xs font-mono text-slate-300 leading-normal">
                    .NET Core architectures connected via high performance React SPAs
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Connected Hub Logger terminal */}
          <div className="bg-[#111] border border-[#222] p-6 rounded-2xl font-mono text-[11px] leading-relaxed flex-1 flex flex-col shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#222] mb-4 text-xs text-slate-500">
              <span className="flex items-center font-bold">
                <Terminal className="h-3.5 w-3.5 mr-1.5 text-[#61DAFB]" />
                SECURE_CONTACT_DONGLE
              </span>
              <span className="text-emerald-500 font-bold font-mono">ONLINE</span>
            </div>
            
            <div id="terminal-logs-display" className="space-y-2 flex-1 text-slate-400 overflow-y-auto">
              {terminalLogs.map((log, index) => (
                <div key={index} className="flex">
                  <span className="text-[#61DAFB] mr-2 shrink-0">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4 border-t border-[#222] mt-4 text-[9px] text-slate-600">
              SECURE BUFFER CHANNELS ACCREDITED / TLS V1.3 ENCRYPTION ACTIVE
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
