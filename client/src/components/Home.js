import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout'


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Welcome to Handshake!</h1>
      {/* Link to List.js */}
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
      <Logout/>
    </div>
    );
  }
}
export default Home;