import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import RM from '../Assets/ceo/ceo3.jpeg'; 
import { Link } from 'react-router-dom'; 


class BisoCeo extends Component {
    constructor(props){
        super(props); 
        this.state={
            company:'Biso Productions',
            name:'Reddy Eyenga',
            tele:'RG TV',
            sociaux:['Instagram', 'Facebook']
        }
    }
    render() { 
        return (
            <div>
                <br/><br/>
                <img className='img-fluid rounded-circle' src={RM} alt="RM"/><br/><br/>
                <p style={{color:'white'}}>{this.state.name}</p>
                <p style={{color:'white'}}>{this.state.tele}</p>
                <p style={{color:'white'}}>{this.state.company}</p>
                <a 
                    href="https://instagram.com/bisoproductions?utm_medium=copy_link" 
                    target="_blank"
                    rel="noreferrer"
                    style={{color:'#ff5252'}}
                >
                    <i className="fa fa-instagram"></i>
                </a><br/>
                <a 
                    href="https://www.facebook.com/pages/category/Product-Service/Biso-Productions-2084632831597676/" 
                    target="_blank"
                    rel="noreferrer"
                    style={{color:'#34ace0'}}
                >
                    <i className="fa fa-facebook-f"></i>
                </a><br/>
                {/* <p>Book us link </p> */}
                <Link to='/book' style={{color:'#ffb142'}}><strong>Book us</strong></Link>
            </div>
        );
    }
}
 
export default BisoCeo;