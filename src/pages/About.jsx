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
        return "bg-black text-white dark:bg-white dark:text-black border-transparent";
      case "Working Knowledge":
        return "bg-slate-200 text-black dark:bg-slate-800 dark:text-white border-slate-300 dark:border-slate-700";
      case "Exploring":
        return "bg-slate-100 text-black dark:bg-slate-900 dark:text-white border-slate-300 dark:border-slate-700";
      default:
        return "bg-slate-100 text-black dark:bg-slate-800 dark:text-white border-slate-300 dark:border-slate-700";
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black dark:text-white font-mono mb-2"
        >
          My Background & Growth
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black dark:text-white font-heading"
        >
          About Me
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
          <div className="relative rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-xl">
            <img
              src={userImg}
              alt="Philip Nicholas Lodounu"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] object-cover object-center rounded-xl"
            />
            <div className="mt-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-black dark:text-white">
                <span className="font-bold text-black dark:text-white">Accra, Ghana · Codetrain Africa</span>
                <span className="font-bold font-mono text-black dark:text-white">Frontend & AI</span>
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
          <div className="max-w-none text-black dark:text-white leading-relaxed space-y-4 text-base sm:text-lg font-medium">
            <p>
              I am a Software Engineer with hands-on experience building responsive, user-focused web and mobile applications using{" "}
              <strong className="text-black dark:text-white font-bold">JavaScript, React.js, React Native, Node.js, and Tailwind CSS</strong>.
            </p>
            <p>
              Experienced in developing end-to-end applications, integrating AI capabilities, and using modern development tools to build practical software solutions.
              Completed software engineering training at{" "}
              <strong className="text-black dark:text-white font-bold">Codetrain Africa</strong> and continue to strengthen skills through real-world projects and professional experience at{" "}
              <strong className="text-black dark:text-white font-bold">Aerolabgh</strong>, <strong className="text-black dark:text-white font-bold">Complete Farmer</strong>, and{" "}
              <strong className="text-black dark:text-white font-bold">Oasis Infobyte</strong>.
            </p>
            <p>
              A problem solver and collaborative team player with a strong interest in frontend development, AI engineering, and creating technology that solves real-world problems.
              Today I build end-to-end applications integrating{" "}
              <strong className="text-black dark:text-white font-bold">LLMs, RAG retrieval pipelines, real-time WebSockets, and Mobile Money payments</strong>.
            </p>
          </div>

          {/* Education, Certifications & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-black dark:text-white text-sm font-bold mb-1 font-mono">
                <FiBookOpen className="w-4 h-4 text-indigo-500" />
                <span>Education</span>
              </div>
              <h4 className="font-bold text-sm text-black dark:text-white">Codetrain Africa</h4>
              <p className="text-xs text-black dark:text-white font-medium">Software Engineering (Apr 2023 – Present)</p>
              <p className="text-xs text-black dark:text-white mt-1">Keta Senior High School (Sep 2022 – Nov 2024)</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-black dark:text-white text-sm font-bold mb-1 font-mono">
                <FiAward className="w-4 h-4 text-emerald-500" />
                <span>Certifications</span>
              </div>
              <h4 className="font-bold text-sm text-black dark:text-white">MERN Stack Development</h4>
              <p className="text-xs text-black dark:text-white font-medium">Simplilearn · Introduction to MERN</p>
              <p className="text-xs text-black dark:text-white mt-1">SoloLearn · Introduction to JavaScript</p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-black dark:text-white text-sm font-bold mb-1 font-mono">
                <FiCode className="w-4 h-4 text-purple-500" />
                <span>Languages</span>
              </div>
              <div className="space-y-1.5 mt-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-black dark:text-white">English</span>
                  <span className="text-[11px] font-semibold text-black dark:text-white">Proficient</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-black dark:text-white">Ewe</span>
                  <span className="text-[11px] font-semibold text-black dark:text-white">Native</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-black dark:text-white">Akan</span>
                  <span className="text-[11px] font-semibold text-black dark:text-white">Native</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack / What I've Learned Section */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h3 className="text-2xl font-black text-black dark:text-white font-heading">
              What I&apos;ve Learned & Tech Stack
            </h3>
            <p className="text-sm font-medium text-black dark:text-white mt-1">
              Honest breakdown of technologies, frameworks, and platforms applied across my production and case-study builds.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-200 dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-800">
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
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === tab.id
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                    : "text-black dark:text-white hover:bg-slate-300/60 dark:hover:bg-slate-800/80"
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
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              key={index}
              className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm hover:border-black dark:hover:border-white hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-xl">{skill.icon}</span>
                <span className="text-xs sm:text-sm font-bold text-black dark:text-white truncate">
                  {skill.name}
                </span>
              </div>
              <span
                className={`self-start text-[10px] font-bold px-2 py-0.5 rounded-full border ${getLevelBadgeClass(
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
