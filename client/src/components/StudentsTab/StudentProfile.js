import React, {Component} from 'react'
import axios from 'axios'


class StudentProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: props.location.id
        }
    
    }

    componentDidMount(){
        console.log('props: ', this.props)
        axios.post('/api/get-student-page', {id: this.state.id})
            .then(response => {
                console.log('response: ', response.data)

                this.setState({
                    name: response.data.name,
                    location: response.data.location,
                    objective: response.data.objective,
                    email: response.data.email_profile,
                    schoolname: response.data.schoolname,
                    phone: response.data.phone,
                    skillset: response.data.skillset
                })
            })

    }
    
    render(){
        return(
            <div>
                <h1>Student Profile</h1>
                <div className="item">
                    <div className="content">
                        <div className="header">{this.state.name}</div>
                        <div className="meta">{this.state.objective}</div>
                        <div className="description">{this.state.location}</div>
                        <div className="description">{this.state.email}</div>
                        <div className="description">{this.state.phone}</div>
                        <div className="extra">{this.state.schoolname}</div>
                        <div className="extra">{this.state.skillset}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentProfile