import axios from 'axios'


export const getUserProfile = () => {
    axios.get('/api/get-user-profile')
        .then(response => {
            console.log('user profile results: ', response)
            return response.data.userInfo
        })
}


export const getUserEducation = () => {
    axios.get('/api/get-education')
        .then(response => {
            console.log('education results response: ', response)
            return response.data
        })
}