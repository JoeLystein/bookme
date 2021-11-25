import React from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from "react-bootstrap/Carousel"; 

import sl4 from "../Assets/slides/slide3.jpg";
// import sl4 from "../Assets/slides/biso1.jpg";
// import sl5 from "../Assets/slides/biso2.jpg";
// import sl6 from "../Assets/slides/biso3.jpg";
import sl2 from "../Assets/slides/JR2.jpg"

import './Home.css'

function Home() {
    return (
        <div>
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <img  className="d-block w-100 custom-img" src={sl2} alt="slide1" />
                    <Carousel.Caption><h1>Web Design</h1></Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
    )
}


export default Home
