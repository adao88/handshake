import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router'
import cookie from 'react-cookies'



class Login extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            email: "",
            password: "",
            logged: false,
            message: ''
        }
    
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

    submitLogin = (e) => {
        e.preventDefault()
        
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log('User: ', user)

        axios.post('/login', user)
            .then(response => {
                console.log('Response: ', response)
                if(response.data.login === 'Success')
                this.setState({
                    logged: true
                })
                this.setState({
                    message: response.data.message
                })
            })
    }

    getInfo = (e) => {
        e.preventDefault()

        axios.get(`/api/get-user-profile/`)
            .then(response => {
                console.log('Response: ', response)
            })
    }



    render(){
        let redirectVar = null
        if(cookie.load("Student-Logged")){
            redirectVar = <Redirect to='/job-tab'/>
        }
        
        return(
            <div>
                <h1>Student Login</h1>
                {redirectVar}
                <form>
                    <input onChange={this.emailChangeHandler} placeholder="email" type="text"/>
                    <input onChange={this.passwordChangeHandler} placeholder="password" type="password"/>
                    <button type="button" onClick={this.submitLogin}>Login!</button>
                    <button type="button" onClick={this.getInfo}>Get Info</button>
                </form>
                {this.state.message}
            </div>
        )
    }
}

export default Login