import React from 'react'

const Job = ({title, date, deadline, location, salary, category}) => {

    return(
        <div className="ui items">
            <div className="item">
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta">{category}</div>
                    <div className="description">{location}</div>
                    <div className="description">Posted: {date}</div>
                    <div className="description">Deadline: {deadline}</div>
                    <div className="extra">Salary: {salary}</div>
                </div>
            </div>
        </div>
    )


}

export default Job