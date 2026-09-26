
import profileImg from "../assets/my-profile.jpeg";
import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiTailwindcss, SiFastapi } from "react-icons/si";
import { TbBrain } from "react-icons/tb";

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techBadges = [
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-[#059669]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
    { name: "LLMs & RAG", icon: <TbBrain className="text-purple-500" /> },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 dark:from-indigo-600/15 dark:via-purple-600/10 dark:to-cyan-600/10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 mb-10 sm:mb-12 shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>Available for new opportunities & freelance</span>
        </motion.div>

        {/* Profile Avatar with Subtle Glowing Ring */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          className="relative mb-8 sm:mb-10 group"
        >
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-75 blur-md group-hover:opacity-100 transition duration-500 group-hover:scale-105"></div>
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-800">
            <img
              src={profileImg}
              alt="Philip Nicholas Lodounu"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Name & Role Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3 mb-8"
        >
          <h2 className="text-sm sm:text-base font-semibold text-indigo-700 dark:text-indigo-400 tracking-wider uppercase font-mono">
            Hi, I&apos;m Philip Nicholas Lodounu
          </h2>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading leading-tight">
            Frontend Engineer <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400">
              & AI Engineer
            </span>
          </h1>
        </motion.div>

        {/* Supporting Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8"
        >
          I build responsive, user-focused web and mobile applications, integrating AI capabilities with{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-100">React.js</span>,{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-100">React Native</span>,{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-100">Node.js</span>,{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-100">Python</span>, and modern{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-100">LLM technologies</span>.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-10"
        >
          <button
            onClick={() => scrollToSection("mywork")}
            className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all shadow-md shadow-indigo-600/25 flex items-center gap-2"
          >
            <span>Explore Projects</span>
            <FiArrowDown className="w-4 h-4" />
          </button>

          <a
            href="/Resume.pdf"
            download
            className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95 transition-all shadow-sm flex items-center gap-2"
          >
            <span>Download CV</span>
            <FiDownload className="w-4 h-4" />
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/50 border border-slate-300 dark:border-slate-700/80 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <span>Get in Touch</span>
            <FiArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Social Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-3 text-slate-500 dark:text-slate-400 mb-10"
        >
          <a
            href="https://github.com/nicholas-philip"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors shadow-sm"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/philiplodonu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors shadow-sm"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:philiplodonu67@gmail.com"
            aria-label="Send Email"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors shadow-sm"
          >
            <FiMail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Floating / Active Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full pt-6 border-t border-slate-200/60 dark:border-slate-800/80"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 font-mono">
            Core Engineering Stack & Focus
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {techBadges.map((badge, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs font-medium text-slate-700 dark:text-slate-200 shadow-sm"
              >
                <span className="text-base">{badge.icon}</span>
                <span>{badge.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
