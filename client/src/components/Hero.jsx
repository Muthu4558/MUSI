import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import HeroImg from "../assets/hero-sec/hero-img.png";
import toast, { Toaster } from "react-hot-toast";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", company: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      toast.success(data.message || "Message sent successfully!");
      // setSuccess(data.message);
      setFormData({ name: "", email: "", message: "", company: "", phone: "", });
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-26 mt-24">
      {/* Toast Container */}
      <Toaster position="bottom-right" reverseOrder={false} />
      {/* Left Side Content */}
      <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Where Ideas <span className="text-[#6c845d]">Meet Technology</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto md:mx-0">
          Turning ideas into digital experiences that inspire. At MusiTechHub, we blend creativity, technology, and strategy to help your brand stand out.
        </p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-wrap justify-center md:justify-start gap-4">
          <button
            className="px-7 py-3 bg-[#6c845d] text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
            onClick={() => setIsModalOpen(true)}
          >
            Get Started
          </button>
        </motion.div>
      </motion.div>

      {/* Right Side Illustration */}
      <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 8, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-tr from-[#6c845d] to-[#d4e0c0] rounded-full blur-2xl opacity-70"
          ></motion.div>

          <motion.img
            src={HeroImg}
            alt="Digital Solutions"
            className="relative w-full h-full object-contain z-10 drop-shadow-xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-lg p-8 relative border border-gray-200" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3 }}>
              <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-2xl" onClick={() => setIsModalOpen(false)}>
                &times;
              </button>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Get <span className="text-[#6c845d]">Started</span></h2>
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#6c845d] shadow-sm" required />
                <input
                  type="text"
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#6c845d] shadow-sm"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Contact Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#6c845d] shadow-sm"
                />

                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#6c845d] shadow-sm" required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="border border-gray-300 rounded-xl px-5 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#6c845d] shadow-sm" required></textarea>
                <button type="submit" className="px-6 py-3 bg-gradient-to-r from-[#6c845d] to-[#d4e0c0] text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all">
                  {loading ? "Sending..." : "Submit"}
                </button>
                {success && <p className="text-green-600 mt-2 text-center">{success}</p>}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;