// Nav.jsx
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { BsCollection } from "react-icons/bs";

const Nav = ({ toggleDarkMode, isDarkMode }) => {
  const [activeNav, setActiveNav] = useState('#');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section'); 
      let scrollPosition = window.scrollY;
      let scrollDirection = scrollPosition > lastScrollTop ? 'down' : 'up';

      if (scrollPosition === 0) {
        setActiveNav('#'); 
      } else {
        sections.forEach((section) => {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (
            (scrollDirection === 'down' && scrollPosition >= top && scrollPosition < top + height) ||
            (scrollDirection === 'up' && scrollPosition >= top && scrollPosition < top + height && top > lastScrollTop)
          ) {
            setActiveNav(`#${section.id}`);
          }
        });
      }
      setLastScrollTop(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]); 

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
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
        <BsCollection />
      </a>
    </nav>
  );
};

export default Nav;
