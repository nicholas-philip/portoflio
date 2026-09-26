import { motion } from "framer-motion";
import { 
  FiCalendar, 
  FiCode, 
  FiTrendingUp 
} from "react-icons/fi";

const Journey = () => {
  const timeline = [
    {
      period: "Present",
      role: "Frontend Engineer (Volunteering)",
      company: "Aerolabgh",
      location: "Accra, Ghana",
      description:
        "Building dynamic and interactive single-page applications using React. Designing modern, accessible interfaces with Tailwind CSS and DaisyUI, and organizing bi-weekly client syncs to align on deliverables.",
      skills: ["React.js", "Tailwind CSS", "DaisyUI", "React Icons", "Client Communications"],
    },
    {
      period: "10/2024 – 11/2024",
      role: "Web Developer (Internship)",
      company: "Oasis Infobyte",
      location: "Delhi, India (Remote)",
      description:
        "Assisted in developing a responsive company website, improving mobile usability and user experience. Participated in weekly code reviews in HTML, CSS, and JavaScript, contributing to smooth team delivery.",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Code Reviews"],
    },
    {
      period: "06/2024 – 08/2024",
      role: "Frontend Engineer (Internship)",
      company: "Complete Farmer",
      location: "Airport, Accra",
      description:
        "Built modular UI components inspired by Shadcn UI for design consistency. Fixed backend email templates, resolved frontend issues in React.js, Tailwind CSS, and TypeScript, and collaborated with PMs for onboarding QA.",
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Modular UI", "Email Templates"],
    },
    {
      period: "04/2023 – Present",
      role: "Software Engineering Fellow",
      company: "Codetrain Africa",
      location: "Accra, Ghana",
      description:
        "Rigorous practical software engineering training covering full-stack development, mobile engineering with React Native, API architectures, and applied AI engineering.",
      skills: ["React Native", "Node.js", "Express.js", "MongoDB", "Python", "LLMs"],
    },
  ];

  const currentlyLearning = [
    { name: "Advanced TypeScript", desc: "Strict typing, complex generics, and type-safe API contracts" },
    { name: "Agentic AI & Tool Calling", desc: "Multi-step reasoning, tool execution, and autonomous workflows" },
    { name: "RAG Pipeline Optimization", desc: "Hybrid search, re-ranking, and chunking strategy evaluation" },
    { name: "System Design & Microservices", desc: "Scalable client-server boundaries, caching, and rate limiting" },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Understand",
      desc: "Analyze user needs, business requirements, constraints, and edge cases.",
    },
    {
      step: "02",
      title: "Plan",
      desc: "Design component hierarchy, data models, state flows, and API contracts.",
    },
    {
      step: "03",
      title: "Build",
      desc: "Develop clean, accessible, and modular components with modern styling.",
    },
    {
      step: "04",
      title: "Integrate",
      desc: "Connect backend endpoints, authentication, databases, and AI services.",
    },
    {
      step: "05",
      title: "Test",
      desc: "Verify cross-device responsiveness, loading states, error fallbacks, and a11y.",
    },
    {
      step: "06",
      title: "Improve",
      desc: "Profile performance, refactor for maintainability, and iterate from feedback.",
    },
  ];

  return (
    <section
      id="journey"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-10"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono mb-2"
        >
          Continuous Growth
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-heading"
        >
          Learning Journey & Engineering Workflow
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300"
        >
          A factual timeline of my technical evolution, active learning frontiers, and engineering methodology.
        </motion.p>
      </div>

      {/* Experience Timeline */}
      <div className="max-w-4xl mx-auto mb-20">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-8 flex items-center gap-2">
          <FiCalendar className="text-indigo-500" />
          <span>Milestones Timeline</span>
        </h3>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-8 pb-4">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-6 sm:pl-8"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-indigo-400 shadow-sm" />

              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-heading">
                      {item.role}
                    </h4>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      {item.company} · <span className="text-slate-500 dark:text-slate-400 font-normal">{item.location}</span>
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Currently Learning & How I Build Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Currently Learning Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 text-xs font-semibold font-mono mb-4">
              <FiTrendingUp />
              <span>Active Growth</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading mb-3">
              Currently Learning
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
              Engineering frontiers and advanced topics I am currently studying and applying to personal prototypes:
            </p>

            <div className="space-y-3.5">
              {currentlyLearning.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800"
                >
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-0.5">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* How I Build (6-Step Workflow) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60 text-xs font-semibold font-mono mb-4">
            <FiCode />
            <span>Methodology</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading mb-3">
            How I Build
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
            A disciplined engineering process from initial requirement analysis to tested, iterative deployment:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {workflowSteps.map((ws, wIdx) => (
              <div
                key={wIdx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3"
              >
                <span className="text-sm font-mono font-bold text-indigo-600 dark:text-indigo-400 shrink-0">
                  {ws.step}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-0.5">
                    {ws.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Engineering Practices Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="p-6 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center"
      >
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-3">
          Engineering Standards & Practices
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-medium text-slate-700 dark:text-slate-300">
          <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            Component-Driven Architecture
          </span>
          <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            Separation of Concerns
          </span>
          <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            Resilient Error & Empty States
          </span>
          <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            Git PRs & Code Cleanliness
          </span>
          <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            Semantic & Accessible Markup (a11y)
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Journey;