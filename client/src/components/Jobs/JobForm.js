import React, {useState} from 'react'

const JobForm = ({showJobForm, hideJobForm, postNewJob}) => {

    const [newTitle, setNewTitle] = useState('')
    const [newDeadline, setNewDeadline] = useState('')
    const [newLocation, setNewLocation] = useState('')
    const [newSalary, setNewSalary] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newCategory, setNewCategory] = useState('')

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value)
    }

    const handleDeadlineChange = (e) => {
        setNewDeadline(e.target.value)
    }

    const handleLocationChange = (e) => {
        setNewLocation(e.target.value)
    }

    const handleSalaryChange = (e) => {
        setNewSalary(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setNewDescription(e.target.value)
    }

    const handleCategoryChange = (e) => {
        setNewCategory(e.target.value)
    }

    const handleSubmit = () =>{

        let today = new Date().toLocaleDateString()
        let formatDate = today.replace("/", "-").replace("/", "-")

        let JobObj = {
            title: newTitle,
            deadline: newDeadline,
            date:formatDate,
            location: newLocation,
            salary: parseInt(newSalary, 10),
            description: newDescription,
            category: newCategory
        }

        postNewJob(JobObj)

        setNewTitle('')
        setNewDescription('')
        setNewLocation('')
        setNewSalary('')
        setNewDeadline('')
        setNewCategory('')
    }

    let show = showJobForm ? "modal display-block" : "modal display-none"

    return(
        <div className ={show} >
            <div className="modal-main">
                <form class="ui form">
                    <div class="field">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Title" value={newTitle} onChange={handleTitleChange}></input>
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
                        <label>Category</label>
                        <div onChange={handleCategoryChange}>
                            <input type="radio" value="Full-Time" name="category"/> Full-Time
                            <input type="radio" value="Part-Time" name="category"/> Part-Time
                            <input type="radio" value="Intern" name="category"/> Intern
                            <input type="radio" value="On-Campus" name="category"/> On-Campus
                        </div>
                    </div> 
                    <div class="field">
                        <label>Salary</label>
                        <input type="text" name="salary" placeholder="Salary" value={newSalary} onChange={handleSalaryChange}></input>
                    </div>
                    <div class="field">
                        <label>Deadline</label>
                        <input type="text" name="deadline" placeholder="Deadline" value={newDeadline} onChange={handleDeadlineChange}></input>
                    </div>              
                    <button type="button" onClick={handleSubmit}>Submit</button>
                    <button type="button" onClick={hideJobForm}>Close</button>
                </form>
            </div>
        </div>
    )


}

export default JobForm