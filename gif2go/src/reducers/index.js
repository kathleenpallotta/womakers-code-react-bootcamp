const INITIAL_STATE = {
    gifsList: null,
    query: ''
}

export default function gifs (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'DISPLAY_GIFS': 
            return {...state, gifsList: [action.item]}
        case 'QUERY':
            return {...state, query: [action.item]}
        default:
            return state
    }
}