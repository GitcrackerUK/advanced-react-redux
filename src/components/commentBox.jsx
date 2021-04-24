import React, { Component } from 'react'

export default class CommentBox extends Component {
    constructor(props) {
        super();
        this.state = {
            comment: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ comment: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        this.setState({
           comment:'',
       })
    }
    // Call an action creator 
    // And save comment

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h4>Add a Comment</h4>
                <textarea onChange={this.onChange} value={this.state.comment}></textarea>
                <div>
                    <button >Submit Comment</button>
                </div>
            </form>
        );
    }
}
