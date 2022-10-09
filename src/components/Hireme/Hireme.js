import React from 'react'
import './Hireme.css'
import Upwork from '../../icons&photo/Upwork.png'
import linkedIn from '../../icons&photo/linkedin.png'
import telegram from '../../icons&photo/telegram.png'
import fiver from '../../icons&photo/fiverr.png'


const Hireme = () => {
  return (
   <>
   <div className='hire'>

    <div className='mainCircle'>
        <div className='secCircle'>
            <img src={Upwork} alt =""/>
            </div>
            <div className='secCircle'>
            <img src={linkedIn} alt =""/>
            </div>
            <div className='secCircle'>
            <img src={telegram} alt ="" style={{height:"100px"}}/>
            </div>
            <div className='secCircle'>
            <img src={fiver} alt =""/>
            </div>
            
           
           
        
    </div>

    <div className='backCircle Blue'></div>
    <div className='backCircle Yellow'></div>

   </div>
   </>
  )
}

export default Hireme