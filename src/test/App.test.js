import React from 'react';
import expect from 'expect';
import deepFreeze from 'deep-freeze';
import todos from '../reducer/index';


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