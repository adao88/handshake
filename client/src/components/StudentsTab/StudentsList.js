import React from 'react'
import StudentCard from './StudentCard'

const StudentsList = ({students = []}) => {

    return(
        students.map(student=>
            <StudentCard
                key={student.id}
                id={student.id}
                name={student.name}
                schoolname={student.schoolname}
                skillset={student.skillset}
            />
        )
    )

}

export default StudentsList