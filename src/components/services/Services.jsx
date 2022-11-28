import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating responsive templates using CSS techniques and JavaScript libraries.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating responsive website using CSS3.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsible for maintaining the documentation involved in the development cycle.</p>
            </li>
          </ul>
        </article>

        {/* ======================= END OF UI/UX ======================= */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Self-learned experience of creating a website using React.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Core team member managing the Front End Stack for Asset management website.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Collaborated with designers, clients and product team members to implement new features.</p>
            </li>
          </ul>
        </article>

        {/* ======================= END OF WEB DEVELOPMENT ======================= */}

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating new features as per the user need and innovative ideas.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Maintained as well as improved based on audience insights.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Handling integration with third party services.</p>
            </li>
          </ul>
        </article>

        {/* ======================= END OF CONTENT CREATION ======================= */}

      </div>
    </section>
  )
}

export default Services



