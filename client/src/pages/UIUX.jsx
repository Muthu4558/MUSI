import React from "react";
import { motion } from "framer-motion";
import { Code, Monitor, Server, Database, Zap, Rocket, Layers } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1526244434298-88fcbcb066b5?auto=format&fit=crop&w=1400&q=80";

const uiuxServices = [
    { title: "User-Centered Design", desc: "Design focused on user needs and behaviors", icon: <Monitor size={24} /> },
    { title: "Wireframes & Prototypes", desc: "Blueprints and interactive prototypes for testing", icon: <Code size={24} /> },
    { title: "Interactive UI", desc: "Engaging interfaces with micro-interactions", icon: <Zap size={24} /> },
    { title: "Cross-Platform Consistency", desc: "Seamless experience across devices", icon: <Server size={24} /> },
    { title: "High Conversion Interfaces", desc: "Optimized for engagement and conversion", icon: <Layers size={24} /> },
];

const uiuxTools = [
    { name: "Figma", short: "Collaborative UI design & prototyping", icon: <Monitor size={28} /> },
    { name: "Adobe XD", short: "Wireframes, prototypes, and interactive designs", icon: <Zap size={28} /> },
    { name: "Sketch", short: "Vector-based UI design tool", icon: <Code size={28} /> },
    { name: "InVision", short: "Prototyping and collaboration platform", icon: <Layers size={28} /> },
];

export default function UIUXDevelopment() {
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
                            • UI/UX Design
                        </p>

                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                            Modern UI/UX solutions with <span className="text-[#6c845d]">User-Centered Design</span> and <span className="text-[#6c845d]">Interactive Prototypes</span>
                        </h1>

                        <p className="text-gray-700 max-w-xl">
                            We craft intuitive and engaging digital experiences — from wireframes and interactive prototypes to polished high-conversion interfaces. Our designs are optimized for cross-platform consistency and user delight.
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
                                href="#services"
                                className="inline-flex items-center gap-2 border border-[#6c845d] text-gray-900 px-5 py-3 hover:scale-105 rounded-full transition"
                            >
                                See Services
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
                            alt="UI/UX design hero"
                            className="w-full h-[420px] object-cover"
                        />
                    </motion.div>
                </div>
            </header>

            {/* UI/UX SERVICES */}
            <section id="services" className="max-w-7xl mx-auto px-6 py-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What we build</h2>
                <p className="text-gray-700 max-w-3xl mb-12">
                    From wireframes to interactive prototypes, we cover the full UI/UX design lifecycle.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {uiuxServices.map((service) => (
                        <motion.div
                            key={service.title}
                            whileHover={{ scale: 1.05, y: -4 }}
                            className="bg-white/20 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-lg hover:shadow-xl transition duration-300"
                        >
                            <div className="p-4 rounded-xl bg-[#6c845d] text-white inline-flex items-center justify-center w-12 h-12">
                                {service.icon}
                            </div>
                            <h3 className="text-gray-900 font-semibold text-lg relative group cursor-pointer">
                                {service.title}
                                <span className="block h-0.5 w-0 bg-[#6c845d] transition-all group-hover:w-full mt-1"></span>
                            </h3>
                            <p className="text-gray-700 text-sm">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* TOOLS */}
            <section className="py-14">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tools we use</h2>
                    <p className="text-gray-700 max-w-3xl mb-12">
                        We leverage industry-standard design tools for collaboration and prototyping.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                        {uiuxTools.map((tool) => (
                            <motion.div
                                key={tool.name}
                                whileHover={{ scale: 1.08, rotate: 2 }}
                                className="bg-white/20 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex flex-col items-center gap-3 shadow-md hover:shadow-xl transition duration-300"
                            >
                                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#6c845d] text-white text-2xl">
                                    {tool.icon}
                                </div>
                                <h4 className="font-semibold text-gray-900 text-sm text-center">{tool.name}</h4>
                                <p className="text-gray-700 text-xs text-center">{tool.short}</p>
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
                        Share your idea — we'll create user-centered designs and interactive prototypes tailored to your needs.
                    </p>
                    <a
                        href="mailto:contact@musitechhub.com?subject=UIUX%20Design%20Project"
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