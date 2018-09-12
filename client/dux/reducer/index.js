import { combineReducers } from 'redux';
import auth from './authReducer'
import todo from './todoReducers'
// import filters from './visibilityFilter'

export default combineReducers({
    auth,
    todo,
    // filters
})