
import React from 'react'
import JobCard from './JobCard'

const JobList = ({jobs = []}) => {

    return(
        jobs.map(job => 
            <JobCard
                title={job.title}
                category={job.category}
                location={job.location}
                date={job.date}
                deadline={job.deadline}
                salary={job.salary}
                job_id={job.id}
                co_id={job.co_id}
                description={job.description}
                key={job.id}
            />
        )

    )
}

export default JobList