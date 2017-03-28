/**
 * Created by jerry on 3/28/17.
 */
const toggleTodo = (todo) => {
    return {
        id: todo.id,
        text: todo.text,
        completed: !todo.completed
    };
}
export default toggleTodo;