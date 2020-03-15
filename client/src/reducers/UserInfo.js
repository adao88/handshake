

const initialState = {
    Basic: {
        name: '',
        birthdate: '',
        location: '',
        email: '',
        phone: '',
        objective: '',
        degree: '',
    },
    Education: [],
    Skillset:{
        skills: ''
    },
    Experience: []
}

const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_BASIC_CONTACT_INFO':
            //console.log('changing contact info...', action.payload)
            let basicPayload = action.payload
            let newBasicObj = {
                Basic: {
                    ...basicPayload
                }
            }
            console.log('new basic info..', newBasicObj)
            return {
                ...state,
                ...newBasicObj
            }

        case 'CHANGE_SKILLS_INFO':
            let newSkillsObj = {
                Skillset: {
                    ...action.payload
                }
            }
            return {
                ...state,
                ...newSkillsObj
            }

        case 'ADD_EXPERIENCE_INFO':
            let experiencePayload = action.payload
            let newExperienceObj = {
                Experience: experiencePayload
            }
            console.log('adding new experience info: ', newExperienceObj)
            return {
                ...state,
                ...newExperienceObj
            }

        case 'ADD_EDUCATION_INFO':
            let educationPayload = action.payload
            //let newEducationArray = state.Education.concat(educationPayload)
            let newEducationObj = {
                Education: educationPayload
            }
            console.log('adding new education info: ', newEducationObj)
            return {
                ...state,
                ...newEducationObj
            }
        
        case 'EDIT_EXPERIENCE_INFO':
            let editedExperienceObj = {
                Experience: action.payload
            }
            console.log('editing new education info with: ', editedExperienceObj)
            return {
                ...state,
                ...editedExperienceObj
            }

        case 'EDIT_EDUCATION_INFO':
            let editedEducationObj = {
                Education: action.payload
            }
            console.log('editing new education info: ', editedEducationObj)
            return {
                ...state,
                ...editedEducationObj
            }

        case 'DELETE_EXPERIENCE_INFO':
            let newDeletedExperienceObj = {
                Experience: action.payload
            }
            console.log('deleting and adding exp. info: ', newDeletedExperienceObj)
            return {
                ...state,
                ...newDeletedExperienceObj
            }

        case 'DELETE_EDUCATION_INFO':
            let deletedEducationPayload = action.payload
            let newDeletedEducationObj = {
                Education: deletedEducationPayload
            }
            console.log('adding new education info: ', newDeletedEducationObj)
            return {
                ...state,
                ...newDeletedEducationObj
            }
            
        case 'GET_USER_INFO':
            let userInfoPayload = action.payload
            console.log('getting user info: ', userInfoPayload)
            return {
                ...userInfoPayload
            }
            
        default:
            return state
    }
}

export default userInfoReducer