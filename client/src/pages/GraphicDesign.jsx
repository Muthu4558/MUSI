import React from "react";
import { motion } from "framer-motion";
import { Code, Monitor, Server, Database, Zap, Rocket, Layers } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1581091012184-ecff0fce7d88?auto=format&fit=crop&w=1400&q=80"; // graphic design hero
const projectImgs = [
  "https://images.unsplash.com/photo-1581091012184-ecff0fce7d88?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1612831818020-5eae9d2f6f69?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80",
];

const techStacks = [
  { name: "Photoshop", short: "Professional photo editing & design", icon: <Code size={28} /> },
  { name: "Illustrator", short: "Vector graphics & logos", icon: <Monitor size={28} /> },
  { name: "Figma", short: "UI/UX prototyping & branding", icon: <Zap size={28} /> },
  { name: "Canva", short: "Quick designs & templates", icon: <Server size={28} /> },
];

const processSteps = [
  { title: "Discover", text: "We start with a brief — your brand, style, target audience, and requirements." },
  { title: "Design", text: "Logo, branding, brochures, posters, and visual assets created." },
  { title: "Feedback", text: "Iterative review to ensure the design matches your vision." },
  { title: "Deliver", text: "Final files in multiple formats: print-ready and digital." },
  { title: "Support", text: "Guidance on branding, usage, and future updates." },
];

export default function GraphicDesign() {
  return (
    <div className="mt-24 font-poppins antialiased text-gray-900" style={{ background: "linear-gradient(135deg, #f0f3ec 0%, #d4e0c0 50%, #6c845d 100%)" }}>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-20 items-center">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="inline-block px-3 py-1 rounded-full bg-[#6c845d] text-white font-semibold text-sm">
              • Graphic Design
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Stunning visuals & branding for your business — <span className="text-[#6c845d]">Logos</span>, <span className="text-[#6c845d]">Brochures</span>, <span className="text-[#6c845d]">Posters</span> and more
            </h1>

            <p className="text-gray-700 max-w-xl">
              We create eye-catching designs that reflect your brand identity — logos, print designs, brochures, posters, and complete branding packages. Fast, creative, and tailored to your audience.
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

          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={heroImg}
              alt="graphic design hero"
              className="w-full h-[420px] object-cover"
            />
          </motion.div>
        </div>
      </header>

      {/* WHAT WE BUILD */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What we <span className="text-[#6c845d]">design</span></h2>
        <p className="text-gray-700 max-w-3xl mb-12">
          From logos to print materials — we provide creative solutions for all your branding needs.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Logo Design", desc: "Brand identity & memorable logos", icon: <Code size={24}/> },
            { title: "Branding", desc: "Complete visual identity systems", icon: <Monitor size={24}/> },
            { title: "Print Design", desc: "Brochures, flyers, posters", icon: <Server size={24}/> },
            { title: "Marketing Collateral", desc: "Business cards, banners, etc.", icon: <Zap size={24}/> },
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

      {/* TOOLS */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tools <span className="text-[#6c845d]">we use</span></h2>
          <p className="text-gray-700 max-w-3xl mb-12">
            Professional software for designing high-quality visuals and branding assets.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
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
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Ready to design?</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Share your vision — we'll craft a unique visual identity for your brand.
          </p>
          <a
            href="mailto:contact@musitechhub.com?subject=Graphic%20Design%20Project"
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