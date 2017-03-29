/**
 * Created by jerry on 3/28/17.
 */
import React from 'react';
import store from '../store';
import FilterLink from './FilterLink';
import { getVisibleTodos } from '../reducer/filter';
let nextTodoId = 0;
const TodoApp = (props) => {

    const visibleTodos = getVisibleTodos(props.todos,props.visibilityFilter);
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
                {visibleTodos.map(todo=>
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
            <p>
                Show:
                <FilterLink filter="SHOW_ALL"> All </FilterLink>
                <FilterLink filter="SHOW_ACTIVE"> Active </FilterLink>
                <FilterLink filter="SHOW_COMPLETED"> Completed </FilterLink>
            </p>
        </div>
    )
}
export default TodoApp;