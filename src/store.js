/**
 * Created by jerry on 3/28/17.
 */
import { createStore } from 'redux';
import todoApp from './reducer/index';

const store = createStore(todoApp);


export default store;