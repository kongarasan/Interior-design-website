import React from 'react'
import "./Projects.css"
import Project01 from "../../../assests/project01.png"
import Button from "../../../assests/button.png"
import Project02 from "../../../assests/project02.png"
import Project03 from "../../../assests/project03.png"
import Project04 from "../../../assests/project04.png"

const Project = () => {
  return (
    <div className='Project'>
        <div className='Project-desc'>
            <h1>Follow Our Projects</h1>
            <span>It is a long established fact that a reader will be distracted by the of readable <br/>content of page  lookings at its layouts  points.</span>
        </div>
        <div className='Full'>
        <div className='Project01'>
            <img src={Project01}></img>
            <div className='Project-name'>
            <div className='name'>
                <h3>Modern Kitchan</h3>
                <span>Decor / Artchitecture</span>
                </div>
                 <img src={Button}></img>
            </div>

        </div>
        <div className='Project01'>
            <img src={Project02}></img>
            <div className='Project-name'>
            <div className='name'>
                <h3>Modern Kitchan</h3>
                <span>Decor / Artchitecture</span>
                </div>
                 <img src={Button}></img>
            </div>

        </div>
        </div>
        <div className='Full'>
        <div className='Project01'>
            <img src={Project03}></img>
            <div className='Project-name'>
            <div className='name'>
                <h3>Modern Kitchan</h3>
                <span>Decor / Artchitecture</span>
                </div>
                 <img src={Button}></img>
            </div>

        </div>
        <div className='Project01'>
            <img src={Project04}></img>
            <div className='Project-name'>
            <div className='name'>
                <h3>Modern Kitchan</h3>
                <span>Decor / Artchitecture</span>
                </div>
                 <img src={Button}></img>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Project