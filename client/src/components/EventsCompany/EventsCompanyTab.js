import React , {Component} from 'react'
import EventsList from './EventsList'
import EventForm from './EventForm'
import axios from 'axios'

class EventsCompanyTab extends Component {
    constructor(props){
        super(props)
        this.state = {
            allEvents: [],
            events: [],
            showEventForm: false
        }
    }

    componentDidMount(){

        //axios.get('/api/get-company-events')
        axios.get('/api/get-companyEvents')
            .then(response => {
                console.log('response: ', response.data)
                this.setState({
                    events: response.data.events
                })
            })

    }

    handleHideForm = () => {
        this.setState({
            showEventForm: false
        })
    }

    handleShowForm = () => {
        this.setState({
            showEventForm: true
        })
    }
 
    subtmitForm = (event) => {

        axios.post('/api/create-event', event)
            .then(response => console.log('response: ', response))
    }

    render(){
        return(
            <div>
                <h1>Events Tab</h1>
                <div>
                    <EventsList
                        events={this.state.events}
                    />
                    <button className="ui button primary" onClick={this.handleShowForm}>Create Event</button>
                    <EventForm
                        hideEventForm={this.handleHideForm}
                        showEventForm={this.state.showEventForm}
                        postNewEvent={this.subtmitForm}
                    />
                </div>
            </div>
        )
    }
}
export default EventsCompanyTab