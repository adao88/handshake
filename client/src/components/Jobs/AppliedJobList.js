import React from 'react'
import AppliedJob from './AppliedJob'


const AppliedJobList = ({appliedJobs = [], updateJobStatus}) => {

    return(
        appliedJobs.map(job => 
            <AppliedJob
                id={job.id}
                student_id={job.student_id}
                co_id={job.co_id}
                status={job.status}
                student_name={job.student_name}
                title={job.title}
                updateJobStatus={updateJobStatus}
            />
        )
    )

}

export default AppliedJobList