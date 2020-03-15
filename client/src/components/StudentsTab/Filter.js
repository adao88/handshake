import React from 'react'

const Filter = ({handleReset, handleNameChange,handleSchoolChange, handleSkillChange}) => {
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
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Filter