import { ADD_TO_LIST, REMOVE_FROM_LIST } from "../actions/todolistActions";
import {todolistItems} from "../initialValues/todolistItems";

const initialState = {
    todolistItems : todolistItems
}

export default function todolistReducer(state = initialState,{type,payload}) {
       switch (type) {
           
           case ADD_TO_LIST:
               
                    return{
                        ...state,
                        todolistItems:[...state.todolistItems,{quantity:1,todolist:payload}]
                    }
                
            case REMOVE_FROM_LIST:
                return{
                    ...state,
                    todolistItems:state.todolistItems.filter(a=>a.todolist.id !== payload.id)
                }
           default:
               return {
                 ...state
               }
              
       }
}