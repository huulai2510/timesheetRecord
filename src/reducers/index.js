import {combineReducers} from 'redux'
import timesheetRecordReducer from './timesheetRecordReducer'
import recordDetailReducer from './recordDetailReducer'
import nameRecordReducer from './nameRecordReducer'

const rootReducer = combineReducers({
    timesheetRecordReducer,
    recordDetailReducer,
    nameRecordReducer
})

export default rootReducer