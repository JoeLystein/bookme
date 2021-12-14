import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/OurApps.css"


class OurApps extends Component {
    render() { 
        return (
            <div className="container-full">
                 {/* <header>
                    <nav class="navbar navbar-expand-md navbar-light fixed-top bg-warning">
                        <a class="navbar-brand" href="#">Carousel</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form class="form-inline mt-2 mt-md-0">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        </div>
                    </nav>
                </header> */}
                <main role="main">
                    <div id="mycarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#mycarousel" data-slide-to="0" class="active"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div class="carousel-item active">
                                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="lightgrey"/></svg>
                                <div className="container">
                                    <div className="carousel-caption text-left text-dark">
                                        <h1>Biso Productions</h1>
                                        <p>Stay Connected with our headquaters program.</p>
                                        <p><a class="btn btn-lg btn-primary" href="https://www.spotify.com/us/download/android/" role="button">download</a></p>
                                    </div>
                                </div>
                            </div>   
                        </div>    
                        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>


                </main>

                <div class="container marketing">
                    <div class="row">
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            <h2>JR Dev App</h2>
                            <p>Download this app if you want to contact our Developper</p>
                            {/* eslint-disable-next-line */}
                            <p><a class="btn btn-secondary" href="#" role="button">Download &raquo;</a></p>
                        </div>
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            <h2>Bible App</h2>
                            <p>For Your Spirituall Need download our bible App</p>
                            {/* eslint-disable-next-line */}
                            <p><a class="btn btn-secondary" href="#" role="button">Download &raquo;</a></p>
                        </div>
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            <h2>Rhema Gospel App</h2>
                            <p>This App Will help you to stay in connected to rhema gospel schedule and program.</p>
                            {/* eslint-disable-next-line */}
                            <p><a class="btn btn-secondary" href="#" role="button">Download &raquo;</a></p>
                        </div>
                        </div>



                </div>
            
            
            
            </div>

        ); 
    }
}
 
export default OurApps;