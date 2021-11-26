import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel"; 
import sl4 from "../Assets/slides/slide3.jpg";
import sl2 from "../Assets/slides/JR2.jpg"
import sl3 from "../Assets/slides/DSC04828.jpg";

import './Home.css'

function Home() {
    return (
        <div>
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <img  className="d-block w-100 custom-img" src={sl2} alt="slide1" />
                    <Carousel.Caption><h1>Wedding</h1></Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={sl4} alt="slide2"/>
                    <Carousel.Caption><h1>Photoshooting</h1></Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item width="100%" height="225">
                
                    <img className="d-block w-100 custom-img" src={sl3} alt="slide2"/>
                    <Carousel.Caption><h1>Web Design</h1></Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
    )
}


export default Home
