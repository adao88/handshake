import {connect} from 'react-redux'
import React, {Component} from 'react'
import cookie from 'react-cookies'
import {Redirect} from 'react-router'
import axios from 'axios'
//import actions here:
import {selectInfo, changeSkillsInfo, changeBasicInfo, editEducationInfo, addEducationInfo, fetchUserInfo, deleteEducationInfo, editExperienceInfo, addExperienceInfo, deleteExperienceInfo} from '../../actions/userProfile'
import AddExperience from './AddExperience'
import AddEducation from './AddEducation'
import ChangeBasicInfo from './ChangeBasicInfo'
import UserBasic from './UserBasic'
import UserEducation from './UserEducation'
import UserExperience from './UserExperience'
import UserSkillset from './UserSkillset'
import ChangeSkillset from './ChangeSkillset'

class UserProfile extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            showBasicForm: false,
            showEducationForm: false,
            showEditEducationForm: false,
            showExperienceForm: false,
            showEditExperienceForm: false,
            showSkillsForm: false,
            logged: true
        }

        //this.showBasicForm = this.showBasicForm.bind(this)
    }

    componentDidMount () {
        
        console.log('state: ', this.state)
        
        if(cookie.load("Logged-In")){
            this.props.fetchUserInfo()
        }
        
    }

    showEditExperienceForm = () => {
        this.setState({
            showEditExperienceForm: true
        })
    }

    hideEditExperienceForm = () => {
        this.setState({
            showEditExperienceForm: false
        })
    }

    showExperienceForm = () => {
        console.log('showing experience form..')
        this.setState({
            showExperienceForm: true
        })
    }

    hideExperienceForm = () => {
        this.setState({
            showExperienceForm: false
        })
    }
    
    showEditEducationForm = () => {
        this.setState({
            showEditEducationForm: true
        })
    }

    hideEditEducationForm = () => {
        this.setState({
            showEditEducationForm: false
        })
    }
    
    showEducationForm = () => {
        console.log('showing education form...')
        this.setState({
            showEducationForm: true
        })
        console.log('showEducationForm: ', this.state.showEducationForm)
    }

    hideEducationForm = () =>  {
        this.setState({showEducationForm: false})
        console.log('showEducationForm: ', this.state.showEducationForm)

    }
    

    showBasicForm = () => {
        this.setState({showBasicForm: true})
    }

    hideBasicForm = () => {
        console.log('closing modal')
        this.setState({
            showBasicForm: false
        })
    }

    hideSkillsForm = () => {
        this.setState({
            showSkillsForm: false
        })
    }

    submitExperienceForm = (newExperienceInfo) => {
        console.log('Adding Experience info..', newExperienceInfo)
        this.props.addExperienceInfo(newExperienceInfo)
        this.hideExperienceForm()
    }

    submitEditExperienceForm = (id) => {
        console.log('editing experience with id: ', id)
        this.props.editExperienceInfo(id)
        this.hideEditExperienceForm()
    }

    submitExperienceDelete = (id) => {
        console.log('deleting experience with: ', id)
        this.props.deleteExperienceInfo(id)
    }

    submitEditEducationForm = (id) => {
        console.log('Editing Education info from id:', id)
        this.props.editEducationInfo(id)
        this.hideEditEducationForm()
    }

    submitEducationForm = (newEducationInfo) => {
        console.log('Adding Education info...', newEducationInfo)
        this.props.addEducationInfo(newEducationInfo)
        this.hideEducationForm()
    }

    submitEducationDelete = (id) => {
        console.log('deleting education with: ', id)
        this.props.deleteEducationInfo(id)
    }

    submitBasicForm = (newBasicInfo) => {
        console.log('updating basic state..', newBasicInfo)
        this.props.changeBasicInfo(newBasicInfo)
        this.hideBasicForm()
    }

    submitSkillsForm = (newSkillsInfo) => {
        this.props.changeSkillsInfo(newSkillsInfo)
        this.hideSkillsForm()
    }
    
    handleLogout = () => {
        axios.post('/logout')
            .then(response => {
                console.log("logging out response: ", response)
                this.setState({
                    logged: false
                })
            })
    }

    render(){

        console.log('props', this.props)
        let redirectVar = null
        if(!cookie.load("Logged-In") || this.state.logged === false){
            redirectVar = <Redirect to='/login'/>
        }
        return(
            <div>
                {redirectVar}
                <div className="ui segment">
                    <h2>Basic Info</h2>
                    <UserBasic 
                        name={this.props.userInfo.Basic.name}
                        birthdate={this.props.userInfo.Basic.birthdate}
                        location={this.props.userInfo.Basic.location}
                        email={this.props.userInfo.Basic.email}
                        phone={this.props.userInfo.Basic.phone}
                        objective={this.props.userInfo.Basic.objective}
                    />
                    <button
                    className="ui button primary"
                    onClick={()=>this.handleLogout()}
                    >
                        Logout
                    </button>
                    <button 
                    className="ui button primary" 
                    onClick={()=>this.props.selectInfo(this.props.userInfo.Basic)}>
                        Select
                    </button>
                    <button 
                    className="ui button primary"
                    onClick={() => this.setState({showBasicForm: true})} 
                    >
                        Edit
                    </button>
                    <ChangeBasicInfo
                        showBasicForm={this.state.showBasicForm}
                        hideBasicForm={this.hideBasicForm}
                        submitBasicForm={this.submitBasicForm}
                    />
                    <div class="ui section divider"></div>
                    <h2>Education</h2>
                    <UserEducation 
                        education={this.props.userInfo.Education}
                        submitDelete={this.submitEducationDelete}
                        showEducationForm={this.showEditEducationForm}
                        hideEducationForm={this.hideEditEducationForm}
                        submitEducationForm={this.submitEditEducationForm}
                    />
                    <div>
                    <button onClick={this.showEducationForm}>Add Education Info</button>
                    <AddEducation
                        showEducationForm={this.state.showEducationForm}
                        hideEducationForm={this.hideEducationForm}
                        submitEducationForm={this.submitEducationForm}
                        user_id={this.props.userInfo.Id}
                    />
                    </div>
                    <div class="ui section divider"></div>
                    <h2>Experience</h2>
                    <UserExperience 
                        experience={this.props.userInfo.Experience}
                        submitDelete={this.submitExperienceDelete}
                        showExperienceForm={this.showEditEducationForm}
                        hideExperienceForm={this.hideExperienceForm}
                        submitExperienceForm={this.submitEditExperienceForm}
                    />
                    <button onClick={this.showExperienceForm}>Add Experience Info</button>
                    <AddExperience
                        showExperienceForm={this.state.showExperienceForm}
                        hideExperienceForm={this.hideExperienceForm}
                        submitExperienceForm={this.submitExperienceForm}
                        user_id={this.props.userInfo.Id}
                    />
                    <div class="ui section divider"></div>
                    <h2>Skills</h2>
                    <UserSkillset 
                        skills={this.props.userInfo.Skillset.skills}
                    />
                    <button 
                    className="ui button primary"
                    onClick={() => this.setState({showSkillsForm: true})} 
                    >
                        Edit
                    </button>
                    <ChangeSkillset
                        showSkillsForm={this.state.showSkillsForm}
                        hideSkillsForm={this.hideSkillsForm}
                        submitSkillsForm={this.submitSkillsForm}
                    />
                </div>
            </div>
        )
    }


}

const mapStatetoProps = (state) => {
    console.log(state)
    return {
        userInfo: state.userInfo
    }
}

export default connect(mapStatetoProps, {selectInfo, changeSkillsInfo, changeBasicInfo, addEducationInfo, editEducationInfo, fetchUserInfo, deleteEducationInfo, editExperienceInfo, addExperienceInfo, deleteExperienceInfo})(UserProfile)