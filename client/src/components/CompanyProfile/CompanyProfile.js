import {connect} from 'react-redux'
import React, {Component} from 'react'
import cookie from 'react-cookies'
import {Redirect} from 'react-router'
import {changeBasicInfo, changeContactInfo, fetchCompanyInfo} from '../../actions/companyProfile'
import CompanyBasic from './CompanyBasic'
import CompanyContact from './CompanyContact'
import ChangeBasicInfo from './ChangeBasicInfo'
import ChangeContactInfo from './ChangeContactInfo'

class CompanyProfile extends Component {
    constructor(props){
        super(props)

        this.state = {
            showBasicForm: false,
            showContactForm: false,
            logged: true
        }
    }


    componentDidMount() {
        console.log('state: ', this.state)

        if(cookie.load("Logged-In")){
            this.props.fetchCompanyInfo()
        }
    }

    showBasicForm = () => {
        this.setState({
            showBasicForm: true
        })
    }

    showContactForm = () => {
        this.setState({
            showContactForm: true
        })
    }

    hideBasicForm = () => {
        this.setState({
            showBasicForm: false
        })
    }

    hideContactForm = () => {
        this.setState({
            showContactForm: false
        })
    }

    submitBasicForm = (newBasicInfo) => {
        this.props.changeBasicInfo(newBasicInfo)
        this.hideBasicForm()
    }

    submitContactForm = (newContactInfo) => {
        this.props.changeContactInfo(newContactInfo)
        this.hideContactForm()
    }


    render(){

        console.log('props', this.props)
        let redirectVar = null
        if(!cookie.load("Logged-In") || this.state.logged === false){
            redirectVar = <Redirect to='/company-login'/>
        }

        return(
            <div className="ui segment">
                {redirectVar}
                <h2>Basic Info</h2>
                <CompanyBasic
                    name={this.props.companyInfo.Basic.name}
                    location={this.props.companyInfo.Basic.location}
                    description={this.props.companyInfo.Basic.description}
                />
                <button className="ui button primary" onClick={this.showBasicForm}>Edit</button>
                <ChangeBasicInfo
                    showBasicForm={this.state.showBasicForm} 
                    hideBasicForm={this.hideBasicForm} 
                    submitBasicForm={this.submitBasicForm}
                />
                <div class="ui section divider"></div>
                <h2>Contact Info</h2>
                <CompanyContact
                    email={this.props.companyInfo.Contact.email}
                    phone={this.props.companyInfo.Contact.phone}
                />
                <button className="ui button primary" onClick={this.showContactForm}>Edit</button>
                <ChangeContactInfo
                    showContactForm={this.state.showContactForm}
                    hideContactForm={this.hideContactForm}
                    submitContactForm={this.submitContactForm}
                />
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    console.log(state)
    return {
        companyInfo: state.companyInfo
    }
}

export default connect(mapStatetoProps, {changeBasicInfo, changeContactInfo, fetchCompanyInfo})(CompanyProfile)