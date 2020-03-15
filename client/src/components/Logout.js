import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Logout = (props) => {

    const logout = () => {
        axios.post('/logout')
            .then(response => {
                console.log('response', response)
            })
    }

    return (
        <div>
            <Link to="/"><button onClick={logout}>Logout!</button></Link>
        </div>
    )
}

export default Logout