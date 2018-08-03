/*
*action types
*/
export const ActionTypes = {
    ADD_TODO: "ADD_TODO",
    TOGGLE_TODO:"TOGGLE_TODO",
    SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER"
};

/*
 *other constants 
 */
export const VisibilityFilters = { 
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED:  'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/**
 * action creators
 */

let nextTodoId = 0;
 
 export const addToDo = text => {
     return{
        type: ActionTypes.ADD_TODO,
        payload:{
            id: nextTodoId++,
            text: text
        }
     }
 };

 export const toggleTodo = id => {
     return {
         type: ActionTypes.TOGGLE_TODO,
         payload:{
             id: id
         }
     }
 }

 export const setVisibilityFilter = filter => {
     return{
         type: ActionTypes.SET_VISIBILITY_FILTER,
         payload:{
            filter
         }
     }
 }
 

