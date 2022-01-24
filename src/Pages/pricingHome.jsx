import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"; 

class PricingHome extends Component {
    render() { 
        return (
            <div className="container py-3">
                   <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
                        <symbol id="check" viewBox="0 0 16 16">
                            <title>Check</title>
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                        </symbol>
                    </svg> 
                <div>
                    <header>
                        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                            <h1 className="display-4 fw-normal" style={{color:'black'}}>BISO PRODUCTIONS PRICING</h1>
                            <hr/>
                            <div className="py-1text-center">
                                {/* <p className="fs-5 text-muted">
                                    You have been planning, dreaming and praying for this day your entire life, 
                                    and it has finally arrived!
                                </p> */}
                                <p className="fs-5 text-muted">We are ready to help you, so let's get connected. 
                                </p>
                                <p>
                                    <a href="/videopricing" class="btn btn-primary my-2">Video</a>
                                    <a href="/photopricing" class="btn btn-secondary my-2">Photo</a>
                                    {/* <a href="/wedding" class="btn btn-success my-2">Wedding</a> */}
                                </p>
                                
                            </div>
                        </div>
                    </header>
                </div>
    
                <main>
    
                    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        {/* <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm border-warning">
                                <div class="card-header py-3 bg-warning">
                                    <h4 class="my-0 fw-normal text-primary">Basic Package</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title text-danger">$1500
                                    </h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li> 8 Hours video coverage</li>
                                        <li>1 Videographer</li>
                                        <li>2 Cameras 4k</li>
                                        <li>No Highlight Video</li>
                                        <li>30 min Video Edited</li> 
                                    </ul>
                                    <button type="button" class="w-100 btn btn-lg btn-success" value="basic">Select</button>
                                </div>
                            </div>
                        </div> */}
    
                        {/* col 2 */}
                        {/* <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm border-warning">
                                <div class="card-header py-3 bg-warning">
                                    <h4 class="my-0 fw-normal text-white">Upgrade Package</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title text-danger">$2000
                                    </h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>12 Hours video coverage</li>
                                        <li>2 videographers</li>
                                        <li>3 cameras 4K</li>
                                        <li>5 min highlight video </li>
                                        <li>30 min full video Edited</li>
                                    </ul>
                                    <button type="button" class="w-100 btn btn-lg btn-success">SELECT</button>
                                </div>
                            </div>
                        </div> */}
    
                        {/* col 3 */}
     {/* <small class="text-muted fw-light">/mo</small> */}
                        {/* <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm border-warning">
                                <div class="card-header py-3 text-dark bg-warning border-warning">
                                    <h4 class="my-0 fw-normal">Diamond Package</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title text-danger">$3000
                                       
                                    </h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>Getting Ready (Makeup...)</li>
                                        <li>From 10 am - 2 am</li>
                                        <li>3 Cameras 4K</li>
                                        <li>2 Videographers</li>
                                        <li>5 min highlight video</li>
                                    </ul>
                                    <button type="button" class="w-100 text-white btn btn-lg btn-success">Contact us</button>
                                </div>
                            </div>
                        </div> */}
                        

                    </div>
    
    
    
                    {/* <h2 class="display-6 text-center mb-4 text-dark">Compare plans</h2> */}
    
    
                    {/* <div class="table-responsive">
                        <table class="table text-center">
                            <thead>
                                <tr>
                                    <th style={{width:"34%"}}></th>
                                    <th style={{width: "22%"}}>Basic</th>
                                    <th style={{width: "22%"}}>Upgrade</th>
                                    <th style={{width: "22%"}}>Diamond</th>
                                </tr>
                            </thead>
    
                            <tbody>
                                <tr>
                                    <th scope="row" class="text-start">Full Day Coverage ( 2 or More)</th>
                                    <td><svg class="bi" width="24" height="24"></svg></td>
                                    <td><svg class="bi" width="24" height="24"></svg></td>
                                    <td><svg class="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="text-start">Videographer (2 or More)</th>
                                    <td></td>
                                    <td><svg class="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                                    <td><svg class="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                                </tr>
                            </tbody>
    
                            <tbody>
                                <tr>
                                    <th scope="row" class="text-start">Cameras (2 or More)</th>
                                    <td><svg class="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                                    <td><svg class="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                                    <td><svg class="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="text-start">Highlight Video</th>
                                    <td></td>
                                    <td><svg class="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                                    <td><svg class="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="text-start">Unlimited members</th>
                                    <td></td>
                                    <td><svg class="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                                    <td><svg class="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
     */}
    
    
    
                </main>
            </div>);
    }
}
 
export default PricingHome;