import React from 'react';
import { FaFacebook, FaTwitterSquare, FaYoutube, FaInstagram } from 'react-icons/fa';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
  return (
    <div className="wrapper">
      <div className="content">
        {/* Your page content goes here */}
      </div>
      
      <footer className="footer">
        <div className="footer-middle">
          <div className="footer-content">
            <p className="footer-title">
              <MdOutlineBusinessCenter /> MARAWIWORK
            </p>
            <p className="footer-slogan">
              Giving best opportunities to best peoples.
            </p>
          </div>
          <div className="footer-icons">
            <FaFacebook className="footer-icon fb-icon" />
            <FaTwitterSquare className="footer-icon twitter-icon" />
            <FaYoutube className="footer-icon yt-icon" />
            <FaInstagram className="footer-icon ig-icon" />
          </div>
          <p className="footer-copyright">© Copyright, All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
