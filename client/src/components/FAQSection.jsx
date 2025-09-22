import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle } from "lucide-react";
import Illustration from "../assets/faq-home.png";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide Web Development, UI/UX Design, Graphic Design, Data Analytics, and Video Editing services tailored to your business needs.",
  },
  {
    question: "Which technologies do you use for web development?",
    answer:
      "Our web development team uses HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB (MERN Stack) to build scalable and responsive web applications.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on complexity. Small projects typically take 2-4 weeks, while larger projects may take 6-12 weeks.",
  },
  {
    question: "Do you offer support after project delivery?",
    answer:
      "Yes! We provide 24x7 support for all our projects. You can contact us anytime for maintenance, updates, or troubleshooting.",
  },
  {
    question: "How can I get a quote?",
    answer:
      "You can get a free consultation and quote by contacting us through our contact form or directly via phone/email.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Side - FAQs */}
        <div className="lg:w-1/2 flex flex-col gap-5">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked <span className="text-[#6c845d]">Questions</span>
          </motion.h2>

          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#e6f0d6] transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle  className="text-[#6c845d]" size={24} />
                  <span className="font-medium text-gray-900">{faq.question}</span>
                </div>
                <motion.span
                  animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-700"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-gray-700 text-base mt-2"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Right Side - Illustration */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={Illustration}
            alt="FAQ Illustration"
            className="w-full max-w-lg object-contain"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;