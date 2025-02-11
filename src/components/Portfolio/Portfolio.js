import React from 'react';
import './portfolio.css'

const PortfolioItems = [
  {
    name: 'E-Commerce Website',
    github: 'https://github.com/Annetaliya/React-ecommerce',
    website: 'https://659968189ed589e081611c57--jocular-valkyrie-82c7de.netlify.app/',
    photo:  "https://lh3.googleusercontent.com/d/1FPxAUkC4HDTHW4dvyoAiBuO-Up1HDsAj=s220?authuser=0",
  },
  {
    name: 'Landing Page',
    github: 'https://github.com/Annetaliya/Landing-Page',
    website: 'https://landing-page-i6zw.vercel.app/',
    photo: 'https://lh3.googleusercontent.com/d/1m-clqocWaseCcEDDoKXn4Q9-jYL1K45K=s220?authuser=0',
  },
  {
    name: 'E-Commerce Website',
    github: '#home',
    website: '#home',
    photo: 'https://lh3.googleusercontent.com/d/1fh4JQGs0CjtHkG4d7QmXxlbAK_7WRQkz=s220?authuser=0',
  },
]
const Portfolio = () => {
  return (
    <div>
      <h1 className='intro'>My Portfolio</h1>
      <p className='intro-paragraph'> I take pride in paying attention to the smallest details and making sure
        my work is pixel perfect. I am excited to bring my skills and experience
        to help businesses achieve their goals</p>
        <div className="profile-container">
          {PortfolioItems.length !==0 ? 
          PortfolioItems.map((elements, index) => (
            <div key={index} className="proLink">
              <img src={elements.photo} alt='website' loading='lazy'/>
              <p>{elements.name}</p>
              <a href={elements.website} target='_blank' rel="noreferrer">
                <button className="btn1">Website</button>
              </a>
              <a href={elements.github} target='_blank' rel="noreferrer">
                <button className="btn2">Github</button>
              </a>
            </div>
          ))
          
          : <p>No items to display</p>}
        </div>

    </div>
  )
}

export default Portfolio