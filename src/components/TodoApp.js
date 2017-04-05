/**
 * Created by jerry on 3/28/17.
 */
import React from 'react';
import store from '../store';
import Footer from './Footer';
import TodoList from './TodoList';
import {getVisibleTodos} from '../reducer/filter';
import AddTodo from './AddTodo';

let nextTodoId = 0;
const TodoApp = ({todos, visibilityFilter}) => (
    <div>
        <AddTodo onAddClick={ text =>
            store.dispatch(
                {
                    type: 'ADD_TODO',
                    id: nextTodoId++,
                    text: text
                }
            )
        }/>
        <TodoList todos={getVisibleTodos(todos, visibilityFilter)} onTodoClick={
            id => store.dispatch(
                {
                    type: 'TOGGLE_TODO',
                    id: id
                }
            )
        }/>

        <Footer visibilityFilter={visibilityFilter} onFilterClick={
            filter => store.dispatch(
                {
                    type: 'SET_VISIBILITY_FILTER',
                    filter

                }
            )
        }
        />

    </div>
)

export default TodoApp;