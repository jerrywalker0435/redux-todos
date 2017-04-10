/**
 * Created by jerry on 4/6/17.
 */

let nextTodoId = 0;
export const addTodo = (text) => (
    {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: text
    }
)

export const toggleTodo = (id) => (

    {
        type: 'TOGGLE_TODO',
        id
    }
)


export const setVisibilityFilter = (filter) => (
    {
        type: 'SET_VISIBILITY_FILTER',
        filter: filter
    }
)