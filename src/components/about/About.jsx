import React from 'react'
import './about.css'
import ANAND from '../../assets/anand2.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { BiSupport } from 'react-icons/bi'

function about() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ANAND} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>TCS Users</small>
            </article>

            <article className="about__card">
              <BiSupport className="about__icon" />
              <h5>Support</h5>
              <small>Online 24/7</small>
            </article>
          </div>
          <p>
            Results-driven Software Trainee with 1 year-10 months of experience in website development. Selfmotivated and ready to learn advanced technologies. Helping build asset management
            applications and self-learned front end technologies by creating websites.
          </p>
          <a href="#" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about