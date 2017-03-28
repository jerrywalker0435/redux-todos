/**
 * Created by jerry on 3/28/17.
 */
import { createStore , compose} from 'redux';
import todoApp from './reducer/index';

const enhancers = compose(
    window.devToolsExtension?window.devToolsExtension(): f=>f
);
const store = createStore(todoApp,enhancers);


export default store;