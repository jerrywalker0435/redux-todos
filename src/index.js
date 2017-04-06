import React from 'react';
import ReactDOM from 'react-dom';
import {Provider}from 'react-redux';
import TodoApp from './components/TodoApp';
import './static/css/index.css';
import store from './store';
ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('root')
);




