/**
 * Created by jerry on 3/28/17.
 */
import { combineReducers } from 'redux';
const todo = (state,action) => {

    switch (action.type){
        case 'ADD_TODO':
            return {
                id:action.id,
                text: action.text,
                completed:false
            }
        case 'TOGGLE_TODO':
            if(state.id !== action.id){
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state;
    }
}

export const todos = (state=[],action={})=>{
    console.log('todos reducer ==',action)
    switch (action.type){
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined,action)
            ]
        case 'TOGGLE_TODO':
            return state.map(t=>todo(t,action));
        default:
            return state;
    }
}

const visibilityFilter = (state='SHOW_ALL',action) => {
    console.log('visibilityFilter reducer ==',action)
    switch (action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}
//combine Reducers ,different action will not effect different reducer
// const todoApp = (state={},action) => {
//     return {
//         todos: todos(
//             state.todos,
//             action
//         ),
//         visibilityFilter: visibilityFilter(
//             state.visibilityFilter,
//             action
//         )
//     }
// }

// const todoApp = combineReducers({
//     todos: todos,
//     visibilityFilter: visibilityFilter
// })
const todoApp = combineReducers({
    todos,
    visibilityFilter
})
export default todoApp;