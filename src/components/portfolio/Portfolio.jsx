import React from 'react'
import './portfolio.css'
import amber from '../../assets/AMBER.png'
import wallet from '../../assets/wallet.png'
import student from '../../assets/student.png'
import library from '../../assets/library.jpg'
import instaMag from '../../assets/instamag.png';
import nexusGpt from '../../assets/nexusgpt.png';


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={library} alt=""/>
            </div>
            <h3>Public Library Data and Information Management System</h3>
            <p>Final Poject in Information Management Subject</p>
            <h5>This is an ASP.NET Web forms application for public library manangement system where there is librarian who can sign up as admin and manage their books when someone is borrowing.</h5>
        </article>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={student} alt=""/>
            </div>
            <h3>Student Management System</h3>
            <p>Final Poject in ASP.NET Subject</p>
            <h5>This is an ASP.NET Web forms application for Student manangement system where there is an admin who manage the data off all the students details in the whole institution.</h5>
        </article>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={wallet} alt=""/>
            </div>
            <h3>My E-Wallet</h3>
            <p>Final Poject in Integrative Programming and Technologies Subject</p>
            <h5>This is an ASP.NET MVC web application for an online wallet where users can store all of their money digitally, the users can cash-in, cash-out, and send cash.</h5>
        </article>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={amber} alt=""/>
            </div>
            <h3>AMBER: Faculty Evaluation System</h3>
            <p>Capstone Project and Technopreneurship</p>
            <h5>This is an ASP.NET Web Forms application that is intended to serve as a faculty evaluation system that all public educational institution can use to improve faculty members skills.</h5>
        </article>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={instaMag} alt=""/>
            </div>
            <h3>InstaMag: Photo Magazine Social Media Site</h3>
            <p>MERN Stack Project</p>
            <h5>This is a MERN stack project that serves as a web application for a social media magazine for sharing photos that the users posted.</h5>
        </article>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={nexusGpt} alt=""/>
            </div>
            <h3>NexusGPT: ChatGPT x Dall-E Crossover</h3>
            <p>ExpressJS, ReactJS, and NodeJS OpenAI API Project</p>
            <h5>This is a JavaScript web application that is a crossover of ChatGPT and Dall-E, both product of OpenAI that serves people with all of their curiousity.</h5>
        </article>
      </div>
    </section>
  )
}

export default Portfolio