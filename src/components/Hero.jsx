"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import Image from "next/image";

const roles = [
  "Java Full Stack Developer",
  "Spring Boot Engineer",
  "React.js Developer",
  "Data Science Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (typing) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, typing, roleIndex]);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto w-full"
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                Sneha Yedla
              </span>
            </motion.h1>

            <motion.div variants={item} className="h-10 mb-6">
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/70">
                <span className="text-indigo-400">{displayed}</span>
                <span className="typing-cursor text-indigo-400 ml-0.5">|</span>
              </p>
            </motion.div>

            <motion.p
              variants={item}
              className="text-white/50 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              B.Tech CSE (Data Science) graduate from Hyderabad. I build scalable full-stack
              applications with Java & Spring Boot on the backend and React/Next.js on the
              frontend — with a strong foundation in data analytics and NLP.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
            >
              <a
                href="#projects"
                className="px-7 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <a
                href="/SnehaY_Resume_I.pdf"
                download
                className="flex items-center justify-center gap-2 px-7 py-3 border border-indigo-500/30 hover:border-indigo-400/60 text-white/80 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:bg-indigo-500/10 hover:-translate-y-0.5"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}

          </div>

          {/* Right: Profile Photo */}
          <motion.div
            variants={item}
            className="flex-shrink-0 flex justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-500 rounded-full blur-xl opacity-30 animate-pulse" />
              {/* Border ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-500 rounded-full opacity-60" />
              {/* Photo */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-[#0a0a0f]">
                <Image
                  src="/sneha-profile.jpg"
                  alt="Sneha Yedla — Java Full Stack Developer"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -right-3 bg-[#12121a] border border-indigo-500/30 rounded-xl px-3 py-2 shadow-xl"
              >
                <p className="text-xs text-white/60">Experience</p>
                <p className="text-sm font-bold text-indigo-400">Intern @ 10XScale.ai</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="text-white/30" size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
