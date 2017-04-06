/**
 * Created by jerry on 4/6/17.
 */
import React from 'react';
import TodoList from './TodoList';
import { getVisibleTodos } from '../reducer/filter';
class VisibleTodoList extends React.Component {
    componentDidMount(){
        const { store } = this.context;
        this.unsubscribe = store.subscribe(()=>this.forceUpdate());
    }

    componentWillUnmount(){
        this.unsubscribe();
    }
    render(){
        const { store } = this.context;

        const state = store.getState();


        return (
            <TodoList todos={
                getVisibleTodos(state.todos, state.visibilityFilter)
            }
                onTodoClick={
                    id => store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })
                }
            />
        )
    }
}

VisibleTodoList.contextTypes = {
    store: React.PropTypes.object
}

export default VisibleTodoList;
