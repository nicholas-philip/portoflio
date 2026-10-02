import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiCheck, FiBookOpen, FiLayers, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { TbBrain, TbStethoscope, TbSparkles } from "react-icons/tb";

// Existing images
import susuImg from "../assets/susugroup.png";
import marketImg from "../assets/MarketPress.png";
import gameImg from "../assets/game (2).png";
import todoImg from "../assets/Todo-list.png";

const MyWork = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const projects = [
    {
      id: "nursify",
      title: "Nursify — Healthcare-as-a-Service Platform",
      category: "fullstack",
      categoryLabel: "Healthcare & Telehealth",
      tagline: "Telehealth platform connecting patients with verified nurses",
      image: null,
      accentIcon: <TbStethoscope className="w-8 h-8 text-emerald-400" />,
      gradient: "from-emerald-950/70 via-teal-950/50 to-slate-900",
      problem:
        "Patients need verified, timely access to qualified nursing professionals for remote consultations, vital sign monitoring, and medical record management.",
      built:
        "A full-stack digital health platform featuring WebRTC video consultations, real-time Socket.io messaging, role-based dashboards, and native Android packaging with Capacitor.",
      highlights: [
        "WebRTC video calls & real-time Socket.io patient-nurse chat",
        "Role-guarded routes (Patient, Nurse, Admin) with granular permissions",
        "Interactive health data visualizations for tracking patient vital signs",
        "Maternal & Child Health modules for prenatal and immunization tracking",
        "Nurse license verification pipeline & document management system",
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "WebRTC", "Socket.io", "Capacitor", "Tailwind CSS"],
      links: {
        website: "#",
        source: "https://github.com/nicholas-philip",
      },
    },
    {
      id: "skypay",
      title: "SkyPay — African Mobile Money Digital Wallet",
      category: "fullstack",
      categoryLabel: "Fintech & Mobile App",
      tagline: "Mobile wallet with ACID double-entry ledger & MoMo integration",
      image: null,
      accentIcon: <FiLayers className="w-8 h-8 text-cyan-400" />,
      gradient: "from-cyan-950/70 via-blue-950/50 to-slate-900",
      problem:
        "Users in Africa need a secure, intuitive digital wallet supporting deposits, withdrawals, and instant peer-to-peer transfers across mobile money providers.",
      built:
        "A full-stack mobile wallet application built with React Native (Expo) and an ACID-compliant Node.js/MongoDB transaction engine with double-entry ledgers.",
      highlights: [
        "Mobile Money provider integration (MTN, Vodafone, Tigo) with strict network rules",
        "Immutable, auditable double-entry transaction ledger preventing double-spending",
        "Real-time balance updates, privacy balance masking, and optimistic UI updates",
        "High-performance state management using Zustand and TanStack React Query",
        "Glassmorphic UI styled with NativeWind (Tailwind CSS) and smooth animations",
      ],
      learned:
        "Designing ACID-compliant financial state machines, immutable transaction ledgers, and caching server state with TanStack Query in React Native.",
      tags: ["React Native", "Expo", "NativeWind", "Zustand", "TanStack Query", "Node.js", "Express", "MongoDB"],
      links: {
        website: "#",
        source: "https://github.com/nicholas-philip",
      },
    },
    {
      id: "kente-ai",
      title: "Kente AI — Ghana Culture & Tourism AI Assistant",
      category: "ai",
      categoryLabel: "AI & Tourism",
      tagline: "Conversational AI travel guide with vision & local language learning",
      image: null,
      accentIcon: <TbSparkles className="w-8 h-8 text-amber-400" />,
      gradient: "from-amber-950/70 via-orange-950/50 to-slate-900",
      problem:
        "Travelers and cultural enthusiasts lack accessible tools to explore Ghanaian destinations, landmarks, and cultural traditions in an interactive conversational format.",
      built:
        "An AI travel assistant that plans itineraries, suggests places based on interests, teaches basic phrases in Twi, Ga, and Ewe, and recognizes uploaded photos of landmarks and Kente patterns.",
      highlights: [
        "Token-by-token streaming AI replies for immediate, responsive user feedback",
        "Multimodal photo analysis for identifying Kente cloth patterns, landmarks, and food",
        "Semantic RAG pipeline that searches tourism data by meaning rather than keywords",
        "Strict anti-hallucination guardrails forcing responses to use verified cultural context",
      ],
      learned:
        "Building semantic vector search pipelines, implementing guardrails against LLM hallucinations, and handling streaming responses on the frontend.",
      tags: ["React.js", "FastAPI", "Python", "RAG", "ChromaDB", "Vector Search", "OpenRouter", "Tailwind CSS"],
      links: {
        website: "#",
        source: "https://github.com/nicholas-philip",
      },
    },
    {
      id: "ecommerce",
      title: "Luxury Fashion & Beauty E-Commerce Platform",
      category: "fullstack",
      categoryLabel: "E-Commerce & Admin",
      tagline: "Full-stack storefront & admin dashboard with Paystack MoMo & GPS",
      image: null,
      accentIcon: <TbBrain className="w-8 h-8 text-purple-400" />,
      gradient: "from-purple-950/70 via-pink-950/50 to-slate-900",
      problem:
        "Modern luxury fashion brands require a decoupled customer storefront with Ghanaian Mobile Money checkout, precise GPS location tagging, and an administrative control center.",
      built:
        "A full-stack e-commerce platform using React 19, Vite, Express.js, and MongoDB with Paystack Mobile Money integration, Leaflet.js map delivery pinpointing, and Recharts analytics.",
      highlights: [
        "Paystack API integration (Card & MTN/Telecel/AirtelTigo MoMo) with HMAC webhooks",
        "Interactive GPS delivery pinpointing using Leaflet.js and HTML5 Geolocation",
        "Interactive 'Beauty & Style Match' recommendation quiz",
        "Admin analytics dashboard with Recharts, inventory tracking, and Cloudinary uploads",
        "Automated transactional emails & invoices via Nodemailer and EJS templates",
      ],
      learned:
        "Handling Paystack webhook HMAC verification, integrating Leaflet.js interactive maps, and architecting RBAC for store operations.",
      tags: ["React 19", "Vite", "Node.js", "Express.js", "MongoDB", "Paystack", "Zustand", "Leaflet.js"],
      links: {
        website: "#",
        source: "https://github.com/nicholas-philip",
      },
    },
    {
      id: "nutrighana",
      title: "NutriGhana — Nutrition & Local Food App",
      category: "fullstack",
      categoryLabel: "Nutrition & Mobile",
      tagline: "Cross-platform mobile & web app for local Ghanaian nutrition",
      image: null,
      accentIcon: <TbSparkles className="w-8 h-8 text-emerald-400" />,
      gradient: "from-emerald-950/70 via-slate-900 to-slate-900",
      problem:
        "Individuals seeking nutritional information and dietary guidance for local Ghanaian dishes lack dedicated digital nutritional resources.",
      built:
        "A cross-platform React Native and React.js application delivering nutritional breakdowns of local Ghanaian foods, dietary tips, and personalized user profiles.",
      highlights: [
        "Local food nutritional database with macro/micronutrient breakdowns",
        "Cross-platform UI using Tailwind CSS and NativeWind",
        "Secure user authentication and personalized health tips with Firebase & Express",
      ],
      learned:
        "Structuring shared cross-platform design tokens and managing consistent data models across mobile and web interfaces.",
      tags: ["React Native", "React.js", "NativeWind", "Firebase", "Express.js", "MongoDB"],
      links: {
        website: "#",
        source: "https://github.com/nicholas-philip",
      },
    },
    {
      id: "susugroup",
      title: "SusuGroup — Digital ROSCA Savings Platform",
      category: "web",
      categoryLabel: "Web Application",
      tagline: "Digitizing traditional rotating savings & group contributions",
      image: susuImg,
      problem:
        "Traditional rotating savings groups face manual accounting errors, lost paper logs, and opaque payout schedules.",
      built:
        "A responsive web platform that allows users to create, join, and manage rotating savings and credit groups transparently.",
      highlights: [
        "Group creation & rotation schedule automation",
        "Contribution status tracking & payout reminders",
        "Clean, accessible dashboard with responsive tables",
      ],
      learned:
        "Translating offline financial practices into intuitive web workflows and managing state consistency across user interactions.",
      tags: ["HTML5", "Tailwind CSS", "JavaScript", "Responsive UI"],
      links: {
        website: "https://nicholas-philip.github.io/-Susugroupapp/",
        source: "https://github.com/nicholas-philip/-Susugroupapp",
      },
    },
    {
      id: "marketpress",
      title: "MarketPress — Auto Parts Storefront",
      category: "web",
      categoryLabel: "E-Commerce",
      tagline: "Automotive replacement parts catalog & search platform",
      image: marketImg,
      problem:
        "Automotive business needed an easy-to-browse digital catalog allowing customers to quickly search specific vehicle components.",
      built:
        "A responsive e-commerce catalog featuring instant product search, category filtering, and product specification overviews.",
      highlights: [
        "Real-time product search and filter by part category",
        "Detailed product cards with stock and spec details",
        "Mobile-optimized responsive catalog grid",
      ],
      learned:
        "Implementing client-side catalog filtering algorithms and building structured e-commerce product layouts.",
      tags: ["HTML5", "Vanilla CSS", "JavaScript", "Flowbite", "Responsive Design"],
      links: {
        website: "https://nicholas-philip.github.io/marketpress/",
        source: "https://github.com/nicholas-philip/marketpress",
      },
    },
    {
      id: "taskmaster",
      title: "TaskMaster — Productivity Suite",
      category: "web",
      categoryLabel: "Productivity",
      tagline: "Interactive task management with persistent state & filtering",
      image: todoImg,
      problem:
        "Users need a lightweight, distraction-free tool to organize tasks by urgency and track completion status.",
      built:
        "A clean task manager featuring real-time status filtering, local persistence, priority tagging, and clean animations.",
      highlights: [
        "Full CRUD task management with edit and delete capabilities",
        "Category tabs (All, Pending, Completed)",
        "Persistent local storage and interactive checkboxes",
      ],
      learned:
        "Mastering state lifecycle patterns, DOM event delegation, and accessible form handling in modern JavaScript.",
      tags: ["React.js", "HTML5", "Tailwind CSS", "LocalStorage"],
      links: {
        website: "#",
        source: "https://github.com/nicholas-philip",
      },
    },
    {
      id: "tictactoe",
      title: "Tic Tac Toe — Realtime Logic Game",
      category: "games",
      categoryLabel: "Logic Game",
      tagline: "Interactive 2-player game with algorithmic state evaluation",
      image: gameImg,
      problem:
        "Practicing fundamental game algorithms, turn-based state evaluation, and win condition matrices in JavaScript.",
      built:
        "A clean, responsive browser game with dynamic score keeping, win/draw detection, and smooth board resets.",
      highlights: [
        "Matrix-based win-condition algorithm",
        "Turn tracker with visual player indicators",
        "Instant score reset and match history",
      ],
      learned:
        "Designing deterministic state evaluation algorithms and handling responsive board grid layouts.",
      tags: ["JavaScript", "HTML5", "Tailwind CSS", "Game Logic"],
      links: {
        website: "#",
        source: "https://github.com/nicholas-philip",
      },
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="mywork"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-10"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black dark:text-white font-mono mb-2"
        >
          Selected Portfolio Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black dark:text-white font-heading"
        >
          Engineering Projects & Case Studies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-black dark:text-white font-medium"
        >
          Real projects demonstrating full-stack engineering, frontend UI architecture, and applied AI systems.
        </motion.p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-slate-200 dark:bg-slate-900 rounded-2xl border border-slate-300 dark:border-slate-800 max-w-fit mx-auto">
          {[
            { id: "all", label: "All Projects" },
            { id: "ai", label: "AI Applications" },
            { id: "fullstack", label: "Full-Stack" },
            { id: "web", label: "Web Apps" },
            { id: "games", label: "Games & Tools" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === tab.id
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                  : "text-black dark:text-white hover:bg-slate-300/60 dark:hover:bg-slate-800/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => {
            const isExpanded = expandedCard === project.id;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm hover:border-black dark:hover:border-white hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Project Preview Header */}
                {project.image ? (
                  <div className="relative aspect-video w-full bg-slate-100 dark:bg-slate-800 overflow-hidden border-b border-slate-200 dark:border-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/95 dark:bg-slate-900/95 text-black dark:text-white backdrop-blur-md border border-slate-300 dark:border-slate-700 shadow-sm">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`relative aspect-video w-full bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between border-b border-slate-200 dark:border-slate-800`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/20 text-white backdrop-blur-md border border-white/30">
                        {project.categoryLabel}
                      </span>
                      <div className="p-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                        {project.accentIcon}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white font-bold block mb-0.5">
                        Featured System
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-white font-heading">
                        {project.title.split("—")[0]}
                      </h3>
                    </div>
                  </div>
                )}

                {/* Project Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="mb-3">
                      <h3 className="text-lg font-black text-black dark:text-white font-heading leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-black dark:text-white font-semibold mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Brief Summary */}
                    <p className="text-xs text-black dark:text-white leading-relaxed mb-4 font-normal line-clamp-3">
                      {project.built}
                    </p>

                    {/* Tech Stack Chips (First 4) */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.slice(0, 4).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-black dark:text-white border border-slate-200 dark:border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-slate-200 dark:bg-slate-800 text-black dark:text-white">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Expandable Case Study Deep Dive */}
                    <div className="mb-4">
                      <button
                        onClick={() => toggleCard(project.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-black dark:text-white hover:opacity-75 transition-opacity py-1"
                      >
                        <span>{isExpanded ? "Hide Details" : "View Case Study Details"}</span>
                        {isExpanded ? (
                          <FiChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <FiChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 space-y-3.5 text-xs text-black dark:text-white"
                        >
                          <div>
                            <strong className="block font-bold mb-1">Problem & Context:</strong>
                            <p className="leading-relaxed font-normal">{project.problem}</p>
                          </div>

                          <div>
                            <strong className="block font-bold mb-1 font-mono uppercase tracking-wider text-[10px]">
                              Key Highlights:
                            </strong>
                            <ul className="space-y-1">
                              {project.highlights.map((h, hIdx) => (
                                <li key={hIdx} className="flex items-start gap-1.5 font-normal">
                                  <FiCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>


                          <div>
                            <strong className="block font-bold mb-1">All Technologies:</strong>
                            <div className="flex flex-wrap gap-1">
                              {project.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-200 dark:bg-slate-800 text-black dark:text-white"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2.5 pt-3 border-t border-slate-200 dark:border-slate-800 mt-2">
                    {project.links.website && project.links.website !== "#" ? (
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-black text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200 border border-black dark:border-white flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                      >
                        <span>Live Demo</span>
                        <FiExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        onClick={() => toggleCard(project.id)}
                        className="flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-slate-100 text-black dark:bg-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                      >
                        <span>Architecture Spec</span>
                        <FiBookOpen className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <a
                      href={project.links.source || "https://github.com/nicholas-philip"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl text-xs font-bold text-black dark:text-white bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750 flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <FiGithub className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MyWork;
