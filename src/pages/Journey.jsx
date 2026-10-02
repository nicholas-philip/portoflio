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
        "Assisted in developing a responsive company website, improving mobile usability and user experience. Participated in weekly code reviews in HTML, CSS, and JavaScript, improving project delivery speed by 10% and enhancing stakeholder technical understanding by 60%.",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Code Reviews"],
    },
    {
      period: "06/2024 – 08/2024",
      role: "Frontend Engineer (Internship)",
      company: "Complete Farmer",
      location: "Airport, Accra",
      description:
        "Built modular UI components inspired by Shadcn UI for design consistency and scalability. Fixed backend email templates, resolved frontend styling and responsiveness bugs using React.js, Tailwind CSS, and TypeScript, and collaborated with PMs for onboarding QA.",
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
          className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black dark:text-white font-mono mb-2"
        >
          Continuous Growth
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black dark:text-white font-heading"
        >
          Learning Journey & Engineering Workflow
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-black dark:text-white font-medium"
        >
          A factual timeline of my technical evolution, active learning frontiers, and engineering methodology.
        </motion.p>
      </div>

      {/* Experience Timeline */}
      <div className="max-w-4xl mx-auto mb-20">
        <h3 className="text-xl font-black text-black dark:text-white font-heading mb-8 flex items-center gap-2">
          <FiCalendar className="text-indigo-500" />
          <span>Milestones Timeline</span>
        </h3>

        <div className="relative border-l-2 border-slate-300 dark:border-slate-800 ml-2 sm:ml-6 space-y-6 sm:space-y-8 pb-4">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-4 sm:pl-8"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-black dark:border-white shadow-sm" />

              <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-black dark:text-white font-heading">
                      {item.role}
                    </h4>
                    <span className="text-xs font-bold text-black dark:text-white">
                      {item.company} · <span className="font-normal">{item.location}</span>
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-black text-white dark:bg-white dark:text-black">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-black dark:text-white leading-relaxed mb-4 font-medium">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-black dark:text-white border border-slate-200 dark:border-slate-700"
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
          className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-black dark:text-white border border-slate-300 dark:border-slate-700 text-xs font-bold font-mono mb-4">
              <FiTrendingUp />
              <span>Active Growth</span>
            </div>
            <h3 className="text-2xl font-black text-black dark:text-white font-heading mb-3">
              Currently Learning
            </h3>
            <p className="text-sm font-medium text-black dark:text-white mb-6">
              Engineering frontiers and advanced topics I am currently studying and applying to personal prototypes:
            </p>

            <div className="space-y-3.5">
              {currentlyLearning.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700"
                >
                  <h4 className="text-xs sm:text-sm font-bold text-black dark:text-white mb-0.5">
                    {item.name}
                  </h4>
                  <p className="text-xs text-black dark:text-white font-normal">
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
          className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-black dark:text-white border border-slate-300 dark:border-slate-700 text-xs font-bold font-mono mb-4">
            <FiCode />
            <span>Methodology</span>
          </div>
          <h3 className="text-2xl font-black text-black dark:text-white font-heading mb-3">
            How I Build
          </h3>
          <p className="text-sm font-medium text-black dark:text-white mb-6">
            A disciplined engineering process from initial requirement analysis to tested, iterative deployment:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {workflowSteps.map((ws, wIdx) => (
              <div
                key={wIdx}
                className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 flex items-start gap-3"
              >
                <span className="text-sm font-mono font-black text-black dark:text-white shrink-0">
                  {ws.step}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-black dark:text-white mb-0.5">
                    {ws.title}
                  </h4>
                  <p className="text-xs text-black dark:text-white leading-relaxed font-normal">
                    {ws.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Engineering Practices */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
      >
        <p className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 mb-5 text-center">
          Engineering Standards &amp; Practices
        </p>

        <div className="grid grid-cols-2 gap-3">
          {[
            "Component-Driven Architecture",
            "Separation of Concerns",
            "Resilient Error & Empty States",
            "Git PRs & Code Cleanliness",
          ].map((label, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <span className="font-sans text-xs font-semibold text-black dark:text-white text-center leading-snug">
                {label}
              </span>
            </div>
          ))}
          {/* Last — full width centered */}
          <div className="col-span-2 flex items-center justify-center px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="font-sans text-xs font-semibold text-black dark:text-white text-center leading-snug">
              Semantic &amp; Accessible Markup (a11y)
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Journey;