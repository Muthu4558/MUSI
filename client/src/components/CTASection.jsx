import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PhoneCall, Mail, Linkedin, Twitter, Instagram, Send } from "lucide-react";

const ContactCTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-white/20 top-[-50px] left-[-50px] filter blur-3xl"
        animate={{ rotate: [0, 360, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-white/10 bottom-[-80px] right-[-80px] filter blur-3xl"
        animate={{ rotate: [0, -360, 0] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 flex flex-col lg:flex-row gap-16 relative z-10">
        {/* Left: CTA */}
        <div className="lg:w-1/2 flex flex-col items-start justify-center gap-8">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-black">Ready to Elevate</span><span className="text-[#6c845d]">Your Business?</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Book a free consultation with our experts and discover how we can take your ideas to the next level.
          </motion.p>

          <motion.a
            href="tel:6385931500"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(255,255,255,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-10 py-4 bg-white text-[#6c845d] font-bold rounded-3xl flex items-center gap-3 shadow-lg hover:bg-white/90 transition-all duration-300 text-lg"
          >
            <PhoneCall size={24} /> Free Consultation
          </motion.a>
        </div>

        {/* Right: Contact Form + Info */}
        <div className="lg:w-1/2 bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-xl flex flex-col gap-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">Get in Touch <Send size={20} /></h3>

          {/* Contact Form */}
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6c845d] outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6c845d] outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#6c845d] outline-none"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 bg-[#6c845d] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>

          {/* Contact Info */}
          <div className="mt-6 flex flex-col gap-3 text-gray-800">
            <p className="flex items-center gap-2">
              <Mail size={20} /> contact@yourdomain.com
            </p>
            <p className="flex items-center gap-2">
              <PhoneCall size={20} /> +91 6385 931 500
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="text-gray-700 hover:text-[#6c845d]"><Linkedin size={24} /></a>
              <a href="#" className="text-gray-700 hover:text-[#6c845d]"><Twitter size={24} /></a>
              <a href="#" className="text-gray-700 hover:text-[#6c845d]"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ContactCTASection;