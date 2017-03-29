/**
 * Created by jerry on 3/29/17.
 */
import React from 'react';
import store from '../store';
const FilterLink = ({
    filter,
    currentFilter,
    children
}) => {
    if(currentFilter === filter){
        return <span>{children}</span>
    }
    return (

        <a href="#"
           onClick={ e => {
               e.preventDefault();
               store.dispatch({
                   type: 'SET_VISIBILITY_FILTER',
                   filter
               });
           }}
        >
            {children}
        </a>
    )
}

export default FilterLink;