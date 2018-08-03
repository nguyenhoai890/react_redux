import {combineReducers} from 'redux';

import { VisibilityFilters } from "../components/todolist/actions";
import {ActionTypes} from "../actions"

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
  }

const todos = (todos = [], action)=>{
    switch(action.type){
        case ActionTypes.ADD_TODO:{
            return [
                    ...todos,
                    {
                        id: action.payload.id,
                        text: action.payload.text,
                        completed: false
                    }
                    ]
        }
        case ActionTypes.TOGGLE_TODO:{
            return todos.map((todo,index)=>{
                if(todo.id === action.payload.id){
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            })
        }
        default:
            return todos;
    }
}

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action)=>{
    switch(action.type){
        case VisibilityFilters.SHOW_ACTIVE:{
            return action.payload.filter;
        }
        default:
            return state;
    }
}

// const todoApp = (state = initialState, action) =>{
//     switch(action.type){
//         case ActionTypes.SET_VISIBILITY_FILTER:{
//             return Object.assign({},state,{
//                 visibilityFilter: visibilityFilter(state.filter, action.payload.filter)
//             })
//         }
//         case ActionTypes.ADD_TODO:
//             return Object.assign({}, state, {
//                 todos: todos(state.todos, action)
//             });
//         case ActionTypes.TOGGLE_TODO:{
//             return Object.assign({}, state,{
//                 todos: todos(state.todos, action)
//             });
//         }
//         default:
//             return state;
//     }
// }

//Option 1
// const todoApp = (state={}, action)=>{
//     return{
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     };
// }

//Option 2
const todoApp = combineReducers({
    visibilityFilter,
    todos
});


export default todoApp