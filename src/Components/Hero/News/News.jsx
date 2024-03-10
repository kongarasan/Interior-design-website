import React from 'react'
import "./News.css"
import kitchen from "../../../assests/kitchen.png"
import living from "../../../assests/living01.png"
import interior from "../../../assests/interior.png"
import arrow from "../../../assests/arrow.png"
import arrow1 from "../../../assests/arrow1.png"
const News = () => {
    return (
        <div className='News'>
            <h1>Articles & News</h1>
            <p>It is a long established fact that a reader will be distracted by the of readable content <br /> of a page when lookings at its layouts the points of using.</p>
            <div className='division'>
                <div className='kitchen-design'>
                    <div className='kitchen-img'>
                        <img src={kitchen}></img>
                        <div className='division-name'>
                            <p>Kitchen Design</p>
                        </div>

                    </div>

                    <h3>Let’s Get Solution For<br />Building Construction<br /> Work.</h3>
                    <div className='publish-date'>
                        <p>25 December,2022 </p>
                        <div className='publish-icon'><img src={arrow}></img></div>

                    </div>


                </div>
                <div className='living-design'>
                    <div className='kitchen-img'>
                        <img src={living}></img>
                        <div className='division-name'>
                            <p>Living Design</p>
                        </div>
                    </div>

                    <h3>Low Cost Latest Invented<br /> Interior Designing<br /> Ideas.</h3>

                    <div className='publish-date'>
                        <p>25 December,2022 </p>
                        <div className='publish-icon-l'><img src={arrow}></img></div>

                    </div>
                </div>

                <div className='interior-design'>
                    <div className='kitchen-img'>
                        <img src={interior}></img>
                        <div className='division-name'>
                            <p>Interior Design</p>
                        </div>
                    </div>

                    <h3>Best For Any Office &<br /> Business Interior <br />Solution</h3>
                    <div className='publish-date'>
                        <p>25 December,2022 </p>
                        <div className='publish-icon'><img src={arrow}></img></div>

                    </div>
                </div>
            </div>
          
            <div className='News-join'>
                <h1>Wanna join the interno?</h1>
                <p>It is a long established fact  will be distracted</p>
                <button className='contact-btn'>
                    <p>Contact with us</p>
                    <img src={arrow1}></img>
                </button>
            </div>

        </div>
    )
}

export default News