import React , {useState} from 'react'
import EditEducation from'./EditEducation'

const EducationCard = ({name, degree, location, dates, gpa, id, submitDelete, submitEducationForm}) => {
    
    const [showEditForm, setEditForm] = useState(false)

    const handleShowEditForm = () => {
        //console.log('showing form: ', showEditForm)
        setEditForm(true)
        console.log('showing form: ', showEditForm)
    }

    

    const hideEducationForm = () => {
        setEditForm(false)
    }

    return (
        <div>
            <div className="ui items">
                <div className="item">
                    <div className="content">
                        <div className="header">{name}</div>
                        <div className="description">{degree}</div>
                        <div className="description">{location}</div>
                        <div className="extra">{dates}</div>
                        <div className="extra">{gpa}</div>
                    </div>
                </div>
                <button className="ui button primary" onClick={()=>submitDelete(id)}>Delete</button>
                <button className="ui button primary" onClick={handleShowEditForm}>Edit</button>
                <div class="ui section divider"></div>
                <div>
                    <EditEducation
                        showEducationForm={showEditForm}
                        hideEducationForm={hideEducationForm}
                        submitEducationForm={submitEducationForm}
                        id={id}
                    />
                </div>
            </div>
        </div>
    )
}

export default EducationCard