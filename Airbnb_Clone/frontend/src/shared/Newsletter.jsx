import React from 'react'

import '../styles/newsletter.css'

import { Container,Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'
const Newsletter = () => {
  return (
  <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
            <div className="newsletter__content">
                <h2>Subscribe now to get useful traveling information.</h2>

                <div className="newsletter__input">
                    <input type="email" placeholder='Enter your email' />
                    <button className='btn newsletter__btn'>Subscribe</button>
                </div>
                <p>Stay updated with the latest travel tips, destination guides, and exclusive offers. 
                    Enter your email below and never miss out on exciting travel opportunities!</p>
            </div>
            </Col>
            <Col lg='6'>
            <div className="newsletter__img">
                <img src={maleTourist} alt="" />
            </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Newsletter
