import React, { Component } from 'react';
import axios from 'axios'



class Register extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            name: "",
            email: "",
            password: "",
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

    submitRegistration = (e) => {
        e.preventDefault()
        
        const newUser = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
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
                    <input onChange={this.nameChangeHandler} placeholder="name" type="text"/>
                    <input onChange={this.emailChangeHandler} placeholder="email" type="text"/>
                    <input onChange={this.passwordChangeHandler} placeholder="password" type="text"/>
                    <button type="button" onClick={this.submitRegistration}>Register!</button>
                </form>
            </div>
        )
    }
}

export default Register