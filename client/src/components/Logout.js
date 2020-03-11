import React from 'react'
import axios from 'axios'

const Logout = (props) => {

    const logout = () => {
        axios.post('/logout')
            .then(response => {
                console.log('response', response)
            })
    }

    return (
        <div>
            <button onClick={logout}>Logout!</button>
        </div>
    )
}

export default Logout