import React from 'react'
import ExperienceCard from './ExperienceCard'

const UserExperience = ({experience = [], submitDelete, showExperienceForm, submitExperienceForm}) => {
    
    if (experience === undefined){
        experience = []
    }
    
    return(
        experience.map(exp => 
            <ExperienceCard
                company={exp.company}
                title={exp.title}
                location={exp.location}
                dates={exp.dates}
                description={exp.description}
                id={exp.id}
                submitDelete={submitDelete}
                showExperienceForm={showExperienceForm}
                submitExperienceForm={submitExperienceForm}
            />)
    )
}

export default UserExperience