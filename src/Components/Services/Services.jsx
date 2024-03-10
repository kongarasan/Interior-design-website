import React from 'react'
import "./Service.css"
import service from "../../assests/service.png"

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
                

            </div>



        </div>
    )
}

export default Service