import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import BisoCeo from '../../common/BisoCeo';
import Youtube from '../../common/youtube';


class videoshooting extends Component {
    render() { 
        return (
            
            <div className="container" style={{backgroundColor:'#34495e'}}>
                <div className="row">
                <div className="col-sm-3 text-center" style={{backgroundColor:'#34495e'}}><BisoCeo /></div>
                {/* <div className="col-sm-2 text-center" ></div> */}
                <div className="col-sm-7 block-center" style={{backgroundColor:'#34495e'}}><Youtube/></div>
                </div>

            </div>
           
        );
    }
}
 
export default videoshooting;