import React, { Component } from 'react'
// import bp1 from "../Assets/slides/bisoP1.jpg";
import fa1 from "../Assets/fashion/fashio1.jpeg"; 
import fa2 from "../Assets/fashion/fashion2.jpeg"; 
import fa3 from "../Assets/fashion/fashion3.jpeg"; 
import fa4 from "../Assets/fashion/fashion4.jpeg"; 
import fa5 from "../Assets/fashion/fashion5.jpeg"; 
import fa6 from "../Assets/fashion/fashion6.jpeg"; 
import fa7 from "../Assets/fashion/fashion7.jpeg"; 
import fa8 from "../Assets/fashion/fashion8.jpeg"; 
import fa9 from "../Assets/fashion/fashion9.jpeg"; 
class Fashion extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         imgP : ['../Assets/fashion/fashio1.jpeg','../Assets/fashion/fashio1.jpeg', 'fa3', 'fa4', 'fa5', 'fa6', 'fa7', 'fa8','fa9']
    //     }
    // }
    render() { 
        return (
        <div className="container bg-light" >
            <section class="py-5 text-center container bg-dark">
                    <div class="row py-lg-5">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="fw-light" style={{color:"white"}}>Fashion Album</h1>
                            <p class="lead text-muted">
                                Business name for the fashion
                                <strong> Joel Jeans</strong> is there for you
                            </p>
                            <p>
                                <a href="/portrait" class="btn btn-primary my-2">Portrait</a>
                                <a href="/photo" class="btn btn-secondary my-2">Photo Album</a>
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
                                        <img src={fa1} className="bd-placeholder-img card-img-top" width="100%" height="450px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>  

                                <div className="col">
                                    <div className="card mb-4 shadow-sm">                        
                                        <img src={fa2} className="bd-placeholder-img card-img-top" width="100%" height="450px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>  

                                <div className="col">
                                    <div className="card mb-4 shadow-sm">                        
                                        <img src={fa4} className="bd-placeholder-img card-img-top" width="100%" height="450px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>  


                                <div className="col">
                                    <div className="card mb-4 shadow-sm">                        
                                        <img src={fa6} className="bd-placeholder-img card-img-top" width="100%" height="450px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>  

                                <div className="col">
                                    <div className="card mb-4 shadow-sm">                        
                                        <img src={fa7} className="bd-placeholder-img card-img-top" width="100%" height="450px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>  

                                <div className="col">
                                    <div className="card mb-4 shadow-sm">                        
                                        <img src={fa8} className="bd-placeholder-img card-img-top" width="100%" height="450px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>  


                                <div className="col">
                                    <div className="card mb-4 shadow-sm">                        
                                        <img src={fa9} className="bd-placeholder-img card-img-top" width="100%" height="450px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>  

                                <div className="col">
                                    <div className="card mb-4 shadow-sm">                        
                                        <img src={fa3} className="bd-placeholder-img card-img-top" width="100%" height="450px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>  

                                <div className="col">
                                    <div className="card mb-4 shadow-sm">                        
                                        <img src={fa5} className="bd-placeholder-img card-img-top" width="100%" height="450px" alt="logo"/>
                                        <div className="card-body">
                                            {/* <p class="card-text">This is a wider card with.</p> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                </div>
                                                <small className="text-muted">Biso Productions 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>  
                        </div>
                </div>
        </div>);
    }
}
 
export default Fashion;