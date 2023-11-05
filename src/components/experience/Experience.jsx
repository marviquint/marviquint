import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiMsqlServer, DiJava, DiDotnet} from 'react-icons/di'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaBootstrap, FaReact, FaPhp, FaNodeJs} from 'react-icons/fa'
import {SiMysql, SiExpress, SiMongodb, SiPython, SiDjango} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience' className="experience__section">
      <h5>Experience</h5>
      <h2>Technology Stack</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <h5 className="text-light">Experienced</h5>
              </div>
            </article>
            <article className="experience__details">
              <DiCss3 className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <h5 className="text-light">Experienced</h5>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandJavascript className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <h5 className="text-light">Intermediate</h5>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <h5 className="text-light">Experienced</h5>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <h5 className="text-light">Intermediate</h5>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MaterialUI</h4>
              <h5 className="text-light">Basics</h5>
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience__backend">
        <h3>Back End Development</h3>
        <div className="experience__content">
            <article className="experience__details">
              <DiDotnet className='experience__details-icon'/>
              <div>
              <h4>ASP.NET</h4>
              <h5 className="text-light">Experienced</h5>
              </div>
            </article>
            <article className="experience__details">
              <FaPhp className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <h5 className="text-light">Basics</h5>
              </div>
            </article>
            <article className="experience__details">
              <DiMsqlServer className='experience__details-icon'/>
              <div>
              <h4>MS SQL</h4>
              <h5 className="text-light">Experienced</h5>
              </div>
            </article>
            <article className="experience__details">
              <SiMysql className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <h5 className="text-light">Intermediate</h5>
              </div>
            </article>
            <article className="experience__details">
              <FaNodeJs className='experience__details-icon'/>
              <div>
              <h4>NodeJS</h4>
              <h5 className="text-light">Intermediate</h5>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className='experience__details-icon'/>
              <div>
              <h4>ExpressJS</h4>
              <h5 className="text-light">Intermediate</h5>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <h5 className="text-light">Basics</h5>
              </div>
            </article>
            <article className="experience__details">
              <SiDjango className='experience__details-icon'/>
              <div>
              <h4>Django</h4>
              <h5 className="text-light">Intermediate</h5>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__programming">
        <h3>Programming Languages</h3>
        <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>C</h4>
              <h5 className="text-light">Experienced</h5>
              </div>
            </article>
            <article className="experience__details">
              <DiJava className='experience__details-icon'/>
              <div>
              <h4>Java</h4>
              <h5 className="text-light">Basics</h5>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>C#</h4>
              <h5 className="text-light">Experienced</h5>
              </div>
            </article>
            <article className="experience__details">
              <SiPython className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <h5 className="text-light">Experienced</h5>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience