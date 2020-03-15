import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const AppliedJob = ({id, student_id, co_id, status, student_name, title, updateJobStatus}) => {

    const[newStatus, setNewStatus] = useState('')

    const handleStatusChange = (e) => {
        setNewStatus(e.target.value)
    }

    const updateStatus = () => {
        
        let job = {
            job_id: id,
            newStatus: newStatus,
            co_id,
            student_id
        }

        updateJobStatus(job)
    }

    return(
        <div>
            <div className="ui items">
                <div className="item">
                    <div className="content">
                        <div className="header">{student_name}</div>
                        <div className="description">{title}</div>
                        <div className="description">{status}</div>
                    </div>
                    <Link to={{
                        pathname:'/studentProfile',
                        id: student_id
                        }}>
                        <button variant="raised">
                            See Profile
                        </button>
                    </Link>
                </div>
                <div onChange={handleStatusChange}>
                    <input type="radio" value="Pending" name="status"/> Pending
                    <input type="radio" value="Reviewed" name="status"/> Reviewed
                    <input type="radio" value="Declined" name="status"/> Declined
                </div>
            </div>
            <button className="ui button primary" type="button" onClick={updateStatus}>Update</button>
        </div>
    )

}

export default AppliedJob