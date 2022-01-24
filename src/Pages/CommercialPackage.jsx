import React, { Component } from 'react'

class CommercialPackage extends Component {
    
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
                            <h1 className="display-4 fw-normal" style={{color:'black'}}>COMMERCIAL PACKAGE</h1>
                            <div className="py-1text-center">
                                {/* <p className="fs-5 text-muted">
                                    You have been planning, dreaming and praying for this day your entire life, 
                                    and it has finally arrived!
                                </p> */}
                                <p className="fs-5 text-muted">
                                    We are ready to help you, so let's get connected. 
                                </p>
                                <p>
                                    <a href="/contactus" class="btn btn-primary my-2">CONTACT US</a>
                                    {/* <a href="/commercialpackage" class="btn btn-secondary my-2"></a> */}
                                    {/* <a href="/wedding" class="btn btn-success my-2">Music Package</a> */}
                                </p>
                                <hr/>
                                
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}
 
export default CommercialPackage;