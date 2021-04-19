import ReactDOM from 'react-dom'
import React from 'react'
import App from '../App'

// it() it function is a global function so doesn't need to be imported 
  
// it('string to explain actual use of test', 'function which will be execute to test')

it('show a comment box', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    console.log(div.innerHTML);

    expect(div.innerHTML).toContain('Comment Box');

    ReactDOM.unmountComponentAtNode(div);
});