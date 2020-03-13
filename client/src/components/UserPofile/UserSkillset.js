import React from 'react'

const UserSkillset = (props) => {
    return(
        <div className="ui items">
            <div className="item">
                <div className="content">
                    <div className="header">Skillset</div>
                    <div className="description">{props.skills}</div>
                </div>
            </div>
        </div>
    )
}

export default UserSkillset