import React, { Component } from 'react'

class BisoProEvents extends React.Component {
    render() { 
        return (
        <div>
            <div className="row mb-2">
                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">World</strong>
                        <h3 class="mb-0">Featured post</h3>
                        <div class="mb-1 text-muted">Nov 12</div>
                        <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="stretched-link">Continue reading</a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            {/* https://www.youtube.com/watch?v=_shDq3Ny5Vg */}
                            {/* <img src={}></img> */}
                            <iframe width="100px" height="500px" src={'https://www.youtube.com/watch?v=_shDq3Ny5Vg'} title="YouTube video player" 
                                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; " 
                                allowFullScreen
                            >
                            </iframe>

                        </div>
                    </div>
                </div>
            </div>
            Biso ProEvent
        </div>
        );
    }
}
 
export default BisoProEvents;