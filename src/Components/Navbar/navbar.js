import React, { useState } from 'react'
import './navbar.css'
import logo from "../../assests/logo.png"
import search from "../../assests/Search.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const[menu,setMenu]=useState("Home");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' className='logo'></img>
        <p>Interno</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration:'none',color:'#626262'}}  to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Pages")}}><Link style={{textDecoration:'none',color:'#626262'}} to='/pages'>Pages</Link>{menu==="Pages"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Services")}}><Link style={{textDecoration:'none',color:'#626262'}} to='/services'>Services</Link>{menu==="Services"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Project")}}><Link style={{textDecoration:'none',color:'#626262'}} to='/projects'>Project</Link>{menu==="Project"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Blog")}}><Link style={{textDecoration:'none',color:'#626262'}} to='blog'>Blog</Link>{menu==="Blog"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Contact")}}><Link style={{textDecoration:'none',color:'#626262'}} to='contact'>Contact</Link>{menu==="Contact"?<hr/>:<></>}</li>
        <img src={search} alt='search' className='search'></img>
      </ul>
      

    </div>
  )
}

export default Navbar