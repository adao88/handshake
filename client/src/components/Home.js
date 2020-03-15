import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router'
import cookie from 'react-cookies'


class Home extends Component {
  render() {

    let redirectVar = null
        if(cookie.load("Company-Logged")){
            console.log('logged in cookie loaded!')
            redirectVar = <Redirect to='/jobPosts'/>
        }
        if(cookie.load("Student-Logged")){
          redirectVar = <Redirect to="/job-tab"/>
        }


    return (
      
    <div className="App">
      {redirectVar}
      <h1>Welcome to Handshake!</h1>
      {/* Link to List.js */}
      <div>
        <Link to={'./register'}>
          <button variant="raised">
              Go To Registration for Students
          </button>
        </Link>
        <Link to={'./login'}>
          <button variant="raised">
              Go To Login for Students
          </button>
        </Link>
      </div>
      <div>
        <Link to={'./company-register'}>
          <button variant="raised">
              Go To Registration for Companies
          </button>
        </Link>
        <Link to={'./company-login'}>
          <button variant="raised">
              Go To Login for Companies
          </button>
        </Link>
      </div>
    </div>
    );
  }
}
export default Home;