import React  from 'react'
import {Link} from 'react-router-dom'

const EventCard = ({event_id, co_name, time, location, event_name, eligibility, description, date, co_id}) => {


    return(
        <div className="ui items">
            <div className="item">
                <div className="content">
                    <div className="header">{event_name}</div>
                    <div className="meta">{date}</div>
                    <div className="meta">{co_name}</div>
                    <Link to={{
                        pathname:'/eventProfile',
                        id: event_id,
                        co_name,
                        time,
                        location,
                        eligibility,
                        description,
                        event_name,
                        co_id,
                        date
                        }}>
                        <button variant="raised">
                            See Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EventCard