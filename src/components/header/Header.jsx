import React from 'react'
import './header.css'
import ME from '../../assets/MeToga.jpg'


const Header = ({isDarkMode}) => {
  return (
    <header>
      <div id='divHeader' className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Marviquint Bahio</h1>
        <h3>Software Engineer</h3>
        <div className="me">
          <img src={ME} alt="Me"/>
        </div>
      </div>

    </header>
  )
}

export default Header