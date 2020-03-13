import {clickReducer} from './clickReducer'
import {textReducer} from './textReducer'
import {combineReducers} from 'redux'

export const Reducers = combineReducers({
    clickState: clickReducer,
    textState: textReducer
})