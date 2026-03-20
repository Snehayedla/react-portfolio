"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/Snehayedla", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sneha-yedla", label: "LinkedIn" },
  { icon: Mail, href: "mailto:yedlasneha3@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Sneha Yedla
            </p>
            <p className="text-white/30 text-xs mt-0.5">Java Full Stack Developer · Hyderabad</p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-5">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/40 hover:text-white/80 text-sm transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 bg-white/[0.04] hover:bg-indigo-500/15 border border-white/[0.07] hover:border-indigo-500/30 rounded-lg text-white/40 hover:text-indigo-400 transition-all"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 pt-6 border-t border-white/[0.05] text-center">
          <p className="text-white/25 text-xs flex items-center justify-center gap-1.5">
            © {new Date().getFullYear()} Sneha Yedla. Built with
            <Heart size={11} className="text-red-400/60 fill-red-400/60" />
            using Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
