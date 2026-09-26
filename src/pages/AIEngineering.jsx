import { motion } from "framer-motion";
import { FiTerminal, FiCheckCircle, FiCompass } from "react-icons/fi";
import { TbBrain, TbPrompt, TbVectorTriangle, TbRobot } from "react-icons/tb";

const AIEngineering = () => {
  const aiPillars = [
    {
      icon: <TbBrain className="w-6 h-6 text-purple-400" />,
      title: "LLM Application Development",
      description:
        "Building end-to-end intelligent applications integrating modern language models via OpenRouter, Groq, and OpenAI-compatible endpoints with streaming responses and structured JSON outputs.",
      features: [
        "Streaming text generation with SSE",
        "Structured schema enforcement & validation",
        "Multi-model routing & fallback handlers",
      ],
    },
    {
      icon: <TbVectorTriangle className="w-6 h-6 text-indigo-400" />,
      title: "Retrieval-Augmented Generation (RAG)",
      description:
        "Implementing contextual retrieval architectures that ingest PDFs and custom documentation, chunk text, generate vector embeddings, and retrieve semantic context via ChromaDB.",
      features: [
        "Document ingestion & semantic chunking",
        "Vector search & similarity matching",
        "Context injection with grounded prompts",
      ],
    },
    {
      icon: <TbPrompt className="w-6 h-6 text-amber-400" />,
      title: "Prompt Engineering & Guardrails",
      description:
        "Designing system prompts with few-shot examples, dynamic context management, safety guardrails, and deterministic fallbacks to ensure reliable AI behavior.",
      features: [
        "System prompt design & context limits",
        "Hallucination mitigation & boundary checks",
        "User intent classification & sanitization",
      ],
    },
    {
      icon: <FiTerminal className="w-6 h-6 text-cyan-400" />,
      title: "AI Service Architecture",
      description:
        "Connecting Python/FastAPI microservices with React/Next.js client interfaces, providing low-latency token streaming and responsive client-side state handling.",
      features: [
        "FastAPI async endpoint handlers",
        "Client-side streaming hooks (React)",
        "Graceful timeout & rate-limit handling",
      ],
    },
  ];

  const agenticTopics = [
    {
      title: "Tool Calling & Functions",
      desc: "Equipping LLMs with specific API tools and functions to fetch live data or execute actions.",
    },
    {
      title: "Multi-Step Task Reasoning",
      desc: "Structuring complex requests into sequential execution plans with intermediate validation.",
    },
    {
      title: "Agent Memory & Context",
      desc: "Managing short-term conversational context and retrieving long-term persistent state.",
    },
    {
      title: "AI-Assisted Workflows",
      desc: "Leveraging tools like Claude Code and OpenCode to accelerate test-driven iteration and debugging.",
    },
  ];

  return (
    <section
      id="ai"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-10"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 font-mono mb-2"
        >
          Specialization & Applied Research
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-heading"
        >
          AI Engineering
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300"
        >
          I build AI-powered applications that combine modern interfaces with LLMs, retrieval systems, streaming responses, and intelligent application workflows.
        </motion.p>
      </div>

      {/* 4 AI Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
        {aiPillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-purple-400 dark:hover:border-purple-700/80 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/50 border border-purple-100 dark:border-purple-900/60 flex items-center justify-center mb-5">
              {pillar.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-3">
              {pillar.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {pillar.description}
            </p>
            <ul className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800/80">
              {pillar.features.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                >
                  <FiCheckCircle className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Exploring Agentic AI Feature Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-950/80 via-slate-900 to-indigo-950/80 border border-purple-500/30 p-8 sm:p-10 shadow-2xl text-white"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-xs font-semibold text-purple-300 mb-4 font-mono">
            <TbRobot className="w-4 h-4 text-purple-300" />
            <span>Active Learning Frontier</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-3 text-white">
            Exploring Agentic AI & Tool-Assisted Workflows
          </h3>

          <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed mb-8 max-w-3xl">
            I am currently exploring agentic AI and AI-powered developer workflows, with a focus on building applications where LLMs can reason through multi-step tasks, invoke tools, retrieve context dynamically, and assist in autonomous workflows.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {agenticTopics.map((topic, tIdx) => (
              <div
                key={tIdx}
                className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-1.5">
                  <FiCompass className="w-3.5 h-3.5 text-purple-400" />
                  <span>{topic.title}</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {topic.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AIEngineering;