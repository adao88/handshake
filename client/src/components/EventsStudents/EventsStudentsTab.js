import React, {Component} from 'react'
import axios from 'axios'
import EventsList from './EventsList'
import Filter from './Filter'
import RegisteredEventsList from './RegisteredEventsList'
import NavBar from '../NavBar/NavBar'

class EventsStudentsTab extends Component {

    constructor(props){
        super(props)

        this.state = {
            events: [],
            filteredEvents: [],
            registeredEvents: [],
            nameSearch: ''
        }
    }

    componentDidMount(){
        //axios get all events
        axios.get('/api/get-all-events')
            .then(response => {
                console.log('response (all events): ', response.data)
                this.setState({
                    filteredEvents: response.data.events,
                    events: response.data.events
                })
            })
        //axios get registered events
        axios.get('/api/get-registered-events')
            .then(response => {
                console.log('response (registered events): ', response.data)
                this.setState({
                    registeredEvents: response.data.events
                })
            })
    }

    reset = () => {
        this.setState({
            filteredEvents: this.state.events
        })
    }


    handleNameChange = (e) => {
        this.setState({
            nameSearch: e.target.value
        })
        this.filterByname()
    }

    filterByname = () => {
        let lowerCaseNameSearch = this.state.nameSearch.toLowerCase()
        let events = this.state.events
        console.log('events: ', events)
        //filtered Array
        let filteredEvents = events.filter(event => {
            let lowerCaseName = (!event.name) ? '' : event.name.toLowerCase() 
            return lowerCaseName.includes(lowerCaseNameSearch)
        })

        this.setState({
            filteredEvents: filteredEvents
        })
    }

    render(){
        return(
            <div>
                <NavBar/>
                <h3>Filter By:</h3>
                <Filter
                    handleNameChange={this.handleNameChange}
                    handleReset={this.reset}
                />
                <h2>Events:</h2>
                <EventsList
                    events={this.state.filteredEvents}
                />
                <h2>Registered Events:</h2>
                <RegisteredEventsList
                    events={this.state.registeredEvents}
                />
            </div>
        )
    }

}

export default EventsStudentsTab