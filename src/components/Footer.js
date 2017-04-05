/**
 * Created by jerry on 3/29/17.
 */
import React from 'react';
import FilterLink from './FilterLink';

const AddTodo = ({
    visibilityFilter,
    onFilterClick
}) => {
    let input;
    return (
        <div>
            <p>
                Show:
                <FilterLink filter="SHOW_ALL"  onClick={onFilterClick} currentFilter={visibilityFilter}> All </FilterLink>
                <FilterLink filter="SHOW_ACTIVE" onClick={onFilterClick} currentFilter={visibilityFilter}> Active </FilterLink>
                <FilterLink filter="SHOW_COMPLETED" onClick={onFilterClick} currentFilter={visibilityFilter}> Completed </FilterLink>
            </p>
        </div>
    )
}


export default AddTodo;
