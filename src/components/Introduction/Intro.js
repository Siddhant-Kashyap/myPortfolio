import React from 'react'
import './Intro.css'
import Github from '../../../src/icons&photo/gitLogo.png'
import LinkedIn  from '../../../src/icons&photo/linkedInLogo.png'
const Intro = () => {
  return (
    <div className='intro'>
        <div className='iLeft'>
                <div  className='iName'>
                    <span>Hello  hi There! I am .. </span>
                    <span>Siddhant Kashyap</span>
                    <span>Full Stack Developer with good experience in MERN stack</span>
                </div>
                <button className='iButton' >Hire Me</button>
                <div className='iIcon'>
                  <img src={Github}alt=""/>
                  <img src={LinkedIn}alt=""/>
                </div>
       
       
       
        </div>





        <div className='iRight'>
          I am at right
        </div>
       
    </div>
  )
}

export default Intro