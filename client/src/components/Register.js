import React, { Component } from 'react';
import axios from 'axios'



class Register extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            name: "",
            email: "",
            password: "",
            schoolName: "",
            degree: "",
            message: ''
        }
    
    }

    degreeChangeHandler = (e) => {
        this.setState({
            degree: e.target.value
        })
    }

    nameChangeHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    emailChangeHandler = (e) => {
        this.setState({
            email: e.target.value
        })
        
    }

    passwordChangeHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    schoolNameChangeHandler = (e) => {
        this.setState({
            schoolName: e.target.value
        })
    }

    submitRegistration = (e) => {
        e.preventDefault()
        
        const newUser = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            schoolName: this.state.schoolName,
            degree: this.state.degree
        }
        console.log('newUser', newUser)
        axios.defaults.withCredentials = true;

        axios.post('/register', newUser)
            .then(response => {
                console.log('Response: ', response)
                this.setState({
                    message: response.data.message
                })
            })
    }



    render(){
        
        return(
            <div>
                <h1>User Registration</h1>
                <form>
                    <input onChange={this.nameChangeHandler} placeholder="Name" type="text"/>
                    <input onChange={this.schoolNameChangeHandler} placeholder="School Name" type="text"/>
                    <input onChange={this.emailChangeHandler} placeholder="Email" type="text"/>
                    <input onChange={this.passwordChangeHandler} placeholder="Password" type="text"/>
                    <button type="button" onClick={this.submitRegistration}>Register!</button>
                </form>
                {this.state.message}
            </div>
        )
    }
}

export default Register