import React, {useState} from 'react'
import EditExperience from './EditExperience'

const ExperienceCard = ({company, title, location, dates, description, id, submitDelete, submitExperienceForm}) => {
    
    const [showEditForm, setEditForm] = useState(false)

    const handleShowEditForm = () => {

        setEditForm(true)
        console.log('showing form: ', showEditForm)
    }
    
    const hideExperienceForm = () => {
        setEditForm(false)
    }
    
    
    return (
        <div>
            <div className="ui items">
                <div className="item">
                    <div className="content">
                        <div className="header">{company}</div>
                        <div className="meta">{title}</div>
                        <div className="description">{location}</div>
                        <div className="extra">{dates}</div>
                        <div className="extra">{description}</div>
                    </div>
                </div>
                <button className="ui button primary" onClick={()=>submitDelete(id)}>Delete</button>
                <button className="ui button primary" onClick={handleShowEditForm}>Edit</button>
                <div class="ui section divider"></div>
            </div>
            <div>
                <EditExperience 
                    showExperienceForm={showEditForm}
                    hideExperienceForm={hideExperienceForm}
                    submitExperienceForm={submitExperienceForm}
                    id={id}
                />
            </div>
        </div>
    )
}

export default ExperienceCard