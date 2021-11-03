import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment, saveUser } from 'actions';

export default class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            user: '',
            userCreator: true ,
        };
        
        this.commentChange = this.commentChange.bind(this);
        this.userChange = this.userChange.bind(this);
        this.addComment = this.addComment.bind(this);
        this.addUser = this.addUser.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    commentChange(e) {
        this.setState({ comment: e.target.value });
    }
    userChange(e) {
        this.setState({ user: e.target.value });
    }

    addComment(e) {
        e.preventDefault();
        saveComment(this.state.comment);
        this.setState({comment:''})
    }
    addUser(e) {
        e.preventDefault();
        saveUser(this.state.user);
        this.setState({user:''})
    }
    toggle() {
        this.setState({ userCreator: !this.state.userCreator });
    }
    userField() {
        return (
            <div>
                <h4>Add User</h4>
                <textarea onChange={this.userChange} value={this.state.user}></textarea>
            </div>
        );
    }
    commentField() {
        console.log(this.state);
        return (
            <div>
                <h4>Add a Comment</h4>
                <textarea onChange={this.commentChange} value={this.state.comment}></textarea>
            </div>
        );
    }

    render() {
        return (
            <div>
                <button style={{ display: 'block' }} onClick={this.toggle}>
                    Change Input
                </button>
                <form onSubmit={this.state.userCreator ? this.addUser : this.addComment }>
                    {this.state.userCreator ? this.userField() : this.commentField()}
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { user, comment } = state
    return { user, comment }
  }
connect(mapStateToProps, saveComment, saveUser)(CommentBox);
