import React from 'react'
import RegisteredEventCard from './RegisteredEventCard'

const RegisteredEventsList = ({events = []}) => {


    return(
        events.map(event =>
            <RegisteredEventCard
                event_name={event.event_name}
                location={event.location}
                time={event.time} 
                co_name={event.co_name} 
                date={event.date}
                key={event.id}
            />
        )
    )
}

export default RegisteredEventsList