import axios from 'axios'



export const selectInfo = (type) => {
    return {
        type: 'INFO_SELECTED',
        payload: type
    }
}

export const changeBasicInfo = (info) =>  async dispatch =>{
    let response = await axios.post('/api/change-basic-info', info)
    .then(
        response => {
            console.log('post response: ', response)
            return response.data
        }
    )

    dispatch({
        type: 'CHANGE_BASIC_CONTACT_INFO',
        payload: response
    })
}

export const changeSkillsInfo = (info) => async dispatch => {
    let data = await axios.post('/api/change-skills-info', info)
                    .then(response => {
                        console.log('skills change response: ', response.data)
                        return response.data
                    })

    dispatch({
        type: 'CHANGE_SKILLS_INFO',
        payload: data
    })

}
export const editExperienceInfo = (info) => async dispatch => {
    console.log('Editing experience info action...')
    let data = await axios.post('/api/edit-experience', info)
                        .then(response => {
                            console.log("response from editing experience (array): ", response.data.Experience)
                            return response.data.Experience
                        })
    dispatch({
        type: 'EDIT_EXPERIENCE_INFO',
        payload: data
    })
}

export const addExperienceInfo = (info) => async dispatch => {
    
    console.log('dispatching new experience info...')

    let data = await axios.post('/api/add-experience', info)
                .then(response => {
                    console.log("Response from adding experience (array): ", response.data.Experience)
                    return response.data.Experience
                })
    dispatch({
        type: 'ADD_EXPERIENCE_INFO',
        payload: data
    })
}

export const deleteExperienceInfo = (id) => async dispatch => {
    console.log('Deleting Experience ID: ', id)

    let data = await axios.post('/api/delete-experience', {id})
                .then(response => {
                    console.log("Response from deleting from experience (array): ", response.data.Experience)
                    return response.data.Experience
                })

    dispatch({
        type: "DELETE_EXPERIENCE_INFO",
        payload: data
    })
}

export const editEducationInfo = (info) => async dispatch => {
    console.log('Editing education info action...')

    let data = await axios.post('/api/edit-education', info)
                        .then(response => {
                            console.log('Response from editing education (array):', response.data.Education)
                            return response.data.Education
                        })

    dispatch({
        type: 'EDIT_EDUCATION_INFO',
        payload: data
    })


}

export const addEducationInfo = (info) => async dispatch => {
    
    console.log('dispatching new education info...')

    let data = await axios.post('/api/add-education', info)
                .then(response => {
                    console.log("Response from adding education (array): ", response.data.Education)
                    return response.data.Education
                })
    dispatch({
        type: 'ADD_EDUCATION_INFO',
        payload: data
    })
}

export const deleteEducationInfo = (id) => async dispatch => {
    console.log('Deleting Education ID: ', id)

    let data = await axios.post('/api/delete-education', {id})
                .then(response => {
                    console.log("Response from deleting from education (array): ", response.data.Education)
                    return response.data.Education
                })

    dispatch({
        type: "DELETE_EDUCATION_INFO",
        payload: data
    })
}
/*
export const changeEducationInfo = (info) => {
    return {
        type: 'CHANGE_EDUCATION_INFO',
        payload: info
    }
}
*/


export const fetchUserInfo = () => async dispatch => {
        console.log('fetching info')
        let data = await axios.post('/api/get-user-profile', {message: "fetching info"})
                    .then(response => {
                        console.log('user profile results: ', response)
                        return response.data
                    })
        dispatch({
            type: 'GET_USER_INFO',
            payload: data
        })

    }
