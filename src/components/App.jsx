import React, { Component } from 'react';
import CommentBox from './commentBox';
import CommentList from './commentList';
import Root from './Root';

export default class App extends Component {
    render() {
        return (
            <Root>
                <CommentBox></CommentBox>
                <CommentList></CommentList>
            </Root>
        );
    }
}
