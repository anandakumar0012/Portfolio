import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


function headerSocials() {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/ananda-kumar-b08803228/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/anandakumar0012" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default headerSocials