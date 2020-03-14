import React from 'react'

const ApplicationCard = ({title, company, status, date}) => {

    return(
        <div className="ui items">
            <div className="item">
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta">{company}</div>
                    <div className="meta">{status}</div>
                    <div className="description">{date}</div>
                </div>
            </div>
        </div>
    )



}

export default ApplicationCard