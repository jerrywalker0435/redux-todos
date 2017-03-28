/**
 * Created by jerry on 3/28/17.
 */
import React from 'react';
import store from '../store';
let nextTodoId = 0 ;
const TodoApp = (props) => {
    return (
        <div>
            <button onClick={()=>{
                store.dispatch(
                    {
                        type: 'ADD_TODO',
                        text: 'Learn Redux',
                        id: nextTodoId++
                    }
                )
            }}>
                Add Todo
            </button>
            <ul>
                {props.todos.map(todo=>
                    <li key={todo.id}>
                        {todo.text}
                </li>
                )}
            </ul>
        </div>
    )
}
export default TodoApp;