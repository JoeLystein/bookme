import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; 

import bp1 from "../../Assets/slides/bisoP1.jpg";
import bp2 from "../../Assets/slides/bisoP2.jpg";
import bp3 from "../../Assets/slides/bisoP3.jpg";
import bp4 from "../../Assets/slides/bisoP4.jpg";
import bp5 from "../../Assets/slides/bisoP5.jpg";
import bp6 from "../../Assets/slides/bisoP6.jpg";
import bp7 from "../../Assets/slides/bisoP7.jpg";
// import bp8 from "../../Assets/slides/bisoP8.jpg"
// import bp5 from "../../Assets/slides/bisoP5.jpg"
import img1 from './DSC_4301.JPG';
import img2 from './DSC_4302copy.jpg';
import img3 from './DSC_9609.JPG';
import img4 from './DSC_4356.JPG'; 
import img5 from "../../Assets/slides/slide1A.jpg"; 
import img6 from "../../Assets/slides/slide2.png";
import img7 from "../../Assets/slides/slide3.jpg";
import img8 from "../../Assets/slides/slide1.jpg";
import img9 from "../../Assets/slides/JR1.JPG"
import img10 from "../../Assets/slides/JR2.jpg";

import img11 from "../../Assets/slides/JR4.JPG";
import img12 from "../../Assets/slides/JR5.JPG"
import sl4 from "../../Assets/slides/JR4.JPG"
import sl5 from "../../Assets/slides/JR5.JPG"
// import slide4 from "../Assets/slides/slide4.jpg";
// import slide5 from "../Assets/slides/slide5.jpg";
// import slide6 from "../Assets/slides/slide6.jpg";

// import studio1 from "../Assets/slides/DSC04827.jpg";
// import studio2 from "../Assets/slides/DSC04828.jpg";
// import studio3 from "../Assets/slides/DSC04834.jpg";
// import studio4 from "../Assets/slides/DSC04835.jpg";
// import studio5 from "../Assets/slides/DSC04886.jpg";

class Photoshooting extends Component {
    render() { 
        return (
            <div>
                <header>
                    <div class="navbar navbar-dark bg-danger shadow-sm">
                        <div class="container">
                        {/* eslint-disable-next-line */}
                        <a href="#" class="navbar-brand d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                            <strong>Photos</strong>
                        </a>
                        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button> */}
                        </div>
                    </div>
                </header>

                <main>
                    <section class="py-5 text-center container">
                        <div class="row py-lg-5">
                            <div class="col-lg-6 col-md-8 mx-auto">
                                <h1 class="fw-light">Photo Album</h1>
                                <p class="lead text-muted">In this section you will find portrait picture and fashion pictures or, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                                <p>
                                    <a href="/portrait" class="btn btn-primary my-2">Portrait</a>
                                    <a href="/fashion" class="btn btn-secondary my-2">Fashion</a>
                                    <a href="/wedding" class="btn btn-success my-2">Wedding</a>
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <div className="col">
                                    <div className="card mb-4 shadow-sm">                                    
                                        <img src={bp1} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={bp2} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={bp3} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={bp4} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={bp5} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={bp6} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={bp7} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={sl4} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={sl5} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={img10} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={img11} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={img12} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                                           

{/* End */}

                </main>
            </div>
        );
    }
}
 
export default Photoshooting;


