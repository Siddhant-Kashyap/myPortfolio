import React from 'react'
import './Services.css'
import Heart from '../../../src/icons&photo/heartemoji.png'
import Humble from '../../../src/icons&photo/humble.png'
import Glasses from '../../../src/icons&photo/glasses.png'
import Card from '../card/Card'
import Resume from '../../icons&photo/Siddhant Kashyap Resume.pdf'

const Services = () => {
  return (
    <div className='services'>

    {/* left side division */}
    <div className='awesome'>
        <span>My Awesome</span>
        <span>Services</span>
        <span>I provide services related to Wev Development <br/>Mobile App development,MERN Stack 
    
        </span>
        <a href={Resume}><button className='sButton'>Download  CV</button></a>
        
        <div className='blur s-blur' style={{background:"#ABF1FF94"}}></div>

    </div>
    {/* right side division */}
    <div className='cards'>
      <div style={{left:'12rem'}}>
        <Card
        emoji ={Heart}
        heading={'APP'}
        detail={"AndroidStudio,ReactNative"}
        />
      </div>
      {/* secondcard */}
      <div style={{top:'12rem',left:'-4rem'}}>
        <Card
        emoji ={Glasses}
        heading={'WEB'}
        detail={"HTML,CSS,JavaScript"}
        />
      </div>
      <div style={{top:'20rem',left:'20rem'}}>
        <Card
        emoji ={Humble}
        heading={'TECH'}
        detail={"MERN"}
        />
      </div>
      </div>
    </div>
  )
}

export default Services