import React, { Component } from 'react';

class WeddingPackage extends Component {
  
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
             <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                 <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img">
                     <title>Biso Productions</title>
                     <path fill-rule="evenodd" clip-rule="evenodd"
                     d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 
                         14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 
                         8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 
                         88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 
                         2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 
                         5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 
                         0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 
                         0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" 
                         fill="orange"></path>
                     </svg>
                     <span className="fs-4" style={{color:"orange", fontWeight:"bold"}}>Biso Productions</span>
                 </a>

                 {/* <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                     <a class="me-3 py-2 text-dark text-decoration-none" href="/linkPDF">Video</a>
                     eslint-disable-next-line
                     <a class="me-3 py-2 text-dark text-decoration-none" href="#">Photo</a>
                     eslint-disable-next-line
                     <a class="me-3 py-2 text-dark text-decoration-none" href="#">Commercial</a>
                     <a class="py-2 text-dark text-decoration-none" href="#">Reviews</a>
                 </nav> */}
             </div>

             <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                 <h1 className="display-4 fw-normal text-black">Wedding Package</h1>
                 <hr/>
             </div>
         </header>
         </div>

         <main>

             <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                 <div class="col">
                     <div class="card mb-4 rounded-3 shadow-sm border-warning">
                         <div class="card-header py-3 bg-warning">
                             <h4 class="my-0 fw-normal text-dark"><strong>Basic Package</strong></h4>
                         </div>
                         <div class="card-body">
                             <h1 class="card-title pricing-card-title text-danger">$1500
                                 {/* <small class="text-muted fw-light">/One Payment</small> */}
                             </h1>
                             <ul class="list-unstyled mt-3 mb-4">
                                 <li> 8 Hours video coverage</li>
                                 <li>1 Videographer</li>
                                 <li>2 Cameras 4k</li>
                                 <li>No Highlight Video</li>
                                 <li>30 min Video Edited</li> 
                             </ul>
                             {/* <button type="button" class="w-100 btn btn-lg btn-success" value="basic">Select</button> */}
                             <a href="/contactus" className="btn btn-lg btn-success w-100 my-2">SELECT</a>
                         </div>
                     </div>
                 </div>

                 {/* col 2 */}
                 <div class="col">
                     <div class="card mb-4 rounded-3 shadow-sm border-warning">
                         <div class="card-header py-3 bg-warning">
                             <h4 class="my-0 fw-normal text-dark"><strong>Upgrade Package</strong></h4>
                         </div>
                         <div class="card-body">
                             <h1 class="card-title pricing-card-title text-danger">$2000
                                 {/* <small class="text-muted fw-light">/mo</small> */}
                             </h1>
                             <ul class="list-unstyled mt-3 mb-4">
                                 <li>12 Hours video coverage</li>
                                 <li>2 videographers</li>
                                 <li>3 cameras 4K</li>
                                 <li>5 min highlight video </li>
                                 <li>30 min full video Edited</li>
                             </ul>
                             {/* <button type="button" class="w-100 btn btn-lg btn-success">SELECT</button> */}
                             <a href="/contactus" className="btn btn-lg btn-success w-100 my-2">SELECT</a>
                         </div>
                     </div>
                 </div>

                 {/* col 3 */}

                 <div class="col">
                     <div class="card mb-4 rounded-3 shadow-sm border-warning">
                         <div class="card-header py-3 text-dark bg-warning border-warning">
                             <h4 class="my-0 fw-normal"><strong>Diamond Package</strong></h4>
                         </div>
                         <div class="card-body">
                             <h1 class="card-title pricing-card-title text-danger">$3000
                                 {/* <small class="text-muted fw-light">/mo</small> */}
                             </h1>
                             <ul class="list-unstyled mt-3 mb-4">
                                 <li>Getting Ready (Makeup...)</li>
                                 <li>From 10 am - 2 am</li>
                                 <li>3 Cameras 4K</li>
                                 <li>2 Videographers</li>
                                 <li>5 min highlight video</li>
                             </ul>
                             <a href="/contactus" className="btn btn-lg btn-success w-100 my-2">Contact us</a>
                             {/* <button type="button" class="w-100 text-white btn btn-lg btn-success">Contact us</button> */}
                         </div>
                     </div>
                 </div>
                 
             </div>
            
             <h2 class="display-6 text-center mb-4 text-dark">Compare plans</h2>
             <div class="table-responsive">
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
                         {/* <tr>
                             <th scope="row" class="text-start">Unlimited members</th>
                             <td></td>
                             <td><svg class="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                             <td><svg class="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                         </tr> */}
                     </tbody>
                 </table>
             </div>
         </main>
     </div>
        );
    }
}
 
export default WeddingPackage;