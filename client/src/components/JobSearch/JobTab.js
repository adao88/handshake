import React, {Component} from 'react'
import JobList from './JobList'
import Filter from './Filter'
import axios from 'axios'


class JobTab extends Component {
    constructor(props){
        super(props)

        this.state = {
            locationSearch: '',
            jobs: [],
            filteredJobs: []
        }
    }

    componentDidMount(){

        axios.get('/api/get-job-list')
            .then(response => {
                console.log('data: ', response.data)
                this.setState({
                    jobs: response.data.Jobs,
                    filteredJobs: response.data.Jobs
                })
            })
        
    }

    handleLocationSearch = (e) => {
        this.setState({
            locationSearch: e.target.value
        })
        this.filterByLocation()
    }

    reset = () => {
        this.setState({
            filteredJobs: this.state.jobs
        })
    }


    filterByLocation = () => {
        let lowerCaseLocationSearch = this.state.locationSearch.toLowerCase()
        let jobs = this.state.jobs 

        let filteredJobs = jobs.filter(job => {
            let lowerCaseLocation = (!job.location) ? '' : job.location.toLowerCase()
            return lowerCaseLocation.includes(lowerCaseLocationSearch)
        })

        this.setState({
            filteredJobs
        })
    }

    handleCategoryChange = (category)  => {
        this.setState({
            categoryFilter: category
        })
        this.filterCategory(this.state.categoryFilter)
    }

    filterCategory = (category) => {
        
        let jobs = this.state.jobs 

        let filteredJobs = jobs.filter(job => {
            return job.category === category
        })

        this.setState({
            filteredJobs
        })
    }

    render(){

        return(
            <div>
                <h1>Jobs Tab</h1>
                <Filter
                    handleLocationChange={this.handleLocationSearch}
                    handleCategoryChange={this.handleCategoryChange}
                    handleReset={this.reset}
                />
                <h3>Jobs: </h3>
                <JobList
                    jobs={this.state.filteredJobs}
                />
            </div>
        )
    }

}

export default JobTab