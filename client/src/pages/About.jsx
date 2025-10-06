import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import VisionImg from "../assets/vision.png"

const About = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
      navigate(path);
      window.scrollTo({ top:0, left:0, behavior: "smooth"})
  };

  return (
    <div className="text-gray-900 font-poppins overflow-hidden">

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 mt-24">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#6c845d] drop-shadow-xl leading-tight"
        >
          <span className="text-black">About</span> MusiTechHub
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2"
        >
          We are a team of passionate youngsters on a mission to take businesses to the next level
          with creative, low-cost solutions. From{" "}
          <span className="text-[#6c845d] underline">
            Web development, Data analyst, UI/UX, Graphic design, and Video editing
          </span>{" "}
          — we deliver clean, professional, and timely results.
        </motion.p>
      </section>

      {/* Vision Section */}
      <section className="py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden group"
          >
            <img
              src={VisionImg}
              alt="Vision illustration"
              className="object-cover w-full h-[250px] sm:h-[350px] md:h-full transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#6c845d]/40 to-transparent"></div> */}
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6c845d]">
              <span className="text-black">Our</span> Vision
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              At MusiTechHub, we believe in innovation, creativity, and affordability.
              Our goal is to help businesses grow and thrive in the digital era.
              We value trust, efficiency, and quality above all and strive to
              deliver projects that exceed expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#6c845d] mb-12 sm:mb-16">
          <span className="text-black">Why Choose</span> MusiTechHub?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
          {[
            "Young and energetic team with a fresh approach to solving business challenges.",
            "Affordable solutions without compromising on quality and creativity.",
            "Timely delivery and clear communication at every stage of the project.",
            "We build trust first — our clients’ satisfaction is our top priority.",
          ].map((point, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-[#6c845d]/10 to-[#a3b897]/10 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#6c845d]/40"></div>
              <p className="text-base sm:text-lg text-gray-800 flex items-start gap-3">
                <span className="text-[#6c845d] text-xl sm:text-2xl font-bold">✔</span>
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-r from-[#6c845d] via-[#7b936b] to-[#6c845d] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Ready to elevate your business?
          </h2>
          <p className="mb-6 sm:mb-10 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2">
            Trust us with your project and let's create something amazing together.
          </p>
          <button 
            onClick={ () => handleNavigate("/contact")}
            className="bg-white text-[#6c845d] font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-full hover:bg-gray-200 transition-all shadow-lg hover:scale-105 text-base sm:text-lg">
            Get in Touch
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;