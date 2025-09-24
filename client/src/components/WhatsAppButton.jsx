// WhatsAppButton.jsx
import React from "react";
import { motion } from "framer-motion";

const WhatsAppButton = ({ phone = "6385931500", message = "Hello! I want to chat." }) => {
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      title="Chat on WhatsApp"
      animate={{ scale: [1, 1.08, 1] }} // gentle pulse
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      whileHover={{ scale: 1.15, boxShadow: "0px 0px 20px rgba(37,211,102,0.6)" }} // smooth hover
      whileTap={{ scale: 0.95 }}
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        width="28"
        height="28"
      >
        <path d="M12 .5C5.649.5.5 5.649.5 12S5.649 23.5 12 23.5 23.5 18.351 23.5 12 18.351.5 12 .5zm0 21C6.201 21.5 2.5 17.799 2.5 12S6.201 2.5 12 2.5 21.5 6.201 21.5 12 17.799 21.5 12 21.5zm5.097-7.796c-.271-.135-1.607-.792-1.856-.881-.248-.09-.428-.135-.607.135s-.696.881-.854 1.064c-.157.181-.315.202-.586.067-.271-.135-1.143-.422-2.176-1.338-.805-.716-1.348-1.601-1.505-1.872-.157-.271-.017-.417.119-.552.122-.121.271-.315.407-.472.135-.157.181-.271.271-.452.09-.181.045-.338-.022-.472-.067-.135-.607-1.462-.832-2.007-.219-.529-.442-.456-.607-.464l-.518-.009c-.181 0-.472.067-.719.338s-.942.921-.942 2.244c0 1.322.966 2.604 1.099 2.785.135.181 1.9 2.905 4.607 4.079.644.278 1.145.444 1.537.569.646.207 1.233.178 1.697.108.517-.076 1.607-.656 1.835-1.291.228-.634.228-1.177.159-1.291-.067-.114-.248-.181-.518-.316z"/>
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;