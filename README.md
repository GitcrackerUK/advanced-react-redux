### Jest

jest is installing `JSDOM` and use it to testing DOM elements 

To test react application install Jest and Enzyme. For react v17 need be installed @wojtekmaj/enzyme-adapter-react-17' 
Create `setupTests.js`  with content: 
```
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyne';

Enzyme.configure({
    adapter: new Adapter(),
});

```