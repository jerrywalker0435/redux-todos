import React from 'react';
import expect from 'expect';
import deepFreeze from 'deep-freeze';
import todoApp,{todos} from '../reducer/index';
import { createStore } from 'redux';


it('Add todo ', () => {

    const todoBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn React'
    }
    const todoAfter = [
        {
            id: 0,
            text: 'Learn React',
            completed: false
        }
    ]
    deepFreeze(todoBefore);
    deepFreeze(action);
    expect(todos(todoBefore, action)).toEqual(todoAfter);

});


it('Toggle todo ', () => {

    const todoBefore = [
        {
            id: 0,
            text: 'Learn React',
            completed: false
        },
        {
            id: 1,
            text: 'Read a book',
            completed: false
        }
    ];
    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    }
    const todoAfter = [
        {
            id: 0,
            text: 'Learn React',
            completed: false
        },
        {
            id: 1,
            text: 'Read a book',
            completed:true
        }
    ]
    deepFreeze(todoBefore);
    deepFreeze(action);
    expect(todos(todoBefore, action)).toEqual(todoAfter);

});

it('Redux store',()=>{

    const store = createStore(todoApp);

    console.log('Initial state: ');
    console.log(store.getState());
    console.log('-----------------');

    console.log('Dispatching ADD_TODO');
    store.dispatch(
        {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn React'
        }
    )

    console.log('Current state: ');
    console.log(store.getState());
    console.log('-----------------');

    console.log('Dispatching ADD_TODO');
    store.dispatch(
        {
            type: 'ADD_TODO',
            id: 1,
            text: 'Go Shopping'
        }
    )


    console.log('Current state: ');
    console.log(store.getState());
    console.log('-----------------');


    console.log('Dispatching TOGGLE_TODO');
    store.dispatch(
        {
            type: 'TOGGLE_TODO',
            id: 1,
        }
    )


    console.log('Current state: ');
    console.log(store.getState());
    console.log('-----------------');



    console.log('Dispatching SET_VISIBILITY_FILTER');
    store.dispatch(
        {
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_COMPLETED',
        }
    )

    console.log('Current state: ');
    console.log(store.getState());
    console.log('-----------------');

})