// Nav.jsx
import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { RiFileUserLine } from 'react-icons/ri';
import { AiTwotonePhone } from 'react-icons/ai';
import { MdWork } from 'react-icons/md';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const Nav = ({ toggleDarkMode, isDarkMode }) => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <RiFileUserLine />
      </a>
      <button onClick={toggleDarkMode} className={activeNav === '' ? 'active' : ''} style={{ backgroundColor: 'transparent', cursor:"pointer" }}>
        {isDarkMode ? <BsFillMoonFill  style={{color: "#FFF", fontSize: "1.1rem"}}/> : 
          <BsFillSunFill  style={{color: "#FFF", fontSize: "1.1rem"}}/>
        }
      </button>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <MdWork />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <AiTwotonePhone />
      </a>
    </nav>
  );
};

export default Nav;
