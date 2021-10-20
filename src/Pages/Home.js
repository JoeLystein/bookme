import React from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from "react-bootstrap/Carousel"; 
import slide1 from "../Assets/slides/slide1A.jpg"; 
import slide2 from "../Assets/slides/slide2.png";
import slide3 from "../Assets/slides/slide3.jpg";
import slide4 from "../Assets/slides/slide4.jpg";
import slide5 from "../Assets/slides/slide5.jpg";
import slide6 from "../Assets/slides/slide6.jpg";
// import { CarouselItem } from 'react-bootstrap';

function Home() {
    return (
        <div>
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <img  className="d-block w-100" src={slide1} alt="slide1"/>
                    {/* <Carousel.Caption><h1>We do Magazin-Design</h1></Carousel.Caption> */}
                </Carousel.Item >
                <Carousel.Item>
                    <img  className="d-block w-100" src={slide2} alt="slide1" />
                    {/* <Carousel.Caption><h1>We do Web Design</h1></Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img  className="d-block w-100" src={slide3} alt="slide1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img  className="d-block w-100" src={slide4} alt="slide1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img  className="d-block w-100" src={slide5} alt="slide1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img  className="d-block w-100" src={slide6} alt="slide1"/>
                </Carousel.Item>
            </Carousel>
          
        </div>
        
    )
}

export default Home
