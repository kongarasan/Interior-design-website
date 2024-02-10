import React from 'react'
import './Hero.css'

import hero from "../../assests/hero1.png"

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-img'>
                <img src={hero} alt=''></img>
                <div className='title'>Let Your Home<br />Be Unique

                    <div className='desc'>There are many variations of the passages of lorem Ipsum<br />fromavailable,variations of the passages.</div>
                    <button className='btn'>Get Started <i class='bx bx-right-arrow-alt bx-sm'></i></button>
                </div>

            </div>

        </div>
    )
}

export default Hero