import React, {Component} from 'react'
import cookie from 'react-cookies';
import {Link} from 'react-router-dom';
import Logout from '../Logout'

class NavBar extends Component {
    



    render(){
        let profilePage = null
        let jobTab = null
        let eventsTab = null
        let appTab = null

        if(cookie.load('Student-Logged')){
            profilePage = (
                <Link to="/userProfile">Student Profile</Link>
            )
            appTab = (
                <div className="item"><Link to="/applicationsTab">Applications</Link></div>
            )
            eventsTab = (
                <Link to="/student-events-tab">Events</Link>
            )
            jobTab = (
                <Link to="/job-tab">Jobs</Link>
            )
        } else if (cookie.load('Company-Logged')){
            profilePage = (
                <Link to="/companyProfile">Company Profile</Link>
            )
            jobTab = (
                <Link to="/jobPosts">Jobs</Link>
            )
            eventsTab = (
                <Link to="/company-events-tab">Events</Link>
            )
        }

        let studentsTab = (
            <Link to="student-tab">Students-Tab</Link>
        )




        return(
            <div className="ui menu">
                <div className="item">{profilePage}</div>
                <div className="item">{jobTab}</div>
                <div className="item">{eventsTab}</div>
                <div className="item">{studentsTab}</div>
                {appTab}
                <div className="right menu"><div className="item"><Logout/></div></div>
            </div>
        )
    }

}

export default NavBar