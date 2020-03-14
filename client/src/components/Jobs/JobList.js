import React from 'react'
import Job from './Job'

const JobList = ({jobs = []}) => {

    return(
        jobs.map(job => 
            <Job
                title={job.title}
                category={job.category}
                location={job.location}
                date={job.date}
                deadline={job.deadline}
                salary={job.salary}
            />
        )

    )
}

export default JobList