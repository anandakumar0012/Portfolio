import React from 'react'
import './header.css'
import CTA from './CTA'
import ANAND from '../../assets/anand1.png'
import HeaderSocials from './headerSocials'


function header() {
  return (
    <header>
      <div className="container header__container">
        <h5 className='welcome'>Hello I'm</h5>
        <h1>Ananda Kumar</h1>
        <h5 className="text-light field">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ANAND} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header