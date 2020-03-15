import React, {useState} from 'react'

const ChangeContactInfo = ({showContactForm, submitContactForm, hideContactForm}) => {

    const [newEmail, setNewEmail] = useState('')
    const [newPhone, setNewPhone] = useState('')

    const handleEmailChange = (e) => {
        setNewEmail(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setNewPhone(e.target.value)
    }


    const handleSubmit = () => {
        let ContactInfo = {
            email: newEmail,
            phone: newPhone,
        }

        console.log('new contact info: ', ContactInfo)

        submitContactForm(ContactInfo)

        setNewEmail('')
        setNewPhone('')

    }

    let show = showContactForm ? "modal display-block" : "modal display-none"

    return(
        <div className ={show} >
            <div className="modal-main">
                <form class="ui form">
                    <div class="field">
                        <label>Email</label>
                        <input type="text" name="name" placeholder="Email" value={newEmail} onChange={handleEmailChange}></input>
                    </div>
                    <div class="field">
                        <label>Phone</label>
                        <input type="text" name="phone" placeholder="Phone" value={newPhone}onChange={handlePhoneChange}></input>
                    </div>             
                    <button type="button" onClick={handleSubmit}>Submit</button>
                    <button type="button" onClick={hideContactForm}>Close</button>
                </form>
            </div>
        </div>
    )
}

export default ChangeContactInfo