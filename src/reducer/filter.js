/**
 * Created by jerry on 3/29/17.
 */
export const getVisibleTodos = (todos,filter) => {

    switch (filter){
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
}

