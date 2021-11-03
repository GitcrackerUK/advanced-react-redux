import React, { Component } from 'react';
import store from 'store'
import { Provider } from 'react-redux';

export default class Root extends Component {
    constructor(props){
        super(props)
    }
    
    
    render() {
        return( 
        <Provider store={store}>
            {this.props.children}
        </Provider>
        )
    }
}
