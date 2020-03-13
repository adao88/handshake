import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router'
import cookie from 'react-cookies'


class CompanyLogin extends Component {
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
            password: this.state.password
        }
        console.log('User: ', user)

        axios.post('/company-login', user)
            .then(response => {
                console.log('Response: ', response)
                
                if(response.data.login === 'Success'){
                    this.setState({
                        logged: true
                    })
                }
            })
    }




    render(){
        let redirectVar = null
        if(cookie.load("Logged-In")){
            console.log('logged in cookie loaded!')
            redirectVar = <Redirect to='/companyProfile'/>
        }
        return(
            <div>
                {redirectVar}
                <div>
                    <form>
                        <input onChange={this.emailChangeHandler} placeholder="email" type="text"/>
                        <input onChange={this.passwordChangeHandler} placeholder="password" type="text"/>
                        <button type="button" onClick={this.submitLogin}>Login!</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CompanyLogin