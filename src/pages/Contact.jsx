import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  FiMail, 
  FiMapPin, 
  FiGithub, 
  FiLinkedin, 
  FiSend, 
  FiCheck, 
  FiCopy,
  FiPhone
} from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [resultMessage, setResultMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "philiplodonu67@gmail.com";
  const phoneNumber = "(+233) 506166706";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setResultMessage("");

    const formData = new FormData(event.target);
    formData.append("access_key", "9470bafe-f6de-4e8e-8339-86c5d8ccd659");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResultMessage("Thank you! Your message has been sent successfully. I'll get back to you promptly.");
        event.target.reset();
      } else {
        setStatus("error");
        setResultMessage(data.message || "Something went wrong. Please try again or email me directly.");
      }
    } catch {
      setStatus("error");
      setResultMessage("Unable to send message right now. Please email me directly at " + emailAddress);
    }
  };

  return (
    <section
      id="contact"
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
          Let&apos;s Work Together
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black dark:text-white font-heading"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-black dark:text-white font-medium"
        >
          Whether you have an engineering opening, freelance project, or want to discuss AI application development, my inbox is open.
        </motion.p>
      </div>

      {/* Split Contact Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Direct Contact Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <div>
            <h3 className="text-2xl font-black text-black dark:text-white font-heading mb-3">
              Contact Information
            </h3>
            <p className="text-sm text-black dark:text-white leading-relaxed mb-6 font-medium">
              I am based in Accra, Ghana, and available for full-time remote roles, on-site positions, and freelance contract projects globally.
            </p>
          </div>

          {/* Email Card with 1-Click Copy */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-black dark:text-white border border-slate-300 dark:border-slate-700 flex items-center justify-center">
                <FiMail className="w-5 h-5 text-indigo-500" />
              </div>
              <div>
                <span className="text-xs text-black dark:text-white font-mono block font-semibold">
                  Direct Email
                </span>
                <span className="text-xs sm:text-sm font-bold text-black dark:text-white">
                  {emailAddress}
                </span>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="p-2 rounded-lg text-black dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Copy to clipboard"
            >
              {copiedEmail ? (
                <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                  <FiCheck className="w-4 h-4" /> Copied
                </span>
              ) : (
                <FiCopy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Phone Card */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-black dark:text-white border border-slate-300 dark:border-slate-700 flex items-center justify-center">
              <FiPhone className="w-5 h-5 text-cyan-500" />
            </div>
            <div>
              <span className="text-xs text-black dark:text-white font-mono block font-semibold">
                Direct Phone
              </span>
              <span className="text-xs sm:text-sm font-bold text-black dark:text-white">
                {phoneNumber}
              </span>
            </div>
          </div>

          {/* Location Card */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-black dark:text-white border border-slate-300 dark:border-slate-700 flex items-center justify-center">
              <FiMapPin className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <span className="text-xs text-black dark:text-white font-mono block font-semibold">
                Location & Timezone
              </span>
              <span className="text-xs sm:text-sm font-bold text-black dark:text-white">
                Accra, Ghana (GMT +0) · Open to Remote
              </span>
            </div>
          </div>

          {/* Connect on Socials */}
          <div className="pt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-black dark:text-white font-mono mb-3">
              Social Profiles & Channels
            </p>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/nicholas-philip"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm hover:border-black dark:hover:border-white flex items-center gap-2.5 text-xs sm:text-sm font-bold text-black dark:text-white transition-all"
              >
                <FiGithub className="w-4 h-4 text-indigo-500" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/philiplodonu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm hover:border-black dark:hover:border-white flex items-center gap-2.5 text-xs sm:text-sm font-bold text-black dark:text-white transition-all"
              >
                <FiLinkedin className="w-4 h-4 text-[#0077B5]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 p-4 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-lg"
        >
          <h3 className="text-2xl font-black text-black dark:text-white font-heading mb-2">
            Send a Direct Message
          </h3>
          <p className="text-xs sm:text-sm text-black dark:text-white mb-6 font-medium">
            Fill out the form below and it will be delivered directly to my inbox.
          </p>

          <form onSubmit={onSubmit} ref={form} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-black dark:text-white mb-1.5">
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Sarah Mensah"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-black dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-black dark:text-white mb-1.5">
                  Your Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. sarah@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-black dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-black dark:text-white mb-1.5">
                Subject / Project Inquiries
              </label>
              <input
                type="text"
                name="subject"
                placeholder="e.g. Full-Stack / Frontend Opportunity or Project Discussion"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-black dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-black dark:text-white mb-1.5">
                Message <span className="text-rose-500">*</span>
              </label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Tell me about your project, timeline, or open role..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-black dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all resize-y"
              ></textarea>
            </div>

            {/* Status Feedback Alerts */}
            {status === "success" && (
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 flex items-center gap-2.5 font-semibold">
                <FiCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{resultMessage}</span>
              </div>
            )}

            {status === "error" && (
              <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-xs sm:text-sm text-rose-950 dark:text-rose-200 font-semibold">
                {resultMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-xs sm:text-sm bg-black text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200 border border-black dark:border-white active:scale-95 disabled:opacity-60 transition-all shadow-sm flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <FiSend className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
