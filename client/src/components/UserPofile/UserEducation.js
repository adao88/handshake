import React from 'react'
import EducationCard from './EducationCard'



const UserEducation = ({education = [], submitDelete, showEducationForm, submitEducationForm} ) => {
    
    if (education === undefined){
        education = []
    }
    
    return(
        
        education.map(item => 
            <EducationCard
                name={item.schoolname}
                degree={item.degree}
                location={item.location}
                dates={item.dates}
                gpa={item.gpa}
                id={item.id}
                submitDelete={submitDelete}
                showEducationForm={showEducationForm}
                submitEducationForm={submitEducationForm}
            />            
            )      
    )
}

export default UserEducation