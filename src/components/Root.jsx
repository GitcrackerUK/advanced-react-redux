import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import CombinedReducers from 'reducers';

export default class Root extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return( 
        <Provider store={createStore(CombinedReducers)}>
            {this.props.children}
        </Provider>
        )
    }
}
