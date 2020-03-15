import React , {Component} from 'react'
import axios from 'axios'
class CompanyPreview extends Component {
    constructor(props){
        super(props)

        this.state = {
            co_id: this.props.location.co_id
        }
    }

    componentDidMount(){

        let co_id = this.state.co_id
        axios.post('/api/get-company-preview', {co_id})
            .then(response => {
                console.log('response: ', response.data)
                this.setState({
                    co_name: response.data.name,
                    co_email: response.data.email_profile,
                    location: response.data.location,
                    phone: response.data.phone,
                    description: response.data.description

                })
            })

    }

    render(){
        return(
<div>
                <h1>Company Profile</h1>
                <div className="item">
                    <div className="content">
                        <div className="header">{this.state.co_name}</div>
                        <div className="meta">{this.state.co_email}</div>
                        <div className="extra">{this.state.description}</div>
                        <div className="description">{this.state.location}</div>
                        <div className="description">{this.state.phone}</div>
                    </div>
                </div>
            </div>
        )
    }
    
} 

export default CompanyPreview