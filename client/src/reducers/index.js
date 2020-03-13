import {combineReducers} from 'redux'
import {selectedInfoReducer} from './select'
import userInfoReducer from './UserInfo'
//import the reducers and export it

export default combineReducers({
    userInfo: userInfoReducer,
    selectedInfo: selectedInfoReducer,
})