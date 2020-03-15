import React , {Component} from 'react'
import axios from 'axios'
import NavBar from '../NavBar/NavBar'

class EventProfile extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: props.location.id,
            co_name: props.location.co_name,
            event_name: props.location.event_name,
            date: props.location.date,
            time: props.location.time,
            location: props.location.location,
            eligibility: props.location.eligibility,
            description: props.location.description,
            co_id: props.location.co_id,
            event_id: props.location.id,
            message: ''
        }
    }

    componentDidMount( ){
        console.log('props: ', this.props)
    }

    handleApply = () => {

        let EventApplication = {

            co_name: this.state.co_name,
            eligibility: this.state.eligibility,
            event_id: this.state.event_id,
            event_name: this.state.event_name,
            co_id: this.state.co_id,
            date: this.state.date,
            time: this.state.time,
            location: this.state.location
            
        }

        axios.post('/api/apply-to-event', EventApplication)
            .then(response => {
                console.log('response after applying: ', response)
                this.setState({
                    message: response.data.message
                })
            })

    }

    render(){
        return(
            <div>
                <NavBar/>
                <h1>Event Profile</h1>
                <div className="item">
                    <div className="content">
                        <div className="header">{this.state.co_name}</div>
                        <div className="meta">{this.state.event_name}</div>
                        <div className="extra">{this.state.description}</div>
                        <div className="description">{this.state.location}</div>
                        <div className="description">{this.state.date}</div>
                        <div className="description">{this.state.eligibility}</div>
                        <div className="extra">{this.state.description}</div>
                        <div className="extra">{this.state.time}</div>
                    </div>
                </div>
                <button className="ui button primary" onClick={this.handleApply}>Apply!</button>
                <h3>{this.state.message}</h3>
            </div>
        )
    }

}
export default EventProfile