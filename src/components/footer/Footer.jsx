/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Marviquint Bahio</a>
      <div className="footer__socials">
        <a href="https://facebook.com/marviquint1437"><BsFacebook/></a>
        <a href="https://instagram.com/marvsu11"><BsInstagram/></a>
        <a href="https://twitter.com/mavsu11"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <h5>&copy; Marviquint Bahio. All rights Reserved.</h5>
      </div>
    </footer>
  )
}

export default Footer