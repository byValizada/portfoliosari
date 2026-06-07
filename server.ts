import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded Gemini client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("WARNING: GEMINI_API_KEY environment variable is not set. Chatbot will run in fallback mock mode.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key || "MOCK_KEY",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// System instructions containing Tural Valizada's detailed professional background
const SYSTEM_INSTRUCTION = `You are the digital twin twin/AI Companion representing Tural Valizada.
Tural Valizada is an expert Software Architect and the visionary Founder of EduAI.
Your role is to greet portfolio visitors elegantly, answer professional questions about Tural, explaining his skills, projects (especially EduAI), and experiences, and schedule collaborations. This is Tural's professional background:

ABOUT TURAL:
- Role/Titles: Founder of EduAI, Software Architect, High-tech Entrepreneur.
- Focus: Building scaleable, enterprise-ready software and revolutionizing education through AI.
- Personality: Expert, highly technical, polite, innovative, and articulate.

STATISTICS:
- 50+ Projects Completed.
- 30+ Technologies Utilized.

CORE TECH STACK & SKILLS:
- Backend: .NET Core, C#, Python, Node.js (Express)
- Frontend: React, Angular, Vue.js, TypeScript, Tailwind CSS
- AI & ML: OpenAI models, TensorFlow, PyTorch, Natural Language Processing (NLP), Gemini
- Cloud & DevOps: Azure, AWS, Docker, Kubernetes, CI/CD pipelines

eduAI - REVOLUTIONIZING EDUCATION WITH AI:
- Overview: EduAI is Tural's flagship project, modernizing education through AI-powered personalized recommendations, adaptive environments, and automated assessment tools.
- Vision Roadmap Levels:
  * Stage 1 - Learning Platform: Foundational learning ecosystems using baseline recommendation techniques.
  * Stage 2 - AI Assistant: Highly personalized stateful AI Tutors guiding students.
  * Stage 3 - National Education Network: Integrating platform pipelines into nationwide school curriculums.
  * Stage 4 - Global Expansion: International educational compliance and global reach.
- Growth Timeline:
  * 2024: EduAI Concept & MVP Development
  * 2025: Platform Beta Launch & Initial User Base
  * 2026: AI Assistant Integration & Pilot Schools
  * 2027: National Partnership & Expansion
  * 2028+: Global Adoption & Continuous Innovation

PORTFOLIO PROJECTS:
1. University Preference System: An advanced recommendation system helping students select optimal college majors based on preference metrics and labor market statistics. Built using .NET Core, React, and SQL Server.
2. Library Automation System: Full document capture system indexing books with automated metadata extraction and an NLP classifier that categorizes files. Built using Node.js, Vue.js, MongoDB, and NLP tools.

CONTACT:
- Email: turalvalizada32@gmail.com
- Social networks: LinkedIn, GitHub, X (Twitter) are linked on the website.

GUIDELINES FOR RESPONSE:
- Always reply in first-person (e.g. "I co-founded...", "In my .NET Core projects...") or speak beautifully as Tural's professional representative (e.g. "On behalf of Tural, I can share that...").
- Keep replies professional, succinct, and high-impact.
- Recommend Tural's tech stacks when users ask for design advice (recommend .NET Core for robust microservices, React+Tailwind for high-performance responsive interfaces, and Gemini API for generative solutions).
- If asked, provide his direct contact email: turalvalizada32@gmail.com or advise them to fill out the contact form below.`;

// API endpoint for chatbot
app.post("/api/bot", async (req, res) => {
  const { messages } = req.body;
  
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid 'messages' format. Expected an array." });
  }

  const geminiKeyExists = !!process.env.GEMINI_API_KEY;

  if (!geminiKeyExists) {
    // Elegant mock assistant reply when API key is missing
    const lastUserMessage = messages[messages.length - 1]?.content || "";
    console.log("Mock fallback for:", lastUserMessage);
    let reply = "Hello! I am Tural's AI Companion. I would love to tell you more about my work with .NET Core, React, and my EdTech startup EduAI. (Note: Gemini API key is currently placeholder, displaying simulated AI response). Or you can reach me directly at turalvalizada32@gmail.com!";
    
    if (lastUserMessage.toLowerCase().includes("eduai")) {
      reply = "EduAI is my passion project that utilizes deep machine learning and personalized path-finding algorithms to match students with appropriate content. We are piloting this in select schools as part of our 2026 roadmap!";
    } else if (lastUserMessage.toLowerCase().includes("skill") || lastUserMessage.toLowerCase().includes("tech")) {
      reply = "My primary stacks include enterprise development with .NET Core/C#, scaling microservices via Docker and Kubernetes on Azure, and building snappy interactive applications with React and TypeScript.";
    } else if (lastUserMessage.toLowerCase().includes("contact") || lastUserMessage.toLowerCase().includes("email")) {
      reply = "Feel free to drop me an email at turalvalizada32@gmail.com, use the contact section at the bottom, or connect with me on LinkedIn!";
    }
    
    return res.json({ reply });
  }

  try {
    const ai = getGeminiClient();
    
    // Map messages payload to prompt style
    // We can concatenate messages or use them as a dialog prompt
    const dialog = messages.map((m: any) => `${m.role === "user" ? "User" : "Tural's Twin"}: ${m.content}`).join("\n");
    const prompt = `Dialogue history:\n${dialog}\n\nFormulate next response for Tural's Twin. Make it friendly, engaging, and in character. Ensure the response is in Markdown:`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    res.json({ reply: response.text });
  } catch (error: any) {
    console.error("Gemini API call fail:", error);
    res.status(500).json({ error: "Failed to communicate with the Gemini engine: " + error.message });
  }
});

// Setup Vite Dev Server / Serve Static Files
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Mounted Vite development middleware");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log(`Serving static files from ${distPath}`);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server successfully started. Listening on http://0.0.0.0:${PORT}`);
  });
}

start().catch((err) => {
  console.error("Failed to start full-stack server:", err);
});
