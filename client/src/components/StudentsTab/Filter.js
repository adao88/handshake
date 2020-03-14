import React from 'react'

const Filter = ({handleNameChange,handleSchoolChange, handleSkillChange}) => {
    return(
        <div>
            Name:
            <input
                onChange={handleNameChange}
            />
            School:
            <input
                onChange={handleSchoolChange}
            />
            Skillset:
            <input
                onChange={handleSkillChange}
            />
        </div>
    )
}

export default Filter