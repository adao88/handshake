import axios from 'axios'


export const changeBasicInfo = (info) =>  async dispatch =>{
    let response = await axios.post('/api/change-company-basic-info', info)
    .then(
        response => {
            console.log('basic-info post response: ', response)
            return response.data
        }
    )

    dispatch({
        type: 'CHANGE_BASIC_INFO',
        payload: response
    })
}

export const changeContactInfo = (info) =>  async dispatch =>{
    let response = await axios.post('/api/change-company-contact-info', info)
    .then(
        response => {
            console.log('contact-info change post response: ', response)
            return response.data
        }
    )

    dispatch({
        type: 'CHANGE_CONTACT_INFO',
        payload: response
    })
}

export const fetchCompanyInfo = () => async dispatch => {
    console.log('fetching info')
    let data = await axios.post('/api/get-company-profile', {message: "fetching info"})
                .then(response => {
                    console.log('company profile results: ', response)
                    return response.data
                })
    dispatch({
        type: 'GET_COMPANY_INFO',
        payload: data
    })

}