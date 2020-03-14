import React from 'react'
import { Link } from 'react-router-dom';

const JobCard = ({job_id, title, company, date, deadline, location, salary, category, co_id, description }) => {


    
    return(
        <div className="ui items">
            <div className="item">
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta">{company}</div>
                    <div className="meta">{location}</div>
                    <div className="description">{category}</div>
                    <Link to={{
                        pathname:'/jobProfile',
                        job_id, title, company, date, deadline, location, salary, category, description, co_id
                        }}>
                        <button variant="raised">
                            See Job Descripton
                        </button>
                    </Link>
                    <Link to={{
                        pathname:'/companyProfile',
                        co_id
                        }}>
                        <button variant="raised">
                            See Company Profile
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default JobCard