/**
 * Created by jerry on 4/6/17.
 */
import React from 'react';

class Provider extends React.Component {

    getChildContext() {
        return {
            store : this.props.store
        }
    }

    render(){
        return this.props.children;
    }

}

Provider.childContextTypes = {
    store: React.PropTypes.object
}


export default Provider;
