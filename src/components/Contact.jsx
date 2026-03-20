"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "yedlasneha3@gmail.com",
    href: "mailto:yedlasneha3@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sneha-yedla",
    href: "https://www.linkedin.com/in/sneha-yedla",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Snehayedla",
    href: "https://github.com/Snehayedla",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8121860140",
    href: "tel:+918121860140",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, Telangana, India",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d18] to-[#0a0a0f]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-indigo-600/8 rounded-full blur-3xl" />

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
            Let's Talk
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get in{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          <p className="text-white/40 text-base mt-4 max-w-lg">
            I'm actively looking for full-time opportunities as a Java Full Stack Developer.
            Feel free to reach out — I'd love to connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/[0.07] rounded-xl hover:border-indigo-500/25 hover:bg-indigo-500/5 transition-all duration-200 group"
              >
                <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-lg flex-shrink-0">
                  <Icon size={16} className="text-indigo-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-white/80 text-sm font-medium hover:text-indigo-400 transition-colors truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-white/80 text-sm font-medium">{value}</p>
                  )}
                </div>
                {href && href.startsWith("http") && (
                  <ArrowUpRight size={14} className="text-white/20 group-hover:text-indigo-400 transition-colors flex-shrink-0" />
                )}
              </div>
            ))}

            {/* Availability badge */}
            <div className="mt-6 p-5 bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Available for Hire</span>
              </div>
              <p className="text-white/50 text-sm">
                Open to full-time roles in Java Full Stack Development. Based in Hyderabad — open to remote & relocation.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Job opportunity / Collaboration / Hello"
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all"
                />
              </div>

              <div>
                <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  status === "sent"
                    ? "bg-green-600 text-white cursor-default"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-lg hover:shadow-indigo-500/25"
                }`}
              >
                {status === "idle" && <><Send size={15} /> Send Message</>}
                {status === "sending" && (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                )}
                {status === "sent" && "Message Sent ✓"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
