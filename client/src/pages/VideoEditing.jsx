import React from "react";
import { motion } from "framer-motion";
import { Code, Monitor, Server, Database, Zap, Rocket, Layers } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1605902711622-cfb43c443ed7?auto=format&fit=crop&w=1400&q=80"; // Video editing hero placeholder
const projectImgs = [
  "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1590608897129-79f63f1d8f2a?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1555949963-aa79dcee981b?auto=format&fit=crop&w=1200&q=80",
];

const techStacks = [
  { name: "Premiere Pro", short: "Professional video editing", icon: <Code size={28} /> },
  { name: "After Effects", short: "Motion graphics & VFX", icon: <Zap size={28} /> },
  { name: "Final Cut Pro", short: "Mac optimized video editing", icon: <Monitor size={28} /> },
  { name: "DaVinci Resolve", short: "Color grading & editing", icon: <Server size={28} /> },
  { name: "Audition", short: "Audio editing & mixing", icon: <Database size={28} /> },
  { name: "OBS Studio", short: "Screen recording & streaming", icon: <Layers size={28} /> },
];

const processSteps = [
  { title: "Planning", text: "We understand your goal, audience, and desired style." },
  { title: "Storyboarding", text: "Script & storyboard creation to visualize the final output." },
  { title: "Editing", text: "Cutting, arranging clips, adding effects and transitions." },
  { title: "Color Grading", text: "Enhancing colors and visual tone for professional look." },
  { title: "Post-Production", text: "Final audio, rendering, and format delivery." },
];

export default function VideoEditing() {
  return (
    <div className="font-poppins antialiased text-gray-900" style={{ background: "linear-gradient(135deg, #f0f3ec 0%, #d4e0c0 50%, #6c845d 100%)" }}>

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
             • Video Editing
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Professional video editing for <span className="text-[#6c845d]">Marketing</span>, <span className="text-[#6c845d]">Social Media</span> & <span className="text-[#6c845d]">Tutorials</span>
            </h1>

            <p className="text-gray-700 max-w-xl">
              We create engaging videos — marketing videos, social media clips, tutorials, explainers, color grading, and post-production. Fast, professional, and crafted to boost your brand.
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
                See Work
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
              alt="video editing hero"
              className="w-full h-[420px] object-cover"
            />
          </motion.div>
        </div>
      </header>

      {/* WHAT WE BUILD */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What we create</h2>
        <p className="text-gray-700 max-w-3xl mb-12">
          Engaging content for all platforms — we handle the full video production lifecycle.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Marketing Videos", desc: "Promotional & brand campaigns", icon: <Code size={24}/> },
            { title: "Social Media Clips", desc: "Short-form engaging content", icon: <Monitor size={24}/> },
            { title: "Tutorials & Explainers", desc: "Educational & clear messaging", icon: <Server size={24}/> },
            { title: "Color Grading & Post-Production", desc: "Professional polish", icon: <Zap size={24}/> },
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tools we use</h2>
          <p className="text-gray-700 max-w-3xl mb-12">
            Our workflow uses professional software for video editing, color grading, motion graphics, and audio polishing.
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

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our process — simple & transparent</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {processSteps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              className="bg-white/20 p-6 rounded-2xl border border-white/10 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-[#6c845d]/20 flex items-center justify-center text-[#6c845d] font-semibold mb-4">
                {i + 1}
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{s.title}</h4>
              <p className="text-sm text-gray-700">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section id="projects" className="bg-white/5 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Selected Work</h2>
          <p className="text-gray-700 mb-8">
            Examples of video projects — marketing, social media, tutorials, and post-production.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectImgs.map((src, idx) => (
              <motion.figure
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img src={src} alt={`project-${idx}`} className="w-full h-64 object-cover" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <h3 className="font-semibold">Project {idx + 1}</h3>
                  <p className="text-sm text-gray-200">Video Editing & Post-Production</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <footer id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-[#6c845d]/20 p-8 rounded-3xl text-center backdrop-blur-md shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Ready to create?</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Share your idea — we'll propose a production plan with milestones and a realistic budget.
          </p>
          <a
            href="mailto:contact@musitechhub.com?subject=Video%20Editing%20Project"
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