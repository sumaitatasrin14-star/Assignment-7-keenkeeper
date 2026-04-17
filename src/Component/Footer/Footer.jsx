import React from "react";
import { FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#295a49] text-white py-12 text-center">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-3">KeenKeeper</h1>

      {/* Subtitle */}
      <p className="text-sm text-gray-200 max-w-xl mx-auto mb-6">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      {/* Social Links */}
      <h3 className="mb-3 text-sm font-medium">Social Links</h3>
      <div className="flex justify-center gap-4 mb-8">
        <div className="bg-white text-black p-2 rounded-full cursor-pointer">
          <FaYoutube size={14} />
        </div>
        <div className="bg-white text-black p-2 rounded-full cursor-pointer">
          <FaFacebookF size={14} />
        </div>
        <div className="bg-white text-black p-2 rounded-full cursor-pointer">
          <FaXTwitter size={14} />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-200 px-6 md:px-20">
        
        <p>© 2025 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookies</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;