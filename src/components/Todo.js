/**
 * Created by jerry on 3/29/17.
 */
import React from 'react';

const Todo = ({onClick,completed,text}) => (

    <li onClick={ onClick }
        style={{
            textDecoration: completed ?
                'line-through' :
                'none'
        }}
    >
        {text}
    </li>
)


export default Todo;
