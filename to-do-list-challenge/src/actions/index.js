export const ADD_TO_DO = 'ADD_TO_DO'
export function addToDo(item) {
    return {
        type: ADD_TO_DO, item
    }
}