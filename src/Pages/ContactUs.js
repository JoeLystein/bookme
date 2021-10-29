import React from 'react';
import './ContactUs.css';

function ContactUs() {
    return (
        <div className="contact">
            <h1>HAVE SOME QUESTION? </h1>
                <p>Biso Production location: 3333 Esters Road Apt 2113, Irving Tx 75038.</p> 
                <div className="iconFa"><br/><i className="fas fa-envelope-open fa-5x"></i></div>
                <div className="infoContact">
                    <input className="fn" type="text" placeholder="First Name" required></input><br/><br/>
                    <input type="text" placeholder="last Name" required></input><br/><br/>
                    <input type="text" placeholder="What's your email?" required></input><br/><br/>
                    <textarea rows="4" cols="30" placeholder="Your Question" required></textarea><br/><br/>
                </div>
        </div>
    )
}

export default ContactUs
