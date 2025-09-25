import { Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import Logo from "../assets/MusiTechHub_logo-1.png"; 
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // scroll to top smoothly
  };

  return (
    <footer className="bg-[#1f1f1f] text-gray-200 py-12 px-6 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">

        {/* Column 1: Logo + Newsletter + About */}
        <div className="flex flex-col gap-4">
          <div className="bg-white/20 p-2 rounded-lg w-max">
            <img src={Logo} alt="MusiTechHub Logo" className="h-16 sm:h-20 object-contain" />
          </div>
          <p className="text-gray-400 text-sm sm:text-base">
            MusiTechHub is your ultimate partner for innovative web and design solutions.
            We create digital experiences that connect and inspire.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-xl border-none outline-none text-black bg-white/20 flex-1 min-w-[180px]"
            />
            <button className="bg-[#6c845d] px-4 py-2 rounded-r-xl font-semibold hover:bg-[#a3b897] transition-all w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xl font-bold text-white mb-2">Quick Links</h4>

          <p
            className="cursor-pointer hover:underline text-white"
            onClick={() => handleNavigate("/")}
          >
            Home
          </p>

          <p
            className="cursor-pointer hover:underline text-white"
            onClick={() => handleNavigate("/about")}
          >
            About Us
          </p>

          <p
            className="cursor-pointer hover:underline text-white"
            onClick={() => handleNavigate("/blog")}
          >
            Blog
          </p>
        </div>

        {/* Column 3: Services */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xl font-bold text-white mb-2">Services</h4>
          <p
            className="cursor-pointer hover:text-[#6c845d] transition-colors text-sm sm:text-base"
            onClick={() => handleNavigate("/web-development")}
          >
            Web Development
          </p>
          <p
            className="cursor-pointer hover:text-[#6c845d] transition-colors text-sm sm:text-base"
            onClick={() => handleNavigate("/data-analyst")}
          >
            Data Analyst
          </p>
          <p
            className="cursor-pointer hover:text-[#6c845d] transition-colors text-sm sm:text-base"
            onClick={() => handleNavigate("/graphic-design")}
          >
            Graphic Design
          </p>
          <p
            className="cursor-pointer hover:text-[#6c845d] transition-colors text-sm sm:text-base"
            onClick={() => handleNavigate("/ui-ux")}
          >
            UI/UX
          </p>
          <p
            className="cursor-pointer hover:text-[#6c845d] transition-colors text-sm sm:text-base"
            onClick={() => handleNavigate("/video-editing")}
          >
            Video Editing
          </p>
        </div>

        {/* Column 4: Contact */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xl font-bold text-white mb-2">Contact Us</h4>
          <p className="flex items-start sm:items-center gap-2 text-sm sm:text-base">
            <MapPin size={44} /> Ratnam Street, Eshwari Nagar, Medical College Road, Thanjavur, India
          </p>
          <p className="flex items-center gap-2 text-sm sm:text-base"><Phone size={18} /> +91 6385 931 500</p>
          <p className="flex items-center gap-2 text-sm sm:text-base"><Mail size={18} /> info@musitechhub.com</p>

          <h4 className="text-xl font-bold text-white mb-2 mt-5">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} className="hover:text-[#6c845d] transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} className="hover:text-[#6c845d] transition-colors" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={24} className="hover:text-[#6c845d] transition-colors" />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} MusiTechHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;