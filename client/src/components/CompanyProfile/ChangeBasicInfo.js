import React, {useState} from 'react'

const ChangeBasicInfo = ({showBasicForm, hideBasicForm, submitBasicForm}) => {

    const [newName, setNewName] = useState('')
    const [newLocation, setNewLocation] = useState('')
    const [newDescription, setNewDescription] = useState('')

    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }

    const handleLocationChange = (e) => {
        setNewLocation(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setNewDescription(e.target.value)
    }

    const handleSubmit = () => {
        let BasicInfo = {
            name: newName,
            location: newLocation,
            description: newDescription
        }

        console.log('new basic info: ', BasicInfo)

        submitBasicForm(BasicInfo)

        setNewName('')
        setNewLocation('')
        setNewDescription('')
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
                        <label>Location</label>
                        <input type="text" name="location" placeholder="Location" value={newLocation}onChange={handleLocationChange}></input>
                    </div>
                    <div class="field">
                        <label>Description</label>
                        <input type="text" name="description" placeholder="Description" value={newDescription} onChange={handleDescriptionChange}></input>
                    </div>               
                    <button type="button" onClick={handleSubmit}>Submit</button>
                    <button type="button" onClick={hideBasicForm}>Close</button>
                </form>
            </div>
        </div>
    )


}

export default ChangeBasicInfo