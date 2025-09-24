import React from "react";
import { motion } from "framer-motion";
import { Code, Monitor, Server, Database, Zap, Rocket, Layers } from "lucide-react";
import Web from "../assets/Web/web-development.png"

const heroImg = Web;
const projectImgs = [
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
];

const techStacks = [
  { name: "HTML5", short: "Semantic, accessible markup", icon: <Monitor size={28} /> },
  { name: "CSS3 / Tailwind", short: "Responsive, utility-first styling + animations", icon: <Zap size={28} /> },
  { name: "JavaScript / React", short: "Component-driven UI, SPA, hydration & SSR options", icon: <Code size={28} /> },
  { name: "Node.js + Express", short: "Lightweight, fast backend & REST/GraphQL APIs", icon: <Server size={28} /> },
  { name: "MongoDB", short: "Flexible NoSQL document store (MERN default)", icon: <Database size={28} /> },
  { name: "Realtime & Scaling", short: "Socket.io, workers, caching, horizontal scale", icon: <Layers size={28} /> },
];

const processSteps = [
  { title: "Discover", text: "We start with a short workshop — goals, audience, features, and timeline." },
  { title: "Design", text: "Wireframes → UI mockups → prototype (Figma). Usability first." },
  { title: "Develop", text: "Pixel-perfect frontend, robust backend, tests and CI." },
  { title: "Deploy", text: "Deploy to Vercel/Netlify + hosted API (Heroku/Render/DigitalOcean), add CDN." },
  { title: "Maintain", text: "Monitoring, security updates, and iterative improvements." },
];

export default function WebDevelopment() {
  return (
    <div className="mt-24 font-poppins antialiased text-gray-900" style={{ background: "linear-gradient(135deg, #f0f3ec 0%, #d4e0c0 50%, #6c845d 100%)" }}>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-20 items-center">

          {/* Left Section */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="inline-block px-3 py-1 rounded-full bg-[#6c845d] text-white font-semibold text-sm">
              • Web Development
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Professional web apps built with{" "}
              <span className="text-[#6c845d]">HTML, CSS, JS</span> and the{" "}
              <span className="text-[#6c845d]">MERN</span> stack
            </h1>

            <p className="text-gray-700 max-w-xl">
              We design and develop performant, accessible, and scalable web
              products — landing pages, dashboards, e-commerce, progressive web
              apps and admin panels. Low-cost, fast delivery and a youthful team
              that cares about your growth.
            </p>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#6c845d] text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transform transition"
              >
                Start a Project
                <Rocket size={16} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 border border-[#6c845d] text-gray-900 px-5 py-3 hover:scale-105 rounded-full transition"
              >
                See Projects
              </a>
            </div>
          </motion.div>

          {/* Right Section (Image) */}
          <div className="relative flex justify-center items-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0],
                x: [0, 10, -10, 0],
                y: [0, -10, 10, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-[#6c845d] to-[#d4e0c0] rounded-full blur-2xl opacity-70"
            ></motion.div>

            <motion.img
              src={heroImg}
              alt="Digital Solutions"
              className="relative w-96 h-96 md:w-96 md:h-96 object-contain z-10 drop-shadow-xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

        </div>
      </header>


      {/* WHAT WE BUILD */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What we <span className="text-[#6c845d]">build</span></h2>
        <p className="text-gray-700 max-w-3xl mb-12">
          From marketing landing pages to full-featured web apps — we cover the full product lifecycle.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Landing Pages", desc: "Fast, conversion-first", icon: <Code size={24} /> },
            { title: "SaaS Dashboards", desc: "Multi-tenant, secure", icon: <Monitor size={24} /> },
            { title: "E-commerce", desc: "Fast checkout & analytics", icon: <Server size={24} /> },
            { title: "PWA / Mobile Web", desc: "Offline & installable", icon: <Zap size={24} /> },
          ].map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-white/20 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="p-4 rounded-xl bg-[#6c845d] text-white inline-flex items-center justify-center w-12 h-12">
                {card.icon}
              </div>
              <h3 className="text-gray-900 font-semibold text-lg relative group cursor-pointer">
                {card.title}
                <span className="block h-0.5 w-0 bg-[#6c845d] transition-all group-hover:w-full mt-1"></span>
              </h3>
              <p className="text-gray-700 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Technologies <span className="text-[#6c845d]">we use</span></h2>
          <p className="text-gray-700 max-w-3xl mb-12">
            We pick pragmatic tech: keep the stack lean, standard and easy to maintain.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {techStacks.map((t) => (
              <motion.div
                key={t.name}
                whileHover={{ scale: 1.08, rotate: 2 }}
                className="bg-white/20 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex flex-col items-center gap-3 shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#6c845d] text-white text-2xl">
                  {t.icon}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm text-center">{t.name}</h4>
                <p className="text-gray-700 text-xs text-center">{t.short}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <footer id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-[#6c845d]/20 p-8 rounded-3xl text-center backdrop-blur-md shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Ready to build?</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Tell us your idea — we'll propose a lean plan with milestones and a realistic budget.
          </p>
          <a
            href="mailto:contact@musitechhub.com?subject=Web%20Development%20Project"
            className="inline-flex items-center gap-3 bg-[#6c845d] text-white px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition"
          >
            Email Us
            <Rocket size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}