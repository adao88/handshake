import {combineReducers} from 'redux'
import {selectedInfoReducer} from './select'
import userInfoReducer from './UserInfo'
import companyInfoReducer from './CompanyInfo'
//import the reducers and export it

export default combineReducers({
    userInfo: userInfoReducer,
    companyInfo: companyInfoReducer,
    selectedInfo: selectedInfoReducer,
})