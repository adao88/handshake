import React from 'react'
import { Link } from 'react-router-dom';
const EventCompanyCard = ({student_id, event_name, student_name}) => {

    return(
        <div className="ui items">
            <div className="item">
                <div className="content">
                    <div className="header">{event_name}</div>
                    <div className="meta">{student_name}</div>
                     <div>{student_id}</div>
                    <Link to={{
                        pathname:'/studentProfile',
                        id: student_id
                        }}>
                        <button variant="raised">
                            See Profile
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
    

}

export default EventCompanyCard