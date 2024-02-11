import React from 'react'
import "./About.css"
import person1 from "../../../assests/person1.png"
import person2 from "../../../assests/person2.png"
import person3 from "../../../assests/person3.png"

const About = () => {
    return (
        <div className='about'>
            <h1>What the People Thinks<br />
                About Us</h1>
            <div className='us'>
                <div className='client'>
                    <div className='image'>
                        <img src={person1} ></img>
                        <div className='name'>
                            <h4>Nattasha Mith</h4>
                            <p>Sydney, USA</p>
                        </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy
                        text of the typesetting industry.
                        Ipsum has been.</p>
                </div>
                <div className='client'>
                    <div className='image'>
                        <img src={person2} ></img>
                        <div className='name'>
                            <h4>Raymond Galario</h4>
                            <p>Sydney,  Australia</p>
                        </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy
                        text of the typesetting industry.
                        Ipsum has been scrambled it
                        to make a type book.</p>
                </div>
                <div className='client'>
                    <div className='image'>
                        <img src={person3} ></img>
                        <div className='name'>
                            <h4>Benny Roll</h4>
                            <p>Sydney, New York</p>
                        </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy
                        text of the typesetting industry.
                        Ipsum has been scrambled.</p>
                </div>
            </div>

        </div>
    )
}

export default About