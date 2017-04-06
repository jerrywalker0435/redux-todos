import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import Provider from './Provider';
import './static/css/index.css';
import store from './store';
ReactDOM.render(
    <Provider store={store}>
    <TodoApp/>
    </Provider>,
    document.getElementById('root')
);




