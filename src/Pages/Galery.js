import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import slide1 from "../Assets/slides/slide1A.jpg"; 
import slide2 from "../Assets/slides/slide2.png";
import slide3 from "../Assets/slides/slide3.jpg";
import slide1 from "../Assets/slides/slide1.jpg";

import sl1 from "../Assets/slides/JR1.JPG"
import sl2 from "../Assets/slides/JR2.jpg"
import sl3 from "../Assets/slides/JR3.JPG"
import sl4 from "../Assets/slides/JR4.JPG"
import sl5 from "../Assets/slides/JR5.JPG"
// import slide4 from "../Assets/slides/slide4.jpg";
// import slide5 from "../Assets/slides/slide5.jpg";
// import slide6 from "../Assets/slides/slide6.jpg";
import './Galery.css'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3 
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  
function Galery(props) {
    const data = [
        {
          image: slide2,
          caption: "San Francisco"
        },
        {
          image: slide3,
          caption: "Scotland"
        },
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    return (
        <div>
            <div className="biso-photo">Wedding photography</div>
            <Carousel 
                focusOnSelect={true}
                partialVisible={true}
                // controls={false} 
                indicators 
                // interval={200} 
                pause={false}
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // // autoPlay ={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                // customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"s
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
               
                <div> <img  className="d-block w-100" src={sl1} alt="slide1" /></div>
                <div> <img  className="d-block w-100" src={sl2} alt="slide2" /></div>
                <div> <img  className="d-block w-100" src={sl3} alt="slide1" /></div>
                <div> <img  className="d-block w-100" src={sl4} alt="slide1" /></div>
                <div> <img  className="d-block w-100" src={sl5} alt="slide1" /></div>
                <div> <img  className="d-block w-100" src={sl2} alt="slide2" /></div>
                <div> <img  className="d-block w-100" src={sl1} alt="slide1" /></div>
                <div> <img  className="d-block w-100" src={sl3} alt="slide1" /></div>
            </Carousel>

            <div className="biso-Video">
                Biso Videography
                
            </div>

            <div>
            <Carousel 
                focusOnSelect={true}
                partialVisible={true}
                // controls={false} 
                indicators 
                // interval={200} 
                pause={false}
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // // autoPlay ={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                // customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"s
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div> <img  className="d-block w-100" src={slide2} alt="slide2" /></div>
                <div> <img  className="d-block w-100" src={slide3} alt="slide1" /></div>
                <div> <img  className="d-block w-100" src={slide2} alt="slide1" /></div>
                <div> <img  className="d-block w-100" src={slide3} alt="slide1" /></div>
                <div> <img  className="d-block w-100" src={slide2} alt="slide2" /></div>
                <div> <img  className="d-block w-100" src={slide3} alt="slide1" /></div>
                <div> <img  className="d-block w-100" src={slide2} alt="slide1" /></div>
                
            </Carousel>
            </div>

            <div>Music Videos</div>
        </div>
    )
}

export default Galery

