import React from 'react'
import "./ServicesCard.css"

const ServicesCard = ({item}) => {
    const {imgUrl ,title,desc} = item
    
    return <div className="service_item">
    <div className='service_img'>
        <img src={imgUrl} alt=''/>
    </div>
    <h5>{title}</h5>
    <p>{desc}</p>
    </div>
}

export default ServicesCard