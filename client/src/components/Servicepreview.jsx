import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Palette, PenTool, BarChart3, Video } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaRegFileExcel } from "react-icons/fa";
import { SiMongodb, SiAdobephotoshop, SiFigma, SiAdobeillustrator, SiTableau, SiGoogleanalytics } from "react-icons/si";

const services = [
  {
    title: "Web Development",
    icon: <Code size={28} />,
    content: ["Online Payments", "24x7 Support", "Responsive Design", "SEO Friendly", "Unlimited Pages"],
    tools: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    title: "Data Analytics",
    icon: <BarChart3 size={28} />,
    content: ["Data Cleaning", "Dashboards & Reports", "Power BI", "KPIs & Metrics", "Business Insights"],
    tools: [
      { name: "Tableau", icon: <SiTableau /> },
      { name: "SQL", icon: <FaGitAlt /> }, // placeholder
      { name: "Python", icon: <FaPython /> },
      { name: "Excel", icon: <FaRegFileExcel /> },
      { name: "Looker Studio", icon: <SiGoogleanalytics /> },
    ],
  },
  {
    title: "Graphic Design",
    icon: <Palette size={28} />,
    content: ["Branding & Logo", "Flyers & Posters", "Social Media Graphics", "Illustrations", "Print & Digital"],
    tools: [
      { name: "Photoshop", icon: <SiAdobephotoshop /> },
      { name: "Illustrator", icon: <SiAdobeillustrator /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Canva", icon: <FaGitAlt /> }, // placeholder
    ],
  },
  {
    title: "UI / UX Design",
    icon: <PenTool size={28} />,
    content: ["User-Centered Design", "Wireframes & Prototypes", "Interactive UI", "Cross-Platform Consistency", "High Conversion Interfaces"],
    tools: [
      { name: "Figma", icon: <SiFigma /> },
      { name: "Adobe XD", icon: <SiAdobephotoshop /> }, // placeholder
      { name: "Sketch", icon: <FaGitAlt /> }, // placeholder
      { name: "InVision", icon: <FaGitAlt /> }, // placeholder
    ],
  },
  {
    title: "Video Editing",
    icon: <Video size={28} />,
    content: ["Marketing Videos", "Social Media Clips", "Tutorials & Explainers", "Color Grading", "Post-Production"],
    tools: [
      { name: "Premiere Pro", icon: <FaGitAlt /> }, // placeholder
      { name: "After Effects", icon: <FaGitAlt /> }, // placeholder
      { name: "Final Cut Pro", icon: <FaGitAlt /> }, // placeholder
      { name: "DaVinci Resolve", icon: <FaGitAlt /> }, // placeholder
    ],
  },
];

const ServicesTab = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleNavigate = (serviceTitle) => {
    const slugMap = {
      "Web Development": "web-development",
      "Data Analytics": "data-analyst",
      "Graphic Design": "graphic-design",
      "UI / UX Design": "ui-ux",
      "Video Editing": "video-editing",
    };
    const slug = slugMap[serviceTitle];
    navigate(`/${slug}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-[#6c845d]">Services</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Panel */}
          <div className="lg:w-1/2 relative bg-white/20 backdrop-blur-md rounded-3xl p-10 min-h-[400px] flex flex-col justify-center shadow-xl overflow-hidden">
            {/* Decorative Shapes */}
            <motion.div
              className="absolute w-24 h-24 rounded-full bg-[#6c845d]/10 top-10 left-10"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-32 h-32 rounded-full bg-[#a3b897]/10 bottom-12 right-12"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                  {services[activeIndex].icon} {services[activeIndex].title}
                </h3>
                <ul className="space-y-3 text-gray-800 text-lg mb-6">
                  {services[activeIndex].content.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <motion.span
                        className="w-3 h-3 bg-[#6c845d] rounded-full"
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tools / Technologies with Icons */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Tools & Technologies:</h4>
                  <div className="flex flex-wrap gap-3">
                    {services[activeIndex].tools.map((tool, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 px-3 py-1 bg-[#6c845d]/20 text-[#6c845d] rounded-full text-sm font-medium cursor-pointer"
                        whileHover={{ scale: 1.1, backgroundColor: "#6c845d", color: "#fff" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {tool.icon} {tool.name}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <motion.button
                  onClick={() => handleNavigate(services[activeIndex].title)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 px-6 py-3 bg-[#6c845d] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Tabs */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => handleNavigate(service.title)}
                className={`flex items-center gap-5 p-6 rounded-2xl cursor-pointer transition-all duration-500 ${activeIndex === index
                    ? "bg-[#6c845d] text-white shadow-2xl scale-105"
                    : "bg-white/80 text-gray-900 hover:bg-[#a3b897]/80 hover:scale-105"
                  }`}
              >
                <motion.div
                  className={`text-[#6c845d] ${activeIndex === index ? "text-white" : ""}`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h4 className="font-semibold text-lg">{service.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTab;