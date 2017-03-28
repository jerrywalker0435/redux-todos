/**
 * Created by jerry on 3/28/17.
 */
const toggleTodo = (todo) => {
    todo.completed = !todo.completed;
    return todo;
}
export default toggleTodo;