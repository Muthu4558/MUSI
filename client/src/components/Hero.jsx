import { motion } from "framer-motion";
import HeroImg from "../assets/hero-sec/hero-img.png";

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-26">
      {/* Left Side Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Where Ideas <span className="text-[#6c845d]">Meet Technology</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto md:mx-0">
          Turning ideas into digital experiences that inspire. At MusiTechHub,
          we blend creativity, technology, and strategy to help your brand stand out.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center md:justify-start gap-4"
        >
          <button className="px-7 py-3 bg-[#6c845d] text-white font-semibold rounded-full shadow-md hover:bg-[#5a6d4d] transition-all">
            Get Started
          </button>
          {/* <button className="px-7 py-3 bg-white border border-[#6c845d] text-[#6c845d] font-semibold rounded-full shadow-md hover:bg-[#f0f3ec] transition-all">
            Learn More
          </button> */}
        </motion.div>
      </motion.div>

      {/* Right Side Illustration */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          {/* Animated Blob Background */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-tr from-[#6c845d] to-[#d4e0c0] rounded-full blur-2xl opacity-70"
          ></motion.div>

          {/* Image with float animation */}
          <motion.img
            src={HeroImg}
            alt="Digital Solutions"
            className="relative w-full h-full object-contain z-10 drop-shadow-lg"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;