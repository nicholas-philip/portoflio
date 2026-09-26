import { motion } from "framer-motion";
import { FiLayout, FiFigma, FiServer, FiCheck } from "react-icons/fi";
import { TbBrain } from "react-icons/tb";

const Services = () => {
  const services = [
    {
      icon: <FiLayout className="w-6 h-6 text-indigo-500" />,
      title: "Responsive Web Development",
      description:
        "Building fast, accessible, and responsive web applications with React, Next.js, Vite, and Tailwind CSS designed to look exceptional across all devices.",
      features: [
        "Mobile-first responsive layouts",
        "Fast load times & SEO optimization",
        "Interactive SPA & Multi-page apps",
        "Clean, semantic modern HTML5/CSS3",
      ],
      tags: ["React", "Next.js", "Tailwind CSS", "Vite"],
    },
    {
      icon: <FiFigma className="w-6 h-6 text-purple-500" />,
      title: "UI/UX Design Implementation",
      description:
        "Translating Figma prototypes and design concepts into pixel-perfect, accessible code with fluid micro-interactions and smooth user flows.",
      features: [
        "Pixel-perfect Figma-to-code",
        "Framer Motion micro-animations",
        "Accessible color contrast & ARIA",
        "Dark & Light mode integration",
      ],
      tags: ["Figma", "Framer Motion", "Tailwind CSS", "UI/UX"],
    },
    {
      icon: <FiServer className="w-6 h-6 text-emerald-500" />,
      title: "Frontend Architecture & APIs",
      description:
        "Developing modular, reusable component systems connected to RESTful APIs, real-time channels, and authentication services.",
      features: [
        "Reusable component hierarchies",
        "REST API & WebSocket integration",
        "State management (Hooks, Context)",
        "Error boundaries & loading states",
      ],
      tags: ["REST APIs", "Node.js", "Express", "Context API"],
    },
    {
      icon: <TbBrain className="w-6 h-6 text-rose-500" />,
      title: "AI-Powered App Development",
      description:
        "Developing interfaces and applications powered by Large Language Models, contextual RAG pipelines, and real-time streaming responses.",
      features: [
        "LLM & Chatbot integrations",
        "Document Q&A & RAG systems",
        "Real-time streaming text responses",
        "Prompt engineering & guardrails",
      ],
      tags: ["LLMs", "RAG", "Python / FastAPI", "OpenRouter"],
    },
  ];

  return (
    <section
      id="services"
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
          What I Deliver
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-heading"
        >
          Engineering Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300"
        >
          Combining clean frontend engineering, full-stack API integration, and intelligent AI capabilities to build impactful digital products.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-400 dark:hover:border-indigo-700/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Header with Icon */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-2.5 mb-6">
                {service.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <FiCheck className="w-3 h-3" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2">
              {service.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
