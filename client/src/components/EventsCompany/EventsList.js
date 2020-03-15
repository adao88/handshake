import React from 'react'
import EventCompanyCard from './EventCompanyCard'

const EventsList = ({events = []}) =>{

    return(
        events.map(event => 
            <EventCompanyCard
                student_id={event.student_id}
                event_name={event.event_name}
                student_name={event.student_name}
            />
        )


    )
}

export default EventsList