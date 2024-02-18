import React from 'react'
import "./Brand.css"
import brand01 from "../../../assests/brand01.png"
import brand02 from "../../../assests/brand02.png"
import brand03 from "../../../assests/brand03.png"
import brand04 from "../../../assests/brand04.png"
import brand05 from "../../../assests/brand05.png"
const Brand = () => {
  return (
    <div className='brandlogo'>
        <img src={brand01} className='b01'></img>
        <img src={brand02} className='b02'></img>
        <img src={brand03} className='b03'></img>
        <img src={brand04} className='b04'></img>
        <img src={brand05} className='b05'></img>
        
    </div>
  )
}

export default Brand