import React from 'react'
import ServiceCard from "./ServicesCard"
import {Col} from  "reactstrap"

import weatherImg from "../assets/images/weather.png"
import guideImg from "../assets/images/guide.png"
import customizationImg from "../assets/images/customization.png"

const serviceData = [
    {
        imgUrl: weatherImg,
        title:"Calculate Weather",
        desc: "Get accurate and up-to-date weather forecasts for your travel destinations to plan accordingly."
    },
    {
        imgUrl: guideImg,
        title:"Best Tour Guide",
        desc: "Connect with knowledgeable and friendly tour guides who enhance your travel experience with local insights."
    },
    {
        imgUrl: customizationImg,
        title:"Customization",
        desc: "Tailor your travel itinerary to fit your preferences, interests, and budget for unforgettable adventures."
    },
]

const ServicesList = () => {
  return <>
    {
        serviceData.map((item,index) =>(
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
                <ServiceCard item={item}/>
            </Col>   
        ))
    }
  </>
}

export default ServicesList