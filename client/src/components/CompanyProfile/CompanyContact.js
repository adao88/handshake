import React, {useState} from 'react'

const CompanyContact = (props) => {
    return(
        <div className="ui items">
            <div className="item">
                <div className="content">
                    <div className="description">{props.email}</div>
                    <div className="description">{props.phone}</div>
                </div>
            </div>
        </div>
    )
}

export default CompanyContact