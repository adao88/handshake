const initialState = {
    Basic:{
        name: '',
        location: '',
        description: '',
    },
    Contact: {
        email: '',
        phone: '',
    }
}


const companyInfoReducer = (state = initialState, action) => {

    switch(action.type){
        
        case 'CHANGE_BASIC_INFO':
            let basicPayload = action.payload
            let newBasicObj = {
                Basic: {
                    ...basicPayload
                }
            }
            console.log('new Basic info: ', newBasicObj)
            return{
                ...state,
                ...newBasicObj
            }

        case 'CHANGE_CONTACT_INFO':
            let contactPayload = action.payload
            let newContactObj = {
                Contact: {
                    ...contactPayload
                }
            }
            console.log('new Contact info: ', newContactObj)
            return {
                ...state,
                ...newContactObj
            }

        case 'GET_COMPANY_INFO': 
            let companyPayload = action.payload
            console.log('company info: ', companyPayload)
            return{
                ...companyPayload
            }


        default:
            return state
    }
}

export default companyInfoReducer