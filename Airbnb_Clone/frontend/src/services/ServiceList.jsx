import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl :weatherImg,
        title : 'Calculate Weather',
        desc: 'Check real-time weather to plan your trips and pack smart.',
    },
    {
        imgUrl :guideImg,
        title : 'Best Tour Guide',
        desc : 'Discover expert guides for unforgettable local experiences.',
    },
    {
        imgUrl :customizationImg,
        title : 'Customization',
        desc : 'Tailor your trips to fit your unique preferences and needs.',
    },
]
const ServiceList = () => {
  return (
    <>
     {
        servicesData.map((item, index) => (
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>
    ))
     } 
    </>
  )
}

export default ServiceList
