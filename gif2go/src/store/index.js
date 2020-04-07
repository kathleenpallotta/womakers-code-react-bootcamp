import {createStore} from 'redux'
import gifs from '../reducers'

const store = createStore(gifs)

export default store