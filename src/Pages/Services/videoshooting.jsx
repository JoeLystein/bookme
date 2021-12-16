import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import BisoCeo from '../../common/BisoCeo';
import Youtube from '../../common/youtube';


class videoshooting extends React.Component {
    render() { 
        return (
            <div className="container">
                <div className="row">
                <div className="col-2"><BisoCeo/></div>
                <div className="col-4"><Youtube/></div>
                </div>

            </div>
           
        );
    }
}
 
export default videoshooting;