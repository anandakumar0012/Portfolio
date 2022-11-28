import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>ANAND</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Skills</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#biography'>Biography</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/anandduke.anand' target='_blank'><FaFacebookF /></a>
        <a href='https://www.instagram.com/anand_hyna/' target='_blank'><FiInstagram /></a>
        <a href='https://www.twitter.com/anandakumar0012' target='_blank'><IoLogoTwitter /></a>
      </div>
    </footer>
  )
}

export default Footer