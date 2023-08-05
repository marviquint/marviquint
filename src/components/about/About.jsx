import React from "react";
import "./about.css";
import ME from "../../assets/MeSablay.jpg";
import { RiAwardFill } from "react-icons/ri";
import { GoProject } from "react-icons/go";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h3>Experience</h3>
              <h5>Years of Experience</h5>
            </article>
            <article className="about__card">
              <GoProject className="about__icon" />
              <h3>Projects</h3>
              <h5>Many completed Projects</h5>
            </article>
          </div>
          <h3 className="description">
            Hello, I am Marviquint a Graduate from Cebu Technological University - Main Campus in the Degree 
            Bachelor of Science in Information Technology. A Software Developer with years of experience in
            various technologies such as Computer Programming with knowledge of various programming languages, 
            System Integration Architecture, Information Management, Database Management System and a good team player with leadership skills.
            I welcome you to my Portfolio website.
          </h3>

          <a href="#contact" className="btn">
            Let's Communicate
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
