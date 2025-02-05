import React from 'react';
import './home.css';

const data = {name: 'Annette Adhiambo', 
              profession: 'Front-end Engineer',
              photo: 'https://lh3.googleusercontent.com/d/1JeJZkwlAJFPJrrM14ci7Ji_tS8iumrr6=s220?authuser=0',
              skills: {
                skill1: 'Web Design',
                skill2: 'Web Development'
              }
            }

const Home = () => {
  return (
    <div className='home-container'>
      <div>
        <p><span className='greetings'>Hello</span> My name is {data.name}</p>
        <p>{data.profession}</p>
      </div>
      <div>
        <img src={data.photo} alt='profile' loading='lazy'/>
      </div>

    </div>
  )
}

export default Home