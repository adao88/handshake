export const selectedInfoReducer = (selectedInfo = null, action) => {
    if (action.type === 'INFO_SELECTED'){
        console.log('payload', action.payload)
        return action.payload
    }
    return selectedInfo
}

