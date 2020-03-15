import React , {useState} from "react"



const AddEducation = ({
    showEducationForm,
    hideEducationForm,
    submitEducationForm,
    user_id
}) => {

    const [newName, setNewName] = useState('')
    const [newDegree, setNewDegree]= useState('')
    const [newLocation, setNewLocation] = useState('')
    const [newDates, setNewDates] = useState('')
    const [newGpa, setNewGpa] = useState('')

    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }

    const handleDegreeChange = (e) => {
        setNewDegree(e.target.value)
    }

    const handleLocationChange = (e) => {
        setNewLocation(e.target.value)
    }

    const handleDateChange = (e) => {
        setNewDates(e.target.value)
    }

    const handleGpaChange = (e) => {
        setNewGpa(e.target.value)
    }



    const handleSubmit = () => {
        
        let EducationInfo = {
            schoolname: newName,
            degree: newDegree,
            location: newLocation,
            dates: newDates,
            gpa: newGpa,
            user_id: user_id
        }
        
        
        
        submitEducationForm(EducationInfo)

        setNewName('')
        setNewDegree('')
        setNewLocation('')
        setNewDates('')
        setNewGpa('')
    }

    let show = showEducationForm ? "modal display-block" : "modal display-none"

    return(
        <div className ={show}>
            <div className="modal-main">
                <form class="ui form">
                    <div class="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={newName} onChange={handleNameChange}></input>
                    </div>
                    <div class="field">
                        <label>Degree</label>
                        <input type="text" name="degree" placeholder="Degree" value={newDegree}onChange={handleDegreeChange}></input>
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
                        <label>GPA</label>
                        <input type="text" name="gpa" placeholder="GPA"  value={newGpa} onChange={handleGpaChange}></input>
                    </div>    
                    <button type="button" onClick={handleSubmit}>Submit</button>
                    <button type="button" onClick={hideEducationForm}>Close</button>
                </form>
            </div>
        </div>
    )}



    

export default AddEducation