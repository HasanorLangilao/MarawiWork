import React from 'react';
import { FaFacebook, FaTwitterSquare, FaYoutube, FaInstagram } from 'react-icons/fa';
import { MdOutlineBusinessCenter } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-4 bg-[#272525] text-white w-full">
      <div className="flex flex-col items-center text-center">
        <p className="text-2xl mb-2 flex items-center">
          <MdOutlineBusinessCenter className="mr-2" /> MARAWIWORK
        </p>
        <p className="text-sm text-gray-300 mb-4">
          Giving best opportunities to best peoples.
        </p>
        <div className="flex gap-5 mb-4">
          <FaFacebook className="text-white hover:text-[#2d68c4] transition-colors duration-200 cursor-pointer" />
          <FaTwitterSquare className="text-white hover:text-[#1da1f2] transition-colors duration-200 cursor-pointer" />
          <FaYoutube className="text-white hover:text-[#ff0000] transition-colors duration-200 cursor-pointer" />
          <FaInstagram className="text-white hover:text-[#c13584] transition-colors duration-200 cursor-pointer" />
        </div>
        <p className="text-sm">
          © Copyright, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
