import React from 'react';
import expect from 'expect';
import deepFreeze from 'deep-freeze';
import toggleTodo from '../reducer/index';
it('toggleTodo ', () => {

    const todoBefore = {
        id: 0,
        text: 'Learn React',
        completed: false
    }
    const todoAfter = {
        id: 0,
        text: 'Learn React',
        completed: true
    }
    deepFreeze(todoBefore);
    expect(toggleTodo(todoBefore)).toEqual(todoAfter);

});
