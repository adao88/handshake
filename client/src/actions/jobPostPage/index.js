import axios from 'axios'

export const fetchJobPostPageInfo = () => async dispatch => {
    console.log('fetching job post page info from actions: ')
    let data = await axios.get('/api/get-job-post-page')
                    .then(response => {
                        console.log('job post page info results: ', response)
                        return response.data
                    })
    dispatch({
        type: 'GET_JOB_POST_PAGE',
        payload: data
    })
}

export const postNewJob = (newJob) => async dispatch => {
    console.log('posting new job from actions: ', newJob)
    let data = await axios.post('/api/post-new-job', newJob)
                        .then(response => {
                            console.log('updated jobs list (array): ', response.data.JobsPosted)
                            return response.data.JobsPosted
                        })
    console.log('payload data: ', data)
    dispatch({
        type: 'POST_NEW_JOB',
        payload: data
    })
}

export const updateJobStatus = (job) => async dispatch => {
    console.log('updating applied job: ', job)
    let data = await axios.post('/api/update-job-status', job)
                        .then(response => {
                            console.log('updated applied jobs list: ', response.data)
                            return response.data
                        })

    dispatch({
        type: 'UPDATE_JOB_STATUS',
        payload: data
    })
}