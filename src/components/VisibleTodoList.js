/**
 * Created by jerry on 4/6/17.
 */
import TodoList from './TodoList';
import { getVisibleTodos } from '../reducer/filter';
import { toggleTodo } from '../actions';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: id =>
            dispatch(toggleTodo(id))
    }
}
const VisibleTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default VisibleTodoList;
