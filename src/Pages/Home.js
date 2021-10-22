import React from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from "react-bootstrap/Carousel"; 
// import slide1 from "../Assets/slides/slide1A.jpg"; 
import slide2 from "../Assets/slides/slide2.png";
import slide3 from "../Assets/slides/slide3.jpg";
// import slide4 from "../Assets/slides/slide4.jpg";
// import slide5 from "../Assets/slides/slide5.jpg";
// import slide6 from "../Assets/slides/slide6.jpg";

import sl1 from "../Assets/slides/JR1.JPG"
import sl2 from "../Assets/slides/JR2.jpg"
import sl3 from "../Assets/slides/JR3.JPG"
import sl4 from "../Assets/slides/JR4.JPG"
import sl5 from "../Assets/slides/JR5.JPG"
import './Home.css'
// import { CarouselItem } from 'react-bootstrap';

function Home() {
    return (
        <div>
            <Carousel controls={false} indicators interval={2500} pause={false}>
                {/* <Carousel.Item>
                    <img  className="d-block w-100" src={slide1} alt="slide1"/>
                    <Carousel.Caption><h1>We do Magazin-Design</h1></Carousel.Caption> */}
                {/* </Carousel.Item > */}
                <Carousel.Item>
                    <img  className="d-block w-100" src={sl1} alt="slide1" />
                    {/* <Carousel.Caption><h1>We do Web Design</h1></Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img  className="d-block w-100" src={sl2} alt="slide1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img  className="d-block w-100" src={sl3} alt="slide1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img  className="d-block w-100" src={sl4} alt="slide1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img  className="d-block w-100" src={sl5} alt="slide1"/>
                </Carousel.Item>
            </Carousel>
        </div>
        
    )
}

export default Home
