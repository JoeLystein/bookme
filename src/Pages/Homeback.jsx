import React from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel"; 
import bp1 from "../Assets/slides/bisoP1.jpg";
import bp2 from "../Assets/slides/bisoP2.jpg"
import bp3 from "../Assets/slides/bisoP3.jpg"
import bp7 from "../Assets/slides/bisoP7.jpg"
import bp5 from "../Assets/slides/bisoP5.jpg"
import bp10 from "../Assets/slides/bisoP10.jpeg";
import bp16 from "../Assets/slides/bisoP20.JPG"



import './Home.css'

function Home() {
    return (
        <div>
            <Carousel controls={false} indicators interval={10000} pause={false}>
                <Carousel.Item width="10%" height="225" >
                    <img  className="d-block w-100 custom-img" src={bp1} alt="Responsive image" />
                    {/* <Carousel.Caption><h1>Wedding</h1></Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={bp2} alt="slide2"/>
                    {/* <Carousel.Caption><h1>Photoshooting</h1></Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item >
                    <img className=" w-100 custom-img" src={bp3} alt="slide2"/>
                    {/* <Carousel.Caption><h1>Web Design</h1></Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                    <img  className="d-block w-100 custom-img" src={bp7} alt="slide1" />
                    {/* <Carousel.Caption><h1>Wedding</h1></Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item width="10%" height="225">
                    <img  className="d-block w-100 custom-img" src={bp5} alt="slide1" />
                    {/* <Carousel.Caption><h1>Wedding</h1></Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item width="10%" height="225">
                    <img  className="d-block w-100 custom-img" src={bp3} alt="slide1" />
                    {/* <Carousel.Caption><h1>Wedding</h1></Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item width="10%" height="225">
                    <img  className="d-block w-100 custom-img" src={bp10} alt="slide1" />
                    {/* <Carousel.Caption><h1>Wedding</h1></Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item width="10%" height="225">
                    <img  className="d-block w-100 custom-img" src={bp16} alt="slide1" />
                    {/* <Carousel.Caption><h1>Wedding</h1></Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
        
    )
}


export default Home
