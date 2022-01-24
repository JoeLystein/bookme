import React from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel"; 
import home1 from "../Assets/slides/home1.jpg"



import './Home.css'

function Home() {
    return (
        <div>
            <Carousel controls={false} indicators interval={10000} pause={false}>
                <Carousel.Item width="10%" height="225" >
                    <img  className="d-block w-100 custom-img" src={home1} alt="Responsive image" />
                    {/* <Carousel.Caption><h1>Wedding</h1></Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
        
    )
}


export default Home
