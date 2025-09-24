import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Code, Palette, BarChart3, Layout, Video } from "lucide-react";
import Logo from "../assets/MusiTechHub_logo-1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  // Scroll listener (applies to whole page)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide navbar
        setShowNavbar(false);
      } else {
        // scrolling up → show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  const services = [
    { name: "Web Development", icon: <Code size={18} />, path: "/web-development" },
    { name: "Data Analyst", icon: <BarChart3 size={18} />, path: "/data-analyst" },
    { name: "Graphic Design", icon: <Palette size={18} />, path: "/graphic-design" },
    { name: "UI/UX", icon: <Layout size={18} />, path: "/ui-ux" },
    { name: "Video Editing", icon: <Video size={18} />, path: "/video-editing" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: showNavbar ? 0 : -100, // hide/show
        opacity: showNavbar ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 70, damping: 12 }}
      className="fixed top-0 left-0 right-0 z-50 
      max-w-7xl mx-auto mt-4 px-6 md:px-12 py-4
      backdrop-blur-md rounded-2xl shadow-lg 
      flex items-center justify-between border border-black"
    >
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.05 }} onClick={() => navigate("/")}>
        <img
          src={Logo}
          alt="Logo"
          className="h-14 object-contain drop-shadow-md cursor-pointer"
        />
      </motion.div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-10 text-lg font-semibold text-black relative">
        {[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
          { name: "Blog", path: "/blog" },
        ].map((item, idx) => (
          <motion.li
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="group cursor-pointer relative"
            onClick={() => navigate(item.path)}
          >
            {item.name}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </motion.li>
        ))}

        {/* Services Dropdown */}
        <motion.li
          className="relative cursor-pointer"
          onMouseEnter={() => setServiceOpen(true)}
          onMouseLeave={() => setServiceOpen(false)}
        >
          <div className="flex items-center gap-1">
            Services
            <ChevronDown
              size={16}
              className={`transition-transform ${serviceOpen ? "rotate-180" : ""}`}
            />
          </div>

          {/* Dropdown */}
          <AnimatePresence>
            {serviceOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute top-8 left-0 w-60 bg-white/95 text-black rounded-xl shadow-lg overflow-hidden z-50"
              >
                {services.map((item, idx) => (
                  <motion.p
                    key={idx}
                    // whileHover={{ scale: 1.03, x: 6 }}
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#6c845d] hover:text-white transition-all cursor-pointer"
                    onClick={() => navigate(item.path)}
                  >
                    {item.icon}
                    {item.name}
                  </motion.p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.li>


      </ul>

      {/* Contact Button */}
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(108,132,93,0.7)" }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block bg-[#6c845d]
        text-white font-semibold px-7 py-2 rounded-full shadow-md
        hover:text-white transition-all duration-300"
        onClick={() => navigate("/contact")}
      >
        Contact Us
      </motion.button>

      {/* Mobile Toggle */}
      <div
        className="md:hidden flex flex-col space-y-1.5 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
          className="block h-1 w-7 bg-black rounded"
        />
        <motion.span
          animate={{ opacity: isOpen ? 0 : 1 }}
          className="block h-1 w-7 bg-black rounded"
        />
        <motion.span
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
          className="block h-1 w-7 bg-black rounded"
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-24 left-0 w-full bg-gradient-to-br from-[#f0f3ec] via-[#d4e0c0] to-[#6c845d]
            backdrop-blur-sm flex flex-col items-center space-y-6 py-8 
            text-lg font-medium rounded-b-2xl shadow-xl border-l-0"
          >
            <motion.li whileHover={{ scale: 1.05 }} className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </motion.li>

            {/* Mobile Dropdown */}
            <li
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setServiceOpen(!serviceOpen)}
            >
              <div className="flex items-center gap-1">
                Services{" "}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${serviceOpen ? "rotate-180" : ""}`}
                />
              </div>

              <AnimatePresence>
                {serviceOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 bg-white/90 text-black rounded-xl shadow-lg w-56"
                  >
                    {services.map((item, idx) => (
                      <motion.li
                        key={idx}
                        whileHover={{ scale: 1.05, x: 6 }}
                        className="flex items-center gap-3 px-5 py-3 hover:bg-[#6c845d] hover:text-white transition-all cursor-pointer text-center"
                        onClick={() => navigate(item.path)}
                      >
                        {item.icon}
                        {item.name}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <motion.li whileHover={{ scale: 1.05 }} className="cursor-pointer" onClick={() => navigate("/about")}>
              About Us
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} className="cursor-pointer" onClick={() => navigate("/blog")}>
              Blog
            </motion.li>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,255,255,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#6c845d] text-white font-semibold px-7 py-2 rounded-full shadow-md 
              transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </motion.button>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;