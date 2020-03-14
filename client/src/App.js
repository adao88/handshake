import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import CompanyRegister from './components/CompanyRegister'
import CompanyLogin from './components/CompanyLogin'
import UserProfile from './components/UserPofile/UserProfile'
import CompanyProfile from './components/CompanyProfile/CompanyProfile'
import JobPostPage from './components/Jobs/JobPostPage'

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
          <Route path='/userProfile' component={UserProfile}/>
          <Route path='/companyProfile' component={CompanyProfile}/>
          <Route path='/jobPosts' component={JobPostPage}/>
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