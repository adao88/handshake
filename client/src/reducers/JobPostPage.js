const initialSate = {
    JobsPosted: [],
    JobsApplied: [],
}

const jobPostPageReducer = (state = initialSate, action) => {
    switch(action.type){
        
        case 'GET_JOB_POST_PAGE':
            let jobPostsPayload = action.payload
            console.log('Getting Job Posts Page...', jobPostsPayload)
            return{
                ...jobPostsPayload
            }
        
        case 'POST_NEW_JOB':
            let newJobsPostedObj = {
                JobsPosted: action.payload
            }
            console.log('action: ', action)
            console.log('payload from reducer: ', action.payload)
            console.log('adding new jobs posted info: ', newJobsPostedObj)
            return {
                ...state,
                ...newJobsPostedObj
            }

        case 'UPDATE_JOB_STATUS':
            let updatedJobsStatus = {
                ...action.payload
            }
            console.log('updating applied jobs\' status: ', updatedJobsStatus)
            return{
                ...state,
                ...updatedJobsStatus
            }

        default:
            return state
    }        
}

export default jobPostPageReducer