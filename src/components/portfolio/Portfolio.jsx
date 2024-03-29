import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio2.jpg'
import IMG2 from '../../assets/portfolio3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "E-Commerce Website",
    github: "https://github.com/anandakumar0012/E-commerce_Sweet-Sounds",
    demo: "https://e-commerce-sweet-sounds.vercel.app"
  },
  {
    id: 2,
    image: IMG2,
    title: "Whatsapp Clone",
    github: "https://github.com/anandakumar0012/WhatsApp_Clone",
    demo: "https://whatsapp-mern-a9e9b.web.app/"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='__blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio