/**
 * Created by jerry on 3/28/17.
 */
import React from 'react';
import store from '../store';
let nextTodoId = 0;
const TodoApp = (props) => {
    let input
    return (
        <div>
            <input ref={
                node => {
                    input = node;
                }
            }/>
            <button onClick={()=> {
                store.dispatch(
                    {
                        type: 'ADD_TODO',
                        text: input.value,
                        id: nextTodoId++
                    }
                );
                input.value = '';
            }}>
                Add Todo
            </button>
            <ul>
                {props.todos.map(todo=>
                    <li key={todo.id}
                        onClick={ ()=> store.dispatch({
                            type: 'TOGGLE_TODO',
                            id: todo.id
                        })}

                        style={{
                            textDecoration: todo.completed ?
                                'line-through' :
                                'none'
                        }}
                    >
                        {todo.text}
                    </li>
                )}
            </ul>
        </div>
    )
}
export default TodoApp;