import React, { Component } from 'react';
import axios from 'axios'



class CompanyRegister extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            email: "",
            password: "",
            name: "",
            message: ""
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
        
        const newCompany = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        console.log('newCompany', newCompany)
        axios.defaults.withCredentials = true;

        axios.post('/company-register', newCompany)
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
                <h1>Company Registration</h1>
                <form>
                    <input onChange={this.nameChangeHandler} placeholder="name" type="text"/>
                    <input onChange={this.emailChangeHandler} placeholder="email" type="text"/>
                    <input onChange={this.passwordChangeHandler} placeholder="password" type="text"/>
                    <button type="button" onClick={this.submitRegistration}>Register!</button>
                </form>
                {this.state.message}
            </div>
        )
    }
}

export default CompanyRegister