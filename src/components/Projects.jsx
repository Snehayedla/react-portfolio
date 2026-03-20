"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fruits Management E-Commerce Platform",
    description:
      "Full-stack e-commerce application built during internship at 10XScale.ai. Engineered Spring Boot RESTful APIs and MySQL schema for product catalog, cart, and order management. Implemented JWT authentication with RBAC for customer and admin roles, and containerized with Docker for CI/CD deployment.",
    tags: ["Java", "Spring Boot", "Next.js", "MySQL", "JWT", "Docker", "REST API", "Tailwind CSS"],
    github: "https://github.com/Snehayedla/Fruits-Management-E-Commerce-Web-Application",
    live: null,
    badge: "Internship Project",
    badgeColor: "indigo",
    emoji: "🛒",
    highlight: true,
  },
  {
    title: "Real-Time Student Collaboration & Task Management",
    description:
      "Collaborative workspace app using Spring Boot WebSocket and React.js for live task assignment, progress tracking, and team communication. Implemented RESTful CRUD APIs with MongoDB, CI/CD via GitHub Actions, and deployed on AWS EC2.",
    tags: ["React.js", "Spring Boot", "MongoDB", "WebSocket", "AWS EC2", "GitHub Actions", "REST API"],
    github: "https://github.com/Snehayedla/Real-Time-Student-Collaboration-Task-Management-Platform-",
    live: null,
    badge: "Full Stack",
    badgeColor: "violet",
    emoji: "🤝",
    highlight: false,
  },
  {
    title: "Digital Forensic WhatsApp Chat Analysis (NLP)",
    description:
      "Automated NLP pipeline to extract sentiment, behavioural patterns, and keyword frequency from WhatsApp exports. Designed statistical models to detect emotional signals and suspicious communication anomalies with data-driven visualizations for forensic reporting.",
    tags: ["Python", "NLTK", "Pandas", "Sentiment Analysis", "Matplotlib", "Data Visualization"],
    github: "https://github.com/Snehayedla/Digital-Forensic-WhatsApp-Chat-Analysis-using-NLP",
    live: null,
    badge: "NLP / Data Science",
    badgeColor: "purple",
    emoji: "🔍",
    highlight: false,
  },
  {
    title: "Healthcare Visit Analytics & Doctor Scheduling",
    description:
      "Data analytics system processing hospital visit records to identify patient flow patterns, peak consultation hours, and resource bottlenecks. Built interactive Power BI dashboards and statistical models for optimized doctor scheduling and patient prioritization.",
    tags: ["Python", "Pandas", "NumPy", "Power BI", "Data Analysis", "Statistical Modeling"],
    github: "https://github.com/Snehayedla/Doctor-visit-analysis",
    live: null,
    badge: "Data Analytics",
    badgeColor: "blue",
    emoji: "🏥",
    highlight: false,
  },
];

const badgeColors = {
  indigo: "bg-indigo-500/15 border-indigo-500/30 text-indigo-300",
  violet: "bg-violet-500/15 border-violet-500/30 text-violet-300",
  purple: "bg-purple-500/15 border-purple-500/30 text-purple-300",
  blue: "bg-blue-500/15 border-blue-500/30 text-blue-300",
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I've Built
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                project.highlight
                  ? "bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border-indigo-500/30 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-500/10"
                  : "bg-white/[0.03] border-white/[0.07] hover:border-indigo-500/25 hover:bg-white/[0.05]"
              }`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{project.emoji}</span>
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-full border ${badgeColors[project.badgeColor]}`}
                  >
                    {project.badge}
                  </span>
                </div>
                <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View code on GitHub"
                    className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
                  >
                    <Github size={15} className="text-white/70" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      className="p-2 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 rounded-lg transition-all"
                    >
                      <ExternalLink size={15} className="text-indigo-400" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-base sm:text-lg mb-3 leading-snug group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-white/50 text-xs hover:text-white/80 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Code link */}
              <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
                >
                  <Github size={14} />
                  View Code
                  <ArrowUpRight size={13} />
                </a>
                {project.highlight && (
                  <span className="text-xs text-white/30 italic">Internship @ 10XScale.ai</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/Snehayedla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-indigo-500/40 text-white/60 hover:text-white rounded-xl text-sm font-medium transition-all duration-200 hover:bg-indigo-500/5"
          >
            <Github size={16} />
            See all projects on GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
