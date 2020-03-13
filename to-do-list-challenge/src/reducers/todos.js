const INITIAL_STATE = {
    toDoList:['Limpar a casa','Fazer almoço']
}

export default function todos (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_TO_DO': 
            return {...state, toDoList: [...state.toDoList, action.item]}
        default:
            return state
    }
}