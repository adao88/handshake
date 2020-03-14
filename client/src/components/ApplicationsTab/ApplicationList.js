import React from 'react'
import ApplicationCard from './ApplicationCard'

const ApplicationList = ({applications = []}) => {


    return(applications.map(app => 
        
        <ApplicationCard
            title={app.title} 
            company={app.company}
            status={app.status}
            date={app.date}
            key={app.id}
        />
        )

    )

}

export default ApplicationList