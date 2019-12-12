import { combineReducers } from 'redux'

import authReducer from './authReducer'
import statCardReducer from './statCardReducer'

export default combineReducers({
    authState: authReducer,
    statCardState: statCardReducer
});
