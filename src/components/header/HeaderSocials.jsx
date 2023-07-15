import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/marviquint-bahio-16b22b265/" target="_blank"><BsLinkedin /></a>
        <a href="https://www.facebook.com/Marviquint1437" target="_blank"><BsFacebook/></a>
        <a href="https://github.com/marviquint" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials