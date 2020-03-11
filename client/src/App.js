import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import CompanyRegister from './components/CompanyRegister'
import CompanyLogin from './components/CompanyLogin'


class App extends Component {
  render(){

    const App = () => {
      return(
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route path='/company-register' component={CompanyRegister}/>
          <Route path='/company-login' component={CompanyLogin}/>
        </Switch>
      </div>
      )
    }
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
