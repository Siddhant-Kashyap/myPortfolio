import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <>
    <div className='nWrapper'>
        <div className='nLeft'>
            <div className='nName'>
                Siddhant
            </div>
            <span>toggle</span>
        </div>
        <div className='nRight'>
            <div className='nList'>
                <ul style={{listStyleType:'none'}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Experience</li>
                </ul>
            </div>
            <button className='nButton'>Contact Me</button>
        </div>
    </div>
    
    </>
  )
}

export default Navbar