import React from 'react'

const RegisteredEventCard = ({event_name, location, time, co_name, date}) => {


    return(
        <div className="ui items">
            <div className="item">
                <div className="content">
                    <div className="header">{event_name}</div>
                    <div className="meta">{date}</div>
                    <div className="meta">{co_name}</div>
                    <div className="meta">{location}</div>
                    <div className="meta">{time}</div>
                </div>
            </div>
        </div>
        
    )
}

export default RegisteredEventCard