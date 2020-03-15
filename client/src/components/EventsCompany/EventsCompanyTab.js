import React , {Component} from 'react'
import EventsList from './EventsList'
import EventForm from './EventForm'
import axios from 'axios'
import NavBar from '../NavBar/NavBar'
import AllEventsList from './AllEventsList'

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

        axios.get('/api/get-all-company-events')
            .then(response => {
                console.log('response: ', response.data)
                this.setState({
                    allEvents: response.data.events
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
            .then(response => {
                console.log('response: ', response.data)
                let newEventsArr = this.state.allEvents.concat(response.data.event)
                    this.setState({
                        allEvents: newEventsArr
                    })
            })
    }

    render(){
        return(
            <div>
                <NavBar/>
                <h1>Company Events Tab</h1>
                <div>
                    <h2>Events Created:</h2>
                    <AllEventsList
                        events={this.state.allEvents}
                    />
                    <button className="ui button primary" onClick={this.handleShowForm}>Create Event</button>
                    <h2>Registered Events:</h2>
                    <EventsList
                        events={this.state.events}
                    />
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