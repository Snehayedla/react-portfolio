"use client";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    color: "indigo",
    skills: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 82 },
    ],
  },
  {
    category: "Frontend",
    color: "violet",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 82 },
      { name: "Tailwind CSS", level: 88 },
      { name: "HTML5 / CSS3", level: 90 },
    ],
  },
  {
    category: "Backend & APIs",
    color: "purple",
    skills: [
      { name: "Spring Boot", level: 88 },
      { name: "REST APIs", level: 87 },
      { name: "FastAPI", level: 72 },
      { name: "Microservices", level: 70 },
    ],
  },
  {
    category: "Databases",
    color: "blue",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 72 },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "cyan",
    skills: [
      { name: "Docker", level: 75 },
      { name: "AWS (EC2)", level: 68 },
      { name: "GitHub Actions", level: 72 },
      { name: "CI/CD", level: 70 },
    ],
  },
  {
    category: "Tools & Analytics",
    color: "teal",
    skills: [
      { name: "Power BI", level: 75 },
      { name: "Postman", level: 85 },
      { name: "Git & GitHub", level: 88 },
      { name: "Maven", level: 72 },
    ],
  },
];

const colorMap = {
  indigo: { bar: "bg-indigo-500", badge: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300", dot: "bg-indigo-400" },
  violet: { bar: "bg-violet-500", badge: "bg-violet-500/10 border-violet-500/20 text-violet-300", dot: "bg-violet-400" },
  purple: { bar: "bg-purple-500", badge: "bg-purple-500/10 border-purple-500/20 text-purple-300", dot: "bg-purple-400" },
  blue: { bar: "bg-blue-500", badge: "bg-blue-500/10 border-blue-500/20 text-blue-300", dot: "bg-blue-400" },
  cyan: { bar: "bg-cyan-500", badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300", dot: "bg-cyan-400" },
  teal: { bar: "bg-teal-500", badge: "bg-teal-500/10 border-teal-500/20 text-teal-300", dot: "bg-teal-400" },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d18] to-[#0a0a0f]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

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
            What I Work With
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => {
            const c = colorMap[group.color];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: gi * 0.08 }}
                viewport={{ once: true }}
                className="p-6 bg-white/[0.03] border border-white/[0.07] rounded-2xl hover:border-indigo-500/25 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                  <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-white/70 text-sm">{skill.name}</span>
                        <span className="text-white/30 text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className={`h-full ${c.bar} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech badges row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl"
        >
          <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Also familiar with</p>
          <div className="flex flex-wrap gap-2">
            {["WebSocket", "JWT", "RBAC", "Tableau", "NumPy", "Pandas", "NLTK", "Matplotlib", "VS Code", "IntelliJ IDEA"].map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full text-white/50 text-xs hover:text-white/80 hover:border-white/20 transition-all cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
