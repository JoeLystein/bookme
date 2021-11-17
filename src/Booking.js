import React from 'react'
import {InlineWidget} from 'react-calendly'; 
import './Booking.css'

function Booking() {
    return (
        <div className="booking">
            <InlineWidget url="https://calendly.com/reddyeyenga"/>
        </div>
    )
}

export default Booking
