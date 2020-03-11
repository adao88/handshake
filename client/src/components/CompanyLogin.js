import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios'


class CompanyLogin extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            email: "",
            password: ""
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
            password: this.state.password
        }
        console.log('User: ', user)
        axios.defaults.withCredentials = true;

        axios.post('/company-login', user)
            .then(response => {
                console.log('Response: ', response)
            })
    }



    render(){
        return(
            <div>
                <form>
                    <input onChange={this.emailChangeHandler} placeholder="email" type="text"/>
                    <input onChange={this.passwordChangeHandler} placeholder="password" type="text"/>
                    <button type="button" onClick={this.submitLogin}>Login!</button>
                </form>
            </div>
        )
    }
}

export default CompanyLogin