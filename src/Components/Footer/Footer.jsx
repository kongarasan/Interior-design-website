import React from 'react'
import "./Footer.css"
import logo from "../../assests/logo.png"
import facebook from "../../assests/facebook.png"
import linkedln from "../../assests/linkedln.png"
import twitter from "../../assests/twitter.png"
import instagram from "../../assests/instagram.png"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='main-footer'>
                <div className='brand'>
                    <div className='brand-logo'>
                        <img src={logo}></img>
                        <h1>Interno</h1>
                    </div>
                    <p>It is a long established fact that a reader<br /> will be distracted lookings.</p>
                    <div className='social_media'>
                        <img src={facebook} className='fb'></img>
                        <img src={twitter} className='tw'></img>
                        <img src={linkedln} className='lk'></img>
                        <img src={instagram} className='ig'></img>



                    </div>



                </div>
                <div className='pages'>
                    <h4>Pages</h4>
                    <ul className='pages-class'>
                        <li>About Us</li>
                        <li>Our Projects</li>
                        <li>Our Team</li>
                        <li>Contact Us
                        </li>
                        <li>Services</li>
                    </ul>
                </div>
                <div className='services'>
                    <h4>Services</h4>
                    <ul className='pages-class'>
                        <li>Kitchan</li>
                        <li>Bathroom</li>
                        <li>Living Area</li>
                        <li>Dinning Hall</li>
                        <li>Bedroom</li>
                    </ul>


                </div>
                <div className='contacts'>
                    <h4>Contact</h4>
                    <p>55 East Birchwood Ave.<br/> Brooklyn, New York 11201
                       </p>
                    <p>contact@interno.com</p>
                    <p> (123) 456 - 7890</p>
                </div>

            </div>

        <div className='footer-copyright'>
        <hr />
                <p>Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</p>

        </div>


        </div>
    )
}

export default Footer