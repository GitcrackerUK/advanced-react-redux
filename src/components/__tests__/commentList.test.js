import CommentList from 'components/commentList';
import { mount } from 'enzyme';
import React from 'react';

let wrapper;

beforeEach(() => {
    wrapper = mount(<CommentList></CommentList>);
});
afterEach(() => {
    wrapper.unmount(<CommentList></CommentList>);
});

it('check div and check h4', () => {
    const wrapper = mount(<CommentList />);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
});
