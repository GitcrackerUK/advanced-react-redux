
import CommentBox from '../commentBox';
import CommentList from '../commentList';
import { shallow} from 'enzyme';
import React from 'react';
import App from '../App';

// it() it function is a global function so doesn't need to be imported 
  
// it('string to explain actual use of test', 'function which will be execute to test')

it('Show a comment box', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('Show a Comment List ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CommentList).length).toEqual(1);
});