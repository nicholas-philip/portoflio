import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-white dark:bg-[#070b14] border-t border-slate-300 dark:border-slate-800 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Brand Mark & Statement */}
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-mono font-bold text-base shadow-md shadow-indigo-500/20">
                PL
              </div>
              <span className="text-lg font-black text-black dark:text-white font-heading">
                Philip Nicholas Lodounu
              </span>
            </div>
            <p className="text-xs sm:text-sm text-black dark:text-white leading-relaxed font-medium">
              Frontend Engineer & AI Engineer. Building responsive web and mobile applications with applied AI systems.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm font-bold text-black dark:text-white">
            <button onClick={() => scrollToSection("home")} className="hover:opacity-70 transition-opacity">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="hover:opacity-70 transition-opacity">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="hover:opacity-70 transition-opacity">
              Services
            </button>
            <button onClick={() => scrollToSection("mywork")} className="hover:opacity-70 transition-opacity">
              Projects
            </button>
            <button onClick={() => scrollToSection("ai")} className="hover:opacity-70 transition-opacity">
              AI Engineering
            </button>
            <button onClick={() => scrollToSection("journey")} className="hover:opacity-70 transition-opacity">
              Journey
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:opacity-70 transition-opacity">
              Contact
            </button>
          </div>

          {/* Socials & Back-to-Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/nicholas-philip"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-800 text-black dark:text-white hover:border-black dark:hover:border-white transition-colors"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/philiplodonu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-800 text-black dark:text-white hover:border-black dark:hover:border-white transition-colors"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:philiplodonu67@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-800 text-black dark:text-white hover:border-black dark:hover:border-white transition-colors"
            >
              <FiMail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-200 border border-black dark:border-white transition-all shadow-sm"
              title="Back to Top"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-black dark:text-white">
          <p>© {new Date().getFullYear()} Philip Nicholas Lodounu. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            Designed & Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
