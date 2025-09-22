import { motion } from "framer-motion";
import { CreditCard, Clock, Lightbulb, Rocket } from "lucide-react";

const usps = [
  { title: "Affordable Pricing", icon: <CreditCard size={32} />, desc: "High-quality solutions without breaking the bank." },
  { title: "Reliable Delivery", icon: <Clock size={32} />, desc: "Timely delivery for every project, every time." },
  { title: "Innovative Solutions", icon: <Lightbulb size={32} />, desc: "Creative and effective solutions for complex problems." },
  { title: "Scalable Growth", icon: <Rocket size={32} />, desc: "Built to scale as your business grows." },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background abstract shapes */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-[#6c845d]/20 top-[-50px] left-[-50px]"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-[#a3b897]/30 bottom-[-40px] right-[-40px]"
        animate={{ rotate: [360, 0] }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-24">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-extrabold text-center text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why <span className="text-[#6c845d]">Choose Us</span>
        </motion.h2>

        {/* USP Cards Staggered Layout */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {usps.map((usp, idx) => (
            <motion.div
              key={idx}
              className={`relative bg-white/20 backdrop-blur-md rounded-3xl p-10 w-72 flex flex-col items-center text-center shadow-2xl cursor-pointer
                ${idx % 2 === 0 ? "md:translate-y-0" : "md:-translate-y-12"}`}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ scale: 1.1, y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.25)" }}
            >
              {/* Gradient icon with subtle float */}
              <motion.div
                className="w-24 h-24 flex items-center justify-center rounded-full mb-6 text-white shadow-xl"
                style={{ background: "linear-gradient(135deg, #6c845d, #a3b897)" }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                {usp.icon}
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{usp.title}</h3>
              <p className="text-gray-800">{usp.desc}</p>

              {/* Floating accent circles */}
              <motion.div
                className="absolute w-12 h-12 rounded-full bg-[#6c845d]/30 top-[-10px] left-[-10px]"
                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-16 h-16 rounded-full bg-[#a3b897]/30 bottom-[-10px] right-[-10px]"
                animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;