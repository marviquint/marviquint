/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaEnvelope } from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Marviquint Bahio</a>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/marviquint-bahio-16b22b265/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://facebook.com/marviquint1437" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
        <a href="https://instagram.com/marvsu11" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
        <a href="https://twitter.com/mavsu11" target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
        <a href="https://github.com/marviquint" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        <a href="mailto:marviquintb@gmail.com"><FaEnvelope/></a>
      </div>

      <div className="footer__copyright">
        <h5>&copy; All rights Reserved Marviquint Bahio </h5>
      </div>
    </footer>
  )
}

export default Footer