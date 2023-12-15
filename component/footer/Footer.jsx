import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMediumCircle } from 'react-icons/ai';
import '../footer/footer.css';
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Yun-Ting (Claire) Chiou
      </a>
      <div className="footer__socials">
        <p>Contact Me: clairefantastic7@gmail.com</p>
      </div>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
