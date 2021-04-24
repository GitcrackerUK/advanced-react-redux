import CommentBox from 'components/commentBox'
import { mount } from 'enzyme'
import React from 'react'


it('Check has a text and a button', () => {
    const wrapper = mount(<CommentBox></CommentBox>);

    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
});

