/**
 * Created by jerry on 3/28/17.
 */
const toggleTodo = (todo) => {
    return Object.assign({},todo,
        {completed: !todo.completed}
    );
}
export default toggleTodo;