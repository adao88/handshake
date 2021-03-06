import {connect} from 'react-redux'
import React, {Component} from 'react'
import cookie from 'react-cookies'
import {Redirect} from 'react-router'

import {fetchJobPostPageInfo, updateJobStatus, postNewJob} from '../../actions/jobPostPage'
import AppliedJobList from './AppliedJobList'
import JobList from './JobList'
import JobForm from './JobForm'
import NavBar from '../NavBar/NavBar'


class JobPostPage extends Component  {
    constructor(props){
        super(props)

        this.state = {
            showJobForm: false,
            logged: true
        }
    }


    componentDidMount(){
            console.log('Job Post Page state: ', this.state)
            if(cookie.load("Company-Logged")){
                this.props.fetchJobPostPageInfo()
            }
    }

    hideJobForm = () => {
        this.setState({
            showJobForm: false
        })
    }

    showJobForm = () => {
        this.setState({
            showJobForm: true
        })
    }

    render() {

        console.log('props', this.props)
        let redirectVar = null
        if(!cookie.load("Company-Logged") || this.state.logged === false){
            redirectVar = <Redirect to='/company-login'/>
        }
        return(
            <div>
                <NavBar/>
                {redirectVar}
                <h1>Company's Job Posting Page</h1>
                <div className="ui section divider"></div>
                    <h2>Posted Jobs</h2>
                    <JobList
                        jobs={this.props.jobPostPageInfo.JobsPosted}
                    />
                    <div className="ui section divider"></div>
                    <button className="ui button primary" onClick={this.showJobForm}>Post Job</button>
                    <JobForm
                        hideJobForm={this.hideJobForm}
                        showJobForm={this.state.showJobForm}
                        postNewJob={this.props.postNewJob}
                    />
                <div className="ui section divider"></div>
                    <h2>Applied Jobs</h2>
                    <AppliedJobList
                        appliedJobs={this.props.jobPostPageInfo.JobsApplied}
                        updateJobStatus={this.props.updateJobStatus}
                    />
            </div>
        )

    }

}

const mapStatetoProps = (state) => {
    console.log(state)
    return{
        jobPostPageInfo: state.jobPostPageInfo
    }
}

export default connect(mapStatetoProps, {fetchJobPostPageInfo, updateJobStatus, postNewJob})(JobPostPage)