"use client";
import { motion } from "framer-motion";
import { Briefcase, CalendarDays } from "lucide-react";

const experiences = [
  {
    role: "Java Full Stack Developer with AI Intern",
    company: "10XScale.ai",
    period: "Dec 2025 – Feb 2026",
    type: "Internship",
    points: [
      "Developed a full-stack Fruits Management E-Commerce Platform — engineered Spring Boot RESTful APIs and MySQL schema for product catalog, cart operations, and end-to-end order management.",
      "Implemented JWT-based authentication and RBAC for customer and admin roles, enabling secure product management, inventory updates, and order tracking via a dedicated admin dashboard.",
      "Built dynamic, responsive Next.js frontend interfaces for product browsing, cart, and checkout — integrating with Spring Boot backend and optimizing API response times through structured query design.",
      "Managed the complete SDLC — from system architecture and database design to Docker containerization and CI/CD deployment.",
    ],
    tech: ["Java", "Spring Boot", "Next.js", "MySQL", "JWT", "Docker", "CI/CD", "REST API"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

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
            Work History
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Internship{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-transparent hidden sm:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative sm:pl-16 mb-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-4 h-4 bg-indigo-500 rounded-full border-4 border-[#0a0a0f] hidden sm:block shadow-lg shadow-indigo-500/40" />

              <div className="p-6 sm:p-8 bg-gradient-to-br from-indigo-500/8 to-purple-500/5 border border-indigo-500/20 rounded-2xl hover:border-indigo-500/35 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={15} className="text-indigo-400" />
                      <h3 className="text-white font-bold text-lg">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="text-indigo-400 font-semibold text-base">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                    <span className="flex items-center gap-1.5 text-white/40 text-sm">
                      <CalendarDays size={13} />
                      {exp.period}
                    </span>
                    <span className="px-2.5 py-1 bg-indigo-500/15 border border-indigo-500/25 rounded-full text-indigo-300 text-xs font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-3 mb-5">
                  {exp.points.map((point, pi) => (
                    <li key={pi} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-white/50 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
