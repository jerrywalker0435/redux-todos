/**
 * Created by jerry on 3/28/17.
 */
import React from 'react';
import store from '../store';
import FilterLink from './FilterLink';
import { getVisibleTodos } from '../reducer/filter';
let nextTodoId = 0;
const TodoApp = (props) => {
    const { todos , visibilityFilter } = props;
    const visibleTodos = getVisibleTodos(todos,visibilityFilter);
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
                <FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter}> All </FilterLink>
                <FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter}> Active </FilterLink>
                <FilterLink filter="SHOW_COMPLETED" currentFilter={visibilityFilter}> Completed </FilterLink>
            </p>
        </div>
    )
}
export default TodoApp;