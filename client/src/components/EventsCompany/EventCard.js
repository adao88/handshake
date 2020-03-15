import React from 'react'

const EventCard = ({name, time, location, date, description, eligibility}) => {

    return(
        <div className="ui items">
            <div className="item">
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">{location}</div>
                    <div className="meta">{date}</div>
                    <div className="meta">{time}</div>
                    <div className="meta">{description}</div>
                    <div className="meta">{eligibility}</div>
                </div>
            </div>
        </div>
    )

}

export default EventCard