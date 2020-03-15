import React , {useState} from 'react'

const EventForm = ({hideEventForm, showEventForm, postNewEvent}) => {

    const [newName, setNewName] = useState('')
    const [newTime, setNewTime] = useState('')
    const [newLocation, setNewLocation] = useState('')
    const [newDate, setNewDate] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newEligibility, setNewEligibility] = useState('')

    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }

    const handleTimeChange = (e) => {
        setNewTime(e.target.value)
    }

    const handleLocationChange = (e) => {
        setNewLocation(e.target.value)
    }

    const handleDateChange = (e) => {
        setNewDate(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setNewDescription(e.target.value)
    }

    const handleEligibilityChange = (e) => {
        setNewEligibility(e.target.value)
    }

    const handleSubmit =() => {
        let EventObj = {
            name: newName,
            time: newTime,
            location: newLocation,
            date: newDate,
            description: newDescription,
            eligibility: newEligibility
        }

        postNewEvent(EventObj)

        setNewName('')
        setNewTime('')
        setNewLocation('')
        setNewDate('')
        setNewDescription('')
        setNewEligibility('')
    }

    let show = showEventForm ? "modal display-block" : "modal display-none"

    return(
        <div className ={show} >
            <div className="modal-main">
                <form class="ui form">
                <div class="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={newName} onChange={handleNameChange}></input>
                    </div>
                    <div class="field">
                        <label>Time</label>
                        <input type="text" name="time" placeholder="Time" value={newTime} onChange={handleTimeChange}></input>
                    </div>
                    <div class="field">
                        <label>Description</label>
                        <input type="text" name="description" placeholder="Description" value={newDescription} onChange={handleDescriptionChange}></input>
                    </div>
                    <div class="field">
                        <label>Location</label>
                        <input type="text" name="location" placeholder="Location" value={newLocation}onChange={handleLocationChange}></input>
                    </div>
                    <div class="field">
                        <label>Date</label>
                        <input type="text" name="date" placeholder="Date" value={newDate} onChange={handleDateChange}></input>
                    </div>
                    <div class="field">
                        <label>Eligibility</label>
                        <input type="text" name="eligibility" placeholder="Eligibility" value={newEligibility} onChange={handleEligibilityChange}></input>
                    </div>          
                    <button type="button" onClick={handleSubmit}>Submit</button>
                    <button type="button" onClick={hideEventForm}>Close</button>
                </form>
            </div>
        </div>
    )
}

export default EventForm