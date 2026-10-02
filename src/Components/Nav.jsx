import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiArrowUpRight } from "react-icons/fi";

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = [
        "home", "about", "services", "mywork", "ai", "journey", "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "mywork" },
    { label: "AI Engineering", id: "ai" },
    { label: "Journey", id: "journey" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#0b0f19]/90 backdrop-blur-md shadow-sm border-b border-slate-300 dark:border-slate-800 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="group flex items-center gap-2 sm:gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded-lg p-1 min-w-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-mono font-bold text-base sm:text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform shrink-0">
            PL
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-base font-black text-black dark:text-white font-heading tracking-tight block leading-tight truncate max-w-[140px] sm:max-w-none">
              Philip Nicholas Lodounu
            </span>
            <span className="text-[10px] sm:text-[11px] text-black dark:text-white font-medium tracking-wide block truncate max-w-[140px] sm:max-w-none">
              Frontend &amp; AI Engineer
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-200/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-300 dark:border-slate-800 backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                  : "text-black dark:text-white hover:bg-slate-300/60 dark:hover:bg-slate-800/80"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Action Area */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark / Light Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle theme"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-black dark:text-white flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
          >
            {isDarkMode ? (
              <FiSun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            ) : (
              <FiMoon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800" />
            )}
          </button>

          {/* Desktop Contact CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold bg-black text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200 border border-black dark:border-white active:scale-95 transition-all shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <FiArrowUpRight className="w-4 h-4" />
          </button>

          {/* ── Mobile Hamburger ── animated 3-bar → X */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden relative w-10 h-10 rounded-xl bg-black dark:bg-white border border-black dark:border-white active:scale-95 flex flex-col items-center justify-center gap-[5px] shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
          >
            {/* Bar 1 */}
            <span
              className={`block h-[2px] w-[18px] bg-white dark:bg-black rounded-full origin-center transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            {/* Bar 2 — fades out when open */}
            <span
              className={`block h-[2px] bg-white dark:bg-black rounded-full transition-all duration-200 ${
                mobileMenuOpen ? "w-0 opacity-0" : "w-[18px] opacity-100"
              }`}
            />
            {/* Bar 3 */}
            <span
              className={`block h-[2px] w-[18px] bg-white dark:bg-black rounded-full origin-center transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown Panel ── slides down from nav bar */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-3 sm:mx-6 mb-4 mt-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-2xl overflow-hidden">
          {/* Nav Links */}
          <nav className="p-3 space-y-0.5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white px-3 pt-2 pb-3">
              Navigation
            </p>
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{ transitionDelay: mobileMenuOpen ? `${idx * 25}ms` : "0ms" }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${
                  activeSection === item.id
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-black dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id ? (
                  <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0" />
                ) : (
                  <FiArrowUpRight className="w-3.5 h-3.5 text-black dark:text-white group-hover:translate-x-0.5 transition-transform shrink-0" />
                )}
              </button>
            ))}
          </nav>

          {/* Bottom divider + CTA */}
          <div className="px-3 pt-1 pb-3 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full mt-2 py-3 px-4 rounded-xl text-sm font-bold bg-black text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200 border border-black dark:border-white flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all"
            >
              <span>Get In Touch</span>
              <FiArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] -z-10"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Nav;
