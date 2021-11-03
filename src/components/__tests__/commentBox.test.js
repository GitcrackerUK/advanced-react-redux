import CommentBox from 'components/commentBox';
import { mount } from 'enzyme';
import React from 'react';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});
afterEach(() => {
    wrapped.unmount(<CommentBox />);
});
it('Check has a text and a button', () => {
    const wrapper = mount(<CommentBox></CommentBox>);

    expect(wrapper.find('div').length).toEqual(3)
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(2);
});
