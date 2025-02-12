import React from 'react';
import './home.css';
import { FaFigma } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

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
    <div className='parent-home-container'>
      <div className='home-container'>
        <div className='home-intro'>
          <p><span className='greetings'>Hello</span> My name is {data.name}</p>
          <p>{data.profession}</p>
          <p className='intro-text'>I'm a skilled frontend website developer with<br></br>
          experience in creating modern and responsive websites</p>
        </div>
        <div>
          <img src={data.photo} alt='profile' loading='lazy'/>
        </div>
      </div>
      <h1 className='heading-intro'>What I do</h1>
      <div className='skills'>
        <FaFigma size={30} />
        <p>{data.skills.skill1}</p>
      </div>
      <div className='skills'>
        <RiComputerLine size={30}/>
        <p>{data.skills.skill2}</p>
      </div>

    </div>
  )
}

export default Home