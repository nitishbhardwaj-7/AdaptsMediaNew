"use client";
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri'; // Specifically for the X logo

const socialLinks = [
  { id: 1, icon: <FaFacebookF />, url: "#" },
  { id: 2, icon: <RiTwitterXFill />, url: "#" },
  { id: 3, icon: <FaInstagram />, url: "#" },
  { id: 4, icon: <FaLinkedinIn />, url: "#" },
  { id: 5, icon: <FaYoutube />, url: "#" },
];

const SocialBar = () => {
  return (
    <section className="w-full py-12 flex items-center justify-center bg-gradient-to-r from-[#0241b5] via-[#1255e4] to-[#0135b9]">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-26">
        <h3 className="text-white text-3xl md:text-5xl font-normal tracking-wide">
          Follow us @
        </h3> 
        <div className="flex items-center gap-4 md:gap-12">
          {socialLinks.map((social) => (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center 
                         rounded-full border border-white text-white text-xl md:text-2xl
                         transition-colors duration-300 hover:border-white"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialBar;