export const ADD_TO_LIST = "ADD_TO_LIST"
export const REMOVE_FROM_LIST ="REMOVE_FROM_LIST"
 
export function addToList(todolist){
    return{
        type : ADD_TO_LIST,
        payload : todolist
    }
}

export function removeFromList(todolist){
    return{
        type : REMOVE_FROM_LIST,
        payload : todolist
    }
}