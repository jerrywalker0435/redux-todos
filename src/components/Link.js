/**
 * Created by jerry on 3/29/17.
 */
import React from 'react';
const Link = ({
                  active,
                  children,
                  onClick
              }) => {
    if (active) {
        return <span>{children}</span>
    }
    return (

        <a href="#"
           onClick={ e => {
               e.preventDefault();
               onClick()
           }}
        >
            {children}
        </a>
    )
}

export default Link;