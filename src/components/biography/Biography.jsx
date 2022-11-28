import React from 'react'
import './biography.css'
import {MdMenuBook} from 'react-icons/md'
import {MdWork} from 'react-icons/md'

const Biography = () => {
  return (
    <section id='biography'>
      <h5>My Personal Journey</h5>
      <h2>Biography</h2>

      <div className='container biography__container'>
        <div className='biography__front' id='biography__slide'>
          <h3>Education</h3>
          <div className='biography__content'>
            <article className='biography__details'>
              <MdMenuBook className='biography__details-icon'/>
              <div>
                <h4>BCA</h4>
                <ul>
                  <li className='text-light'>Bachelor of Computer Application</li>
                  <small className='text-white'>Nandha Arts & Science College, Erode, TamilNadu</small>
                  <li className='text-light' id='date'>2017 - 2020</li>
                </ul>
              </div>
            </article>
          </div>
        </div>

        <div className='biography__back'>
          <h3>Experience</h3>
          <div className='biography__content'>
            <article className='biography__details'>
              <MdWork className='biography__details-icon'/>
              <div>
                <h4>HCL</h4>
                <ul>
                <li className='text-light'>Software Engineer</li>
                  <small className='text-white'>Hindustan Computing Limited</small>
                  <li className='text-light' id='date'>May 2022 - Present</li>
                </ul>
              </div>
            </article>

            <article className='biography__details'>
              <MdWork className='biography__details-icon'/>
              <div>
                <h4>TCS</h4>
                <ul>
                <li className='text-light'>Software Trainee</li>
                  <small className='text-white'>Tata Consultancy Services</small>
                  <li className='text-light' id='date'>October 2020 - January 2022</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Biography