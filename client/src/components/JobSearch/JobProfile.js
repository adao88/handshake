import React, {Component} from 'react'
import axios from 'axios'


class JobProfile extends Component {
    constructor(props){
        super(props)

        this.state = {
            job_id: props.location.job_id,
            co_id: props.location.co_id,
            title: props.location.title,
            company: props.location.company,
            date: props.location.date,
            deadline: props.location.deadline,
            location: props.location.location,
            salary: props.location.salary,
            category: props.location.category,
            description: props.location.description,
            message: ''
        }
    }

    componentDidMount(){
        console.log('props: ', this.props)

    }

    handleApply = () => {
        let jobApplication = {
            co_id: this.state.co_id,
            title: this.state.title,
            job_id: this.state.job_id,
            company: this.state.company
        }
        axios.post('/api/apply-to-job', jobApplication)
            .then(response => {
                console.log('Response: ', response.data.message)
                this.setState({
                    message: response.data.message
                })
            })
    }

    render(){
        return(
            <div>
                <h1>Job Profile</h1>
                <div className="item">
                    <div className="content">
                        <div className="header">{this.state.title}</div>
                        <div className="meta">{this.state.company}</div>
                        <div className="extra">{this.state.description}</div>
                        <div className="description">{this.state.location}</div>
                        <div className="description">{this.state.category}</div>
                        <div className="description">{this.state.salary}</div>
                        <div className="extra">{this.state.date}</div>
                        <div className="extra">{this.state.deadline}</div>
                    </div>
                </div>
                <button className="ui button primary" onClick={this.handleApply}>Apply!</button>
                <h3>{this.state.message}</h3>
            </div>
        )
    }

}

export default JobProfile