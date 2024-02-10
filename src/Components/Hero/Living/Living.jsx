import React from 'react'
import "./Living.css"
import img from "../../../assests/living.png"
import contact from "../../../assests/Call Icon.png"
const Living = () => {
    return (
        <div className='living'>
            <div className='content'>
                <h1>We Create The Art<br />
                    Of Stylish Living<br />
                    Stylishly</h1>
                <p>It is a long established fact that a reader will be<br /> distracted by the of readable content of a page <br />
                    when lookings at its layouts the points of using <br />
                    that it has a more-or-less normal.</p>
                <div className='contact'>
                    <div className='contact-img'>
                        <img src={contact}></img>
                    </div>
                    <div className='contact-num'>
                        <h4>012345678</h4>
                        <p>Call Us Anytime</p>
                    </div>
                </div>
                <button className='btn'>Get Free Estimate<i class='bx bx-right-arrow-alt bx-sm'></i></button>
            </div>
            <div className='img'>
                <img src={img} alt='livingimg'></img>

            </div>
        </div>
    )
}

export default Living