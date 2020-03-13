import React, {useState, Component} from 'react'


class EditEducation extends Component {
    
    //{showEducationForm, hideEducationForm, submitEducationForm, id}
    constructor(props){
        super(props)
        this.state = {
            showForm: this.props.showEducationForm
        }
        console.log('From constructor, showEducationForm: ', this.props.showEducationForm)
        
    }
    
    componentDidUpdate(prevProps, prevState){
        if (prevProps.showEducationForm !== this.props.showEducationForm){
            this.setState({
                showForm: this.props.showEducationForm
            })
        }
        console.log("From update (previous): ", prevProps.showEducationForm )
        console.log("From update (new) :", this.props.showEducationForm)
    }
    
    handleNameChange = (e) => {
        
        this.setState({
            newName: e.target.value
        })
    }

    handleDegreeChange = (e) => {
        this.setState({
            newDegree: e.target.value
        })
    }    

    handleLocationChange = (e) => {
        this.setState({
            newLocation: e.target.value
        })
    }

    handleDateChange = (e) => {
        this.setState({
            newDates: e.target.value
        })
    }

    handleGpaChange = (e) => {
        this.setState({
            newGpa: e.target.value
        })
    }
    

    handleSubmit = () => {
        
        let EducationInfo = {
            
            schoolname: this.state.newName,
            degree: this.state.newDegree,
            location: this.state.newLocation,
            dates: this.state.newDates,
            gpa: this.state.newGpa,
            id: this.props.id
        
        }

        console.log("education object from 'edit education': ", EducationInfo)
        
        
        
        this.props.submitEducationForm(EducationInfo)

    }

    handleHide = () => {
        this.props.hideEducationForm()
    }


    render() {
        let show = this.state.showForm ? "modal display-block" : "modal display-none"
        console.log('props:', this.props)
        return(
            <div className ={show}>
                <div className="modal-main">
                    <form class="ui form">
                        <div class="field">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Name"  onChange={this.handleNameChange}></input>
                        </div>
                        <div class="field">
                            <label>Degree</label>
                            <input type="text" name="degree" placeholder="Degree" onChange={this.handleDegreeChange}></input>
                        </div>
                        <div class="field">
                            <label>Location</label>
                            <input type="text" name="location" placeholder="Location"  onChange={this.handleLocationChange}></input>
                        </div>
                        <div class="field">
                            <label>Dates</label>
                            <input type="text" name="dates" placeholder="Dates"  onChange={this.handleDateChange}></input>
                        </div>
                        <div class="field">
                            <label>GPA</label>
                            <input type="text" name="gpa" placeholder="GPA"  onChange={this.handleGpaChange}></input>
                        </div>    
                        <button className="ui button primary" onClick={this.handleSubmit}>Submit</button>
                        <button className="ui button primary" onClick={this.handleHide}>Close</button>
                    </form>
                </div>
            </div>
        )
    }
}



export default EditEducation



