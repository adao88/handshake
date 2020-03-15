import React from 'react'
import EventCard from './EventCard'

const AllEventsList = ({events = []}) => {

    return(
        events.map(event =>
            <EventCard
                name={event.name} 
                time={event.time} 
                location={event.location} 
                date={event.date} 
                description={event.description} 
                eligibility={event.eligibility}
                key={event.id}
            />
        )
    )
}
export default AllEventsList