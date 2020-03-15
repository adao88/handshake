import React from 'react'
import EventCard from './EventCard'

const EventsList = ({events = []}) =>{

    return(
        events.map(event => 
            <EventCard
                event_id={event.id}
                co_name={event.co_name}
                time={event.time} 
                location={event.location} 
                event_name={event.name} 
                eligibility={event.eligibility} 
                description={event.description} 
                date={event.date}
                co_id={event.co_id}
                key={event.id}
            />
        )


    )
}

export default EventsList