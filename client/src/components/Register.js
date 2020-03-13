import React, { Component } from 'react';
import axios from 'axios'



class Register extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            name: "",
            email: "",
            password: "",
            schoolName: ""
        }
    
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
            schoolName: this.state.schoolName
        }
        console.log('newUser', newUser)
        axios.defaults.withCredentials = true;

        axios.post('/register', newUser)
            .then(response => {
                console.log('Response: ', response)
            })
    }



    render(){
        
        return(
            <div>
                <form>
                    <input onChange={this.nameChangeHandler} placeholder="Name" type="text"/>
                    <input onChange={this.schoolNameChangeHandler} placeholder="School Name" type="text"/>
                    <input onChange={this.emailChangeHandler} placeholder="Email" type="text"/>
                    <input onChange={this.passwordChangeHandler} placeholder="Password" type="text"/>
                    <button type="button" onClick={this.submitRegistration}>Register!</button>
                </form>
            </div>
        )
    }
}

export default Register