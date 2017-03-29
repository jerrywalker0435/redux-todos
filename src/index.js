import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import './static/css/index.css';
import store from './store';
const render = ()=> {
    ReactDOM.render(
        <TodoApp {...store.getState()}/>,
        document.getElementById('root')
    );

}

store.subscribe(render);
render();

