import React, {Component} from 'react'

class EditExperience extends Component {

    constructor(props){
        super(props)
        this.state = {
            showForm: this.props.showExperienceForm
        }

        console.log('Edit Experience constructor props: ', this.props.showExperienceForm)
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.showExperienceForm !== this.props.showExperienceForm){
            this.setState({
                showForm:this.props.showExperienceForm
            })
        }
    }

    handleCompanyChange = (e) => {
        this.setState({
            newCompany: e.target.value
        })
    }

    handleTitleChange = (e) => {
        this.setState({
            newTitle: e.target.value
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

    handleDescriptionChange = (e) => {
        this.setState({
            newDescription: e.target.value
        })
    }

    handleSubmit = () => {
        
        let ExperienceInfo = {
            company: this.state.newCompany,
            title: this.state.newTitle,
            location: this.state.newLocation,
            dates: this.state.newDates,
            description: this.state.newDescription,
            id: this.props.id
        }

        console.log('experience object from edit experience: ', ExperienceInfo)

        this.props.submitExperienceForm(ExperienceInfo)
    }

    handleHide = () => {
        this.props.hideExperienceForm()
    }

    render() {
        let show = this.state.showForm ? "modal display-block" : "modal display-none"
        console.log('props: ', this.props)
        
        return(
            <div className ={show}>
                <div className="modal-main">
                    <form class="ui form">
                        <div class="field">
                            <label>Company:</label>
                            <input type="text" name="company" placeholder="Company Name"  onChange={this.handleCompanyChange}></input>
                        </div>
                        <div class="field">
                            <label>Title</label>
                            <input type="text" name="title" placeholder="Title" onChange={this.handleTitleChange}></input>
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
                            <label>Description</label>
                            <input type="text" name="description" placeholder="Description"  onChange={this.handleDescriptionChange}></input>
                        </div>    
                        <button type="button" onClick={this.handleSubmit}>Submit</button>
                        <button type="button" onClick={this.handleHide}>Close</button>
                    </form>
                </div>
            </div>

        )
    
    }
}
export default EditExperience