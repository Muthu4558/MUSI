import React from "react";
import { motion } from "framer-motion";
import Web from "../assets/blog/web.jpeg";
import DA from "../assets/blog/da.jpeg";
import UIUX from "../assets/blog/uiux.jpeg";

const blogs = [
  {
    title: "The Future of Web Development",
    description:
      "How next-gen tools and frameworks are reshaping businesses in the digital era.",
    image: Web,
  },
  {
    title: "Data Analytics for Growth",
    description:
      "Turn raw data into powerful insights to scale your business with confidence.",
    image: DA,
  },
  {
    title: "Creative UI/UX Trends 2025",
    description:
      "Minimalism meets interactivity — design trends that engage and inspire users.",
    image: UIUX,
  },
];

const Blog = () => {
  return (
    <div className="font-poppins text-gray-900 mt-20">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-16 sm:py-24 lg:py-54 px-4 sm:px-6 md:px-12">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#6c845d] drop-shadow-xl leading-tight"
        >
          <span className="text-black">MusiTechHub</span> Blog
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed px-2"
        >
          Stories, ideas, and insights on web development, analytics, design,
          and creativity — crafted for modern businesses.
        </motion.p>
      </section>

      {/* Featured Blog */}
      <section className="relative py-16 sm:py-20 bg-[#f7f9f4]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6 md:px-12">
          <motion.img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Featured"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 md:h-full object-cover"
          />
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#6c845d] mb-3 sm:mb-4">
              Spotlight: Young Entrepreneurs Driving Change
            </h2>
            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
              At MusiTechHub, we believe in the power of fresh minds and bold
              ideas. Read how our journey as youngsters is transforming
              businesses with affordable, impactful, and modern solutions.
            </p>
            <button className="px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-[#6c845d] text-white text-sm sm:text-base font-semibold hover:bg-[#4c5e3f] transition">
              Read Full Story →
            </button>
          </motion.div>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#f0f4ec] to-[#e2ebd3]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#6c845d] mb-10 sm:mb-16">
          Latest Insights
        </h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#6c845d] mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {blog.description}
                </p>
                <button className="text-[#6c845d] font-semibold text-sm sm:text-base hover:underline">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 sm:py-24 bg-[#6c845d] text-white text-center px-4">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
        >
          Want Fresh Ideas Every Week?
        </motion.h2>
        <p className="max-w-xl mx-auto mb-6 sm:mb-8 opacity-90 text-sm sm:text-base md:text-lg">
          Subscribe to our newsletter and stay ahead with the latest insights,
          tips, and inspiration.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 sm:py-3 rounded-full sm:rounded-l-full bg-white/20 text-black outline-none w-full sm:w-auto"
          />
          <button className="px-5 sm:px-6 py-2 sm:py-3 bg-white text-[#6c845d] font-semibold rounded-full sm:rounded-r-full hover:bg-gray-200 transition text-sm sm:text-base">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;