import React, { useState } from "react"




const ChangeBasicInfo = ({
    showBasicForm, 
    hideBasicForm, 
    submitBasicForm}) => {

    const [newName, setNewName] = useState('')
    const [newBirthDate, setNewBirthDate] = useState('')
    const [newLocation, setNewLocation] = useState('')
    const [newObjective, setNewObjective] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPhone, setNewPhone] = useState('')

    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }
    const handleBirthDateChange = (e) => {
        setNewBirthDate(e.target.value)
    }

    const handleLocationChange = (e) => {
        setNewLocation(e.target.value)
    }

    const handleObjectiveChange = (e) => {
        setNewObjective(e.target.value)
    }

    const handleEmailChange = (e) => {
        setNewEmail(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setNewPhone(e.target.value)
    }

    const handleSubmit = () => {
        let BasicInfo = {
            name: newName,
            birthdate: newBirthDate,
            location: newLocation,
            objective: newObjective,
            email: newEmail,
            phone: newPhone
        }
        
        
        console.log('new basic info...', BasicInfo)
        submitBasicForm(BasicInfo)

        setNewName('')
        setNewObjective('')
        setNewPhone('')
        setNewEmail('')
        setNewLocation('')
        setNewBirthDate('')
    }

    let show = showBasicForm ? "modal display-block" : "modal display-none"

    return(
        <div className ={show} >
            <div className="modal-main">
                <form class="ui form">
                    <div class="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={newName} onChange={handleNameChange}></input>
                    </div>
                    <div class="field">
                        <label>Birth Date</label>
                        <input type="text" name="birthdate" placeholder="Birth Date" value={newBirthDate} onChange={handleBirthDateChange}></input>
                    </div>
                    <div class="field">
                        <label>Location</label>
                        <input type="text" name="location" placeholder="Location" value={newLocation}onChange={handleLocationChange}></input>
                    </div>
                    <div class="field">
                        <label>email</label>
                        <input type="text" name="location" placeholder="Email" value={newEmail} onChange={handleEmailChange}></input>
                    </div>
                    <div class="field">
                        <label>Phone Number</label>
                        <input type="text" name="location" placeholder="Phone #" value={newPhone}onChange={handlePhoneChange}></input>
                    </div>    
                    <div class="field">
                        <label>Objective</label>
                        <input type="text" name="objective" placeholder="Objective" value={newObjective} onChange={handleObjectiveChange}></input>
                    </div>               
                    <button type="button" onClick={handleSubmit}>Submit</button>
                    <button type="button" onClick={hideBasicForm}>Close</button>
                </form>
            </div>
        </div>
    )
}

export default ChangeBasicInfo