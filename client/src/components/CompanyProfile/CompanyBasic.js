import React from 'react'

const CompanyBasic = (props) => {
    return (
        <div className="ui items">
            <div className="item">
                <div className="content">
                    <div className="header">{props.name}</div>
                    <div className="description">{props.location}</div>
                    <div className="description">{props.description}</div>
                </div>
            </div>
        </div>
    )
}

export default CompanyBasic