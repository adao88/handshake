import React from 'react'


const UserBasic = (props) => {
    return (
        <div className="ui items">
            <div className="item">
                <div className="content">
                    <div className="header">{props.name}</div>
                    <div className="meta">{props.birthdate}</div>
                    <div className="description">{props.location}</div>
                    <div className="description">{props.email}</div>
                    <div className="description">{props.phone}</div>
                    <div className="extra">{props.objective}</div>
                    <div className="extra">{props.degree}</div>
                </div>
            </div>
        </div>
    )
}

export default UserBasic