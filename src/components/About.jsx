"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, MapPin } from "lucide-react";

const stats = [
  { label: "Internship", value: "10XScale.ai", sub: "Java Full Stack" },
  { label: "Projects", value: "4+", sub: "Full Stack & Data" },
  { label: "GPA", value: "7.4", sub: "B.Tech CSE" },
  { label: "Location", value: "Hyd", sub: "Telangana, India" },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "B.Tech — CSE (Data Science)",
    sub: "Sumathi Reddy Institute of Technology for Women · 2021–2025",
  },
  {
    icon: Briefcase,
    title: "Java Full Stack Developer Intern",
    sub: "10XScale.ai · Dec 2025 – Feb 2026",
  },
  {
    icon: Award,
    title: "IBM Certified — Data Science (Python)",
    sub: "+ Python Programming & Information Security certifications",
  },
  {
    icon: MapPin,
    title: "Hyderabad, Telangana",
    sub: "Open to remote & on-site opportunities",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d18] to-[#0a0a0f]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Who I Am
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              I'm a <span className="text-white font-semibold">Java Full Stack Developer</span> and
              recent B.Tech graduate in Computer Science (Data Science) from Hyderabad. I enjoy
              building end-to-end web applications that are fast, scalable, and user-friendly.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              During my internship at <span className="text-indigo-400 font-medium">10XScale.ai</span>,
              I engineered a full-stack e-commerce platform using Spring Boot, Next.js, and MySQL —
              handling everything from JWT authentication and RBAC to Docker containerization and
              CI/CD deployment.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              Beyond web development, I've worked on NLP-based forensic analysis and healthcare
              data analytics using Python, Pandas, and Power BI. I'm a fast learner who thrives
              in collaborative environments and loves turning complex problems into clean solutions.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              Outside tech, I'm a <span className="text-white font-medium">national-level Dodgeball player</span> representing
              Telangana — which keeps me disciplined, team-oriented, and competitive.
            </p>

            {/* Highlights */}
            <div className="pt-4 space-y-3">
              {highlights.map(({ icon: Icon, title, sub }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="mt-0.5 p-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-lg flex-shrink-0">
                    <Icon size={14} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{title}</p>
                    <p className="text-white/40 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats + Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ label, value, sub }) => (
                <div
                  key={label}
                  className="p-5 bg-white/[0.03] border border-white/[0.07] rounded-2xl hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300 group"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {value}
                  </p>
                  <p className="text-white/60 text-xs mt-1">{sub}</p>
                  <p className="text-white/30 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="p-6 bg-white/[0.03] border border-white/[0.07] rounded-2xl">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Adaptive Learner", "Leadership", "Effective Communication", "Problem Solving", "Team Collaboration", "Fast Learner"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border border-indigo-500/20 rounded-2xl">
              <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                Key Achievement
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Led Data Science & ML bootcamps for{" "}
                <span className="text-white font-semibold">100+ students</span>, mentoring Python
                and SQL fundamentals — fostering a collaborative technical learning environment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
