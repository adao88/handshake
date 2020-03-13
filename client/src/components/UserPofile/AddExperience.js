import React, { useState } from "react"

const AddExperience = ({showExperienceForm, hideExperienceForm, submitExperienceForm, user_id}) => {

    const [newCompany, setNewCompany] = useState('')
    const [newTitle, setNewTitle] = useState('')
    const [newLocation, setNewLocation] = useState('')
    const [newDates, setNewDates] = useState('')
    const [newDescription, setNewDescription] = useState('')

    const handleCompanyChange = (e) => {
        setNewCompany(e.target.value)
    }

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value)
    }
    const handleLocationChange = (e) => {
        setNewLocation(e.target.value)
    }

    const handleDateChange = (e) => {
        setNewDates(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setNewDescription(e.target.value)
    }

    const handleSubmit = () => {

        let ExperienceInfo = {
            company: newCompany,
            title: newTitle,
            location: newLocation,
            dates: newDates,
            description: newDescription,
            user_id: user_id
        }

        submitExperienceForm(ExperienceInfo)

        setNewCompany('')
        setNewTitle('')
        setNewLocation('')
        setNewDates('')
        setNewDescription('')
    }

    let show = showExperienceForm ? "modal display-block" : "modal display-none"

    return (
        <div className ={show}>
            <div className="modal-main">
                <form class="ui form">
                    <div class="field">
                        <label>Company Name</label>
                        <input type="text" name="company" placeholder="Company Name" value={newCompany} onChange={handleCompanyChange}></input>
                    </div>
                    <div class="field">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Title" value={newTitle}onChange={handleTitleChange}></input>
                    </div>
                    <div class="field">
                        <label>Location</label>
                        <input type="text" name="location" placeholder="Location" value={newLocation} onChange={handleLocationChange}></input>
                    </div>
                    <div class="field">
                        <label>Dates</label>
                        <input type="text" name="dates" placeholder="Dates" value={newDates} onChange={handleDateChange}></input>
                    </div>
                    <div class="field">
                        <label>Description</label>
                        <input type="text" name="description" placeholder="Description"  value={newDescription} onChange={handleDescriptionChange}></input>
                    </div>    
                    <button type="button" onClick={handleSubmit}>Submit</button>
                    <button type="button" onClick={hideExperienceForm}>Close</button>
                </form>
            </div>
        </div>
    )
}

export default AddExperience