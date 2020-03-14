import React, {Component} from 'react'
import ApplicationList from './ApplicationList'
import Filter from './Filter'
import axios from 'axios'

class ApplicationsTab extends Component {
    constructor(props){
        super(props)

        this.state={
            apps: [],
            filteredApps: []
        }
    }

    componentDidMount(){
        axios.get('/api/get-applications')
            .then(response => {
                console.log('response: ', response.data.apps)
                this.setState({
                    apps: response.data.apps,
                    filteredApps: response.data.apps
                })
            })
    }
    reset = () => {
        this.setState({
            filteredApps: this.state.apps
        })
    }

    filterByStatus = (status) => {
        let apps = this.state.apps 

        let filteredApps = apps.filter(app => {
            return app.status === status
        })

        this.setState({
            filteredApps
        })
    }

    render(){
        return(
            <div>
                <h1>Applications Tab</h1>
                <div>
                <Filter
                    handleStatusChange={this.filterByStatus} 
                    handleReset={this.reset}
                />
                </div>
                <h3>Applications: </h3>
                <div>
                <ApplicationList
                    applications={this.state.filteredApps}
                />
                </div>
            </div>
        )
    }
}

export default ApplicationsTab