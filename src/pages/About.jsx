import { useState } from "react";
import userImg from "../assets/my-profile.jpeg";
import { motion } from "framer-motion";
import { 
  FiLayout, 
  FiServer, 
  FiSmartphone, 
  FiCode, 
  FiAward, 
  FiBookOpen, 
  FiTool, 
  FiCreditCard 
} from "react-icons/fi";
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiPython, 
  SiFastapi, 
  SiMongodb, 
  SiFirebase, 
  SiRedis, 
  SiGithub, 
  SiPostman, 
  SiCloudinary,
  SiVercel
} from "react-icons/si";
import { TbBrain, TbPrompt, TbVectorTriangle, TbRobot } from "react-icons/tb";

const About = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillsData = [
    // Frontend & Mobile
    { name: "React.js", category: "frontend", level: "Comfortable", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "React Native (Expo)", category: "frontend", level: "Comfortable", icon: <FiSmartphone className="text-[#61DAFB]" /> },
    { name: "Next.js", category: "frontend", level: "Working Knowledge", icon: <SiNextdotjs /> },
    { name: "NativeWind", category: "frontend", level: "Comfortable", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
    { name: "Tailwind CSS", category: "frontend", level: "Comfortable", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
    { name: "JavaScript (ES6+)", category: "frontend", level: "Comfortable", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "TypeScript", category: "frontend", level: "Working Knowledge", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Zustand State", category: "frontend", level: "Comfortable", icon: <FiCode className="text-amber-500" /> },
    { name: "TanStack React Query", category: "frontend", level: "Comfortable", icon: <FiCode className="text-rose-500" /> },
    { name: "HTML5 & Vanilla CSS", category: "frontend", level: "Comfortable", icon: <FiLayout className="text-indigo-500" /> },

    // Backend & APIs
    { name: "Node.js", category: "backend", level: "Comfortable", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "Express.js", category: "backend", level: "Comfortable", icon: <SiExpress /> },
    { name: "Python", category: "backend", level: "Working Knowledge", icon: <SiPython className="text-[#3776AB]" /> },
    { name: "FastAPI", category: "backend", level: "Working Knowledge", icon: <SiFastapi className="text-[#059669]" /> },
    { name: "RESTful APIs", category: "backend", level: "Comfortable", icon: <FiServer className="text-emerald-500" /> },
    { name: "Socket.io (Realtime)", category: "backend", level: "Working Knowledge", icon: <FiServer className="text-cyan-500" /> },
    { name: "Server-Sent Events (SSE)", category: "backend", level: "Working Knowledge", icon: <FiServer className="text-cyan-500" /> },
    { name: "Nodemailer", category: "backend", level: "Working Knowledge", icon: <FiServer className="text-indigo-400" /> },
    { name: "Capacitor (Mobile)", category: "backend", level: "Working Knowledge", icon: <FiSmartphone className="text-blue-500" /> },

    // AI & Data
    { name: "LLMs & Prompt Engineering", category: "ai", level: "Comfortable", icon: <TbBrain className="text-purple-500" /> },
    { name: "RAG & Document QA", category: "ai", level: "Working Knowledge", icon: <TbVectorTriangle className="text-indigo-500" /> },
    { name: "Vector Search (ChromaDB)", category: "ai", level: "Working Knowledge", icon: <TbPrompt className="text-amber-500" /> },
    { name: "Streaming AI Responses", category: "ai", level: "Working Knowledge", icon: <TbBrain className="text-cyan-500" /> },
    { name: "AI Agents & Tool Workflows", category: "ai", level: "Exploring", icon: <TbRobot className="text-purple-600" /> },

    // Databases & Storage
    { name: "MongoDB Atlas", category: "database", level: "Comfortable", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Firebase & Auth", category: "database", level: "Comfortable", icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: "Redis Caching", category: "database", level: "Working Knowledge", icon: <SiRedis className="text-[#DC382D]" /> },
    { name: "Cloudinary Media", category: "database", level: "Comfortable", icon: <SiCloudinary className="text-[#3448C5]" /> },

    // Tools & Platforms
    { name: "Git & GitHub", category: "tools", level: "Comfortable", icon: <SiGithub /> },
    { name: "VS Code & Postman", category: "tools", level: "Comfortable", icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: "Paystack Payments", category: "tools", level: "Working Knowledge", icon: <FiCreditCard className="text-emerald-500" /> },
    { name: "Claude Code & Antigravity", category: "tools", level: "Working Knowledge", icon: <FiTool className="text-indigo-500" /> },
    { name: "Vercel & Render", category: "tools", level: "Working Knowledge", icon: <SiVercel /> },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case "Comfortable":
        return "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/60";
      case "Working Knowledge":
        return "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800/60";
      case "Exploring":
        return "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800/60";
      default:
        return "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700";
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono mb-2"
        >
          My Background & Growth
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-heading"
        >
          About Me & Technical Arsenal
        </motion.h2>
      </div>

      {/* Main Bio & Engineering Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
        {/* Profile Card / Visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-xl">
            <img
              src={userImg}
              alt="Philip Nicholas Lodounu"
              className="w-full h-[400px] object-cover object-center rounded-xl"
            />
            <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-white">Accra, Ghana · Codetrain Africa</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-mono">Frontend & AI</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bio Text & Pillars */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed space-y-4 text-base sm:text-lg">
            <p>
              I am a Software Engineer with hands-on experience building responsive, user-focused web and mobile applications using{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">JavaScript, React.js, React Native, Node.js, and Tailwind CSS</strong>.
            </p>
            <p>
              Completed comprehensive software engineering training at <strong className="text-slate-900 dark:text-white font-semibold">Codetrain Africa</strong> and honed my skills through professional internships at <strong className="text-slate-900 dark:text-white font-semibold">Complete Farmer</strong> and <strong className="text-slate-900 dark:text-white font-semibold">Oasis Infobyte</strong>.
            </p>
            <p>
              Today, I build end-to-end applications integrating <strong className="text-slate-900 dark:text-white font-semibold">LLMs, RAG retrieval pipelines, real-time WebSockets, and Mobile Money payments (Paystack)</strong> to solve practical problems.
            </p>
          </div>

          {/* Education & Certifications Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-1 font-mono">
                <FiBookOpen className="w-4 h-4" />
                <span>Education</span>
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Codetrain Africa</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Software Engineering (2023 – Present)</p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Keta Senior High School (2022 – 2024)</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-bold mb-1 font-mono">
                <FiAward className="w-4 h-4" />
                <span>Certifications</span>
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">MERN Stack Development</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Simplilearn · Introduction to MERN</p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">SoloLearn · Introduction to JavaScript</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack / What I've Learned Section */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
              What I&apos;ve Learned & Tech Stack
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Honest breakdown of technologies, frameworks, and platforms applied across my production and case-study builds.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            {[
              { id: "all", label: "All" },
              { id: "frontend", label: "Frontend & Mobile" },
              { id: "backend", label: "Backend & Realtime" },
              { id: "ai", label: "AI & Data" },
              { id: "database", label: "Databases & Storage" },
              { id: "tools", label: "Tools & Platforms" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === tab.id
                    ? "bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              key={index}
              className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 shadow-sm hover:border-indigo-400 dark:hover:border-indigo-700 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-xl">{skill.icon}</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                  {skill.name}
                </span>
              </div>
              <span
                className={`self-start text-[10px] font-medium px-2 py-0.5 rounded-full border ${getLevelBadgeClass(
                  skill.level
                )}`}
              >
                {skill.level}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
