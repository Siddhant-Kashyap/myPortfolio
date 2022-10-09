import React from 'react'
import './Intro.css'
import Github from '../../../src/icons&photo/gitLogo.png'
import LinkedIn  from '../../../src/icons&photo/linkedInLogo.png'
import Photo from '../../../src/icons&photo/sid.png'
import Floationdiv from '../FloatingDivs/Floationdiv'
import crown from '../../../src/icons&photo/crown.png'
import email from '../../../src/icons&photo/email.png'
const Intro = () => {
  return (
    <div className='intro'>
        <div className='iLeft'>
                <div  className='iName'>
                    <span>Hi There! I am .. </span>
                    <span>Siddhant Kashyap</span>
                    <span>Full Stack Developer with good experience in MERN stack</span>
                </div>
                <button className='button iButton' >Hire Me</button>
                <div className='iIcon'>
                  <img src={Github}alt=""/>
                  <img src={LinkedIn}alt=""/>
                  <img src={email}alt=""/>
                </div>
                <div></div>
        </div>





        <div className='iRight'>
          <img src ={Photo} alt=""/>
       
          <Floationdiv  img={crown} text1="Web" text2="Developer"/>
    
          
        </div>
       
    </div>
  )
}

export default Intro