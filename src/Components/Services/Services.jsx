import React from 'react'
import "./Service.css"
import service from "../../assests/service.png"
import service01 from "../../assests/service1.png"
import service01icon from "../../assests/service-Icon01.png"
import service03 from "../../assests/service3.png"
import service03icon from "../../assests/service-Icon03.png"
import service02 from "../../assests/service2.png"
import service04 from "../../assests/service4.png"
import service02icon from "../../assests/service-Icon02.png"
import service04icon from "../../assests/service-Icon04.png"
import arrow1 from "../../assests/arrow1.png"

const Service = () => {
    return (
        <div className='service'>
            <div className='main'>
                <img src={service}></img>
                <div className='main-name'>
                    <h1>Services</h1>
                    <h4>Home / Services</h4>
                </div>


            </div>

            <div className='service-plan'>
                <div className='project-plan'>
                    <h3>Project Plan</h3>
                    <p>There are many variations of the<br />passages of lorem Ipsum from <br />
                        available, majority.</p>
                    <div className='read'>Read Me<i class='bx bx-right-arrow-alt bx-sm'></i></div>

                </div>
                <div className='Interior'>
                    <h3>Interior Work</h3>
                    <p>There are many variations of the<br /> passages of lorem Ipsum from <br />
                        available, majority.</p>
                    <div className='read'>Read Me<i class='bx bx-right-arrow-alt bx-sm'></i></div>
                </div>
                <div className='Realization'>
                    <h3>Realization</h3>
                    <p>There are many variations of the<br /> passages of lorem Ipsum from <br />
                        available, majority.</p>
                    <div className='read'>Read Me<i class='bx bx-right-arrow-alt bx-sm'></i></div>
                </div>


            </div>
            <div className='service-plan'>
                <div className='project-plan'>
                    <h3>2d/3d Art Work  </h3>
                    <p>There are many variations of the<br />passages of lorem Ipsum from <br />
                        available, majority.</p>
                    <div className='read'>Read Me<i class='bx bx-right-arrow-alt bx-sm'></i></div>

                </div>
                <div className='services-Interior'>
                    <h3>Interior Work</h3>
                    <p>There are many variations of the<br /> passages of lorem Ipsum from <br />
                        available, majority.</p>
                    <div className='read'>Read Me<i class='bx bx-right-arrow-alt bx-sm'></i></div>
                </div>
                <div className='Realization'>
                    <h3>Decoration Work</h3>
                    <p>There are many variations of the<br /> passages of lorem Ipsum from <br />
                        available, majority.</p>
                    <div className='read'>Read Me<i class='bx bx-right-arrow-alt bx-sm'></i></div>
                </div>


            </div>

            <div className='service-work'>
                <div className='service-title'>
                    <h1>How We Work</h1>
                    <p>It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of<br />    the printing and typesetting industry.</p>

                </div>

                <div className='service-one'>
                    <img src={service01}></img>
                    <div className='service-one-title'>
                        <div className='service-icon'>
                            <img src={service01icon}></img>
                            <h1>01</h1>
                        </div>
                        <h2>Concept & Details</h2>
                        <p>It is a long established fact  will be distracted.<br />
                            Lorem Ipsum is simply dummy from text of the<br />
                            and typesetting indufstry. </p>

                    </div>
                </div>

                <div className='service-one'>
                    
                    <div className='service-one-title'>
                        <div className='service-icon'>
                            <img src={service02icon}></img>
                            <h1>02</h1>
                        </div>
                        <h2>Idea for Work</h2>
                        <p>It is a long established fact  will be distracted.<br />
                            Lorem Ipsum is simply dummy from text of the<br />
                            and typesetting indufstry. </p>

                    </div>
                    <img src={service02}></img>
                </div>



                <div className='service-one'>
                    <img src={service03}></img>
                    <div className='service-one-title'>
                        <div className='service-icon'>
                            <img src={service03icon}></img>
                            <h1>03</h1>
                        </div>
                        <h2>Design</h2>
                        <p>It is a long established fact  will be distracted.<br />
                            Lorem Ipsum is simply dummy from text of the<br />
                            and typesetting indufstry. </p>

                    </div>
                </div>


                <div className='service-one'>
                    
                    <div className='service-one-title'>
                        <div className='service-icon'>
                            <img src={service04icon}></img>
                            <h1>04</h1>
                        </div>
                        <h2>Perfection</h2>
                        <p>It is a long established fact  will be distracted.<br />
                            Lorem Ipsum is simply dummy from text of the<br />
                            and typesetting indufstry. </p>

                    </div>
                    <img src={service04}></img>
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

export default Service