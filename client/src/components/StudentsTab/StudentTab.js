import React, {Component} from 'react'
import StudentsList from './StudentsList'
import Filter from './Filter'
import axios from 'axios'


class StudentTab extends Component {
    constructor(props){
        super(props)
        this.state = {
            nameSearch: '',
            skillSearch: '',
            schoolSearch: '',
            filteredStudents: [],
            students: []
        }
    }

    componentDidMount() {
        //fetch all students here and assign to students & filteredStudents
        

        axios.get('/api/get-student-list')
            .then(response => {
                console.log('data: ', response.data)
                this.setState({
                    students: response.data.Students,
                    filteredStudents: response.data.Students
                })
            })
    }

    handleNameSearch = (e) => {
        this.setState({
            nameSearch: e.target.value,
            skillSearch: '',
            schoolSearch: ''
        })
        this.filterByName()
    }

    handleSkillSearch = (e) => {
        this.setState({
            skillSearch: e.target.value,
            schoolSearch: '',
            nameSearch: ''
        })
        this.filterBySkill()
    }

    handleSchoolSearch = (e) => {
        this.setState({
            schoolSearch: e.target.value,
            nameSearch: '',
            skillSearch: ''
        })
        this.filterBySchool()
    }

    filterByName = () => {
        let lowerCaseNameSearch = this.state.nameSearch.toLowerCase()
        let students = this.state.students
        console.log('students: ', students)
        //filtered Array
        let filteredStudents = students.filter(student => {
            let lowerCaseName = (!student.name) ? '' : student.name.toLowerCase() 
            return lowerCaseName.includes(lowerCaseNameSearch)
        })

        this.setState({
            filteredStudents: filteredStudents
        })
    }

    filterBySkill = () => {
        let lowerCaseSkillSearch = this.state.skillSearch.toLowerCase()
        let students = this.state.students
        //filtered Array
        let filteredStudents = students.filter(student => {
            let lowerCaseSkills = (!student.skillset) ? '' : student.skillset.toLowerCase() 
            return lowerCaseSkills.includes(lowerCaseSkillSearch)
        })

        this.setState({
            filteredStudents: filteredStudents
        })
    }

    filterBySchool = () => {
        let lowerCaseSchoolSearch = this.state.schoolSearch.toLowerCase()
        let students = this.state.students
        //filtered Array
        let filteredStudents = students.filter(student => {
            let lowerCaseSchool = (!student.schoolname) ? '' : student.schoolname.toLowerCase() 
            return lowerCaseSchool.includes(lowerCaseSchoolSearch)
        })

        this.setState({
            filteredStudents: filteredStudents
        })
    }



    render(){

        return(
            <div>
                <h3>Filter By:</h3>
                <Filter
                    handleNameChange={this.handleNameSearch}
                    handleSchoolChange={this.handleSchoolSearch}
                    handleSkillChange={this.handleSkillSearch}
                />
                <h2>Students:</h2>
                <StudentsList
                    students={this.state.filteredStudents}
                />
            </div>
        )
    }


}

export default StudentTab