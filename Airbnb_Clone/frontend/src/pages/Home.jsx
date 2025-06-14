import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import worldImg from '../assets/images/world.png'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return (
    <>
    <Container>
      <Row>
        <Col  lg="6">
        <div className="hero__content">
          <div className="hero__subtitle d-flex align-items-center">
            <Subtitle subtitle={'Know Before You Go'}/>
            <img src={worldImg} alt="" />
          </div>
          <h1>Traveling opens the door to creating <span className="highlight">
            memories</span></h1>
            <p>Embark on journeys that transform ordinary days into extraordinary memories. Whether it's exploring bustling cityscapes, basking on serene beaches, or wandering through historic landmarks, travel connects you to new experiences and cherished moments. Every adventure is an opportunity to meet new people, discover hidden gems, and create stories worth sharing for a lifetime.</p>
        </div>
        </Col>
        <Col lg="2">
        <div className="hero__img-box">
          <img src={heroImg} alt="" />
        </div>
        </Col>
        <Col lg="2">
        <div className="hero__img-box mt-4">
          <video src={heroVideo} alt="" controls/>
        </div>
        </Col>
        <Col lg="2">
        <div className="hero__img-box mt-5">
          <img src={heroImg02} alt="" />
        </div>
        </Col>
        <SearchBar/>
      </Row>
    </Container>
    <section>
      <Container>
        <Row>
          <Col lg="3">
          <h5 className="services__subtitle">What we serve</h5>
          <h2 className='services__title'>We offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg ='12' className="mb-5">
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured__tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className="experience__countent">
          <Subtitle subtitle={'Experience'}/> 
        <h2 >With our all experience <br/> we will serve you </h2>
        <p>Leverage our expertise to ensure you have the best travel experience, tailored just for you. 
          <br />
          From personalized itineraries to local recommendations, we’re here to make every journey unforgettable.</p>
           <div className="counter__wrapper d-flex align-items-center gap-5">
            <div className="counter__box">
              <span>12K+</span>
              <h6>Successful trip</h6>
            </div>
            <div className="counter__box">
              <span>2K+</span>
              <h6>Regular clients</h6>
            </div>
            <div className="counter__box">
              <span>15</span>
              <h6>Years experience</h6>
            </div>
           </div>
          </div>
          </Col>
          <Col lg='6'>
        <div className="experience__img">
          <img src={experienceImg} alt="" />
        </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={"Gallery"}/>
          <h2 className="gallery__title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
          <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={'Fans Love'}/>
          <h2 className="testimonial__title">What our fans say about us</h2>
          </Col>
          <Col lg="12">
          <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section>
    <Newsletter/>
    </>
  )
}

export default Home
