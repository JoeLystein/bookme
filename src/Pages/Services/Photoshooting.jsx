import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; 

import bp1 from "../../Assets/slides/bisoP1.jpg";
import bp2 from "../../Assets/slides/bisoP2.jpg";
import bp3 from "../../Assets/slides/bisoP3.jpg";
import bp4 from "../../Assets/slides/bisoP4.jpg";
import bp5 from "../../Assets/slides/bisoP5.jpg";
import bp6 from "../../Assets/slides/bisoP6.jpg";
import bp7 from "../../Assets/slides/bisoP7.jpg";
import bp8 from "../../Assets/slides/bisoP8.jpg";
import bp9 from "../../Assets/slides/bisoP9.jpg";
import bp10 from "../../Assets/slides/bisoP10.jpeg";
import bp11 from "../../Assets/slides/bisoP11.jpeg";
import bp12 from "../../Assets/slides/bisoP12.jpeg";
import bp13 from "../../Assets/slides/bisoP13.jpeg";
import bp14 from "../../Assets/slides/bisoP14.jpg";
import bp15 from "../../Assets/slides/bisoP15.jpg";
import bp16 from "../../Assets/slides/bisoP16.jpg";


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
                                <p class="lead text-muted">
                                   We can give a message to your beautiful moment and show your beauty to everyone
                                   <strong> Biso Productions</strong> is there for you
                                </p>
                                <p>
                                    <a href="/portrait" class="btn btn-primary my-2">Portrait</a>
                                    <a href="/fashion" class="btn btn-secondary my-2">Fashion</a>
                                    {/* <a href="/wedding" class="btn btn-success my-2">Wedding</a> */}
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <div className="col">
                                    <div className="card mb-4 shadow-sm">                                    
                                        <img src={bp1} className="bd-placeholder-img card-img-top" width="100%" height="500px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={bp2} className="bd-placeholder-img card-img-top" width="100%" height="500px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={bp7} className="bd-placeholder-img card-img-top" width="100%" height="500px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={bp3} className="bd-placeholder-img card-img-top" width="100%" height="500px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={bp4} className="bd-placeholder-img card-img-top" width="100%" height="500px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={bp8} className="bd-placeholder-img card-img-top" width="100%" height="500px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={bp11} className="bd-placeholder-img card-img-top" width="100%" height="500px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={bp5} className="bd-placeholder-img card-img-top" width="100%" height="500px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={bp9} className="bd-placeholder-img card-img-top" width="100%" height="500px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={bp6} className="bd-placeholder-img card-img-top" width="100%" height="500px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={bp10} className="bd-placeholder-img card-img-top" width="100%" height="500px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col">
                                    <div className="card mb-4 shadow-sm">
                                         <img src={bp13} className="bd-placeholder-img card-img-top" width="100%" height="500px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
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


