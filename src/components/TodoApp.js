/**
 * Created by jerry on 3/28/17.
 */
import React from 'react';
import store from '../store';
import FilterLink from './FilterLink';
import TodoList from './TodoList';
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
            <TodoList todos={visibleTodos} onTodoClick={
                id => store.dispatch(
                    {
                        type: 'TOGGLE_TODO',
                        id: id
                    }
                )
            }/>

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