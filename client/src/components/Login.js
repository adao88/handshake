import React, { Component } from 'react';
import axios from 'axios'
import Logout from './Logout'
import {Redirect} from 'react-router'
import cookie from 'react-cookies'



class Login extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            email: "",
            password: "",
            logged: false
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
        axios.defaults.withCredentials = true;

        axios.post('/login', user)
            .then(response => {
                console.log('Response: ', response)
                if(response.data.login === 'Success')
                this.setState({
                    logged: true
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
        if(cookie.load("Logged-In")){
            redirectVar = <Redirect to='/userProfile'/>
        }
        
        return(
            <div>
                {redirectVar}
                <form>
                    <input onChange={this.emailChangeHandler} placeholder="email" type="text"/>
                    <input onChange={this.passwordChangeHandler} placeholder="password" type="text"/>
                    <button type="button" onClick={this.submitLogin}>Login!</button>
                    <button type="button" onClick={this.getInfo}>Get Info</button>
                </form>
                <Logout/>
            </div>
        )
    }
}

export default Login