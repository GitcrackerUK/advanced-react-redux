### Jest

To test elements and content in javascript files, you can use testing library `JEST` it is small and ease to use testing lib. To use Jest with React additionally we need add `ENZYME`  

##### install

To install Jest, run command  ```npm install --save-dev jest``` \
To install Enzyme for React 16 and less, run command ```npm i --save-dev enzyme enzyme-adapter-react-16```\
For react v17 need be installed `@wojtekmaj/enzyme-adapter-react-17'` and then create in root directory `setupTests.js` with content:
```
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyne';

Enzyme.configure({
    adapter: new Adapter(),
});
```

Create directory in the root folder  `__test__` then inside create testing file to test. Best practice is to create one test file for each React file like `App.test.js` for `App.js` . Inside test file create test like so.

##### import Jest & Enzym
```
import { mount } from 'enzyme';
import React from 'react';
```
##### import component which will be tested 
```
import CommentBox from './CommentBox'
```
##### create method to mont and unmont components for testing
```
beforeEach(() => {
    wrapper = mount(<CommentBox></CommentBox>);
});
afterEach(() => {
    wrapper.umount(<CommentBox></CommentBox>);
});
``` 
##### create test
```

```

----
added ssh key which is in ~/.ssh/github.pub
----
