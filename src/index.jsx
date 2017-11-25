import React from 'react';
import ReactDom from 'react-dom';
import Test from './Test.jsx';
import './style/index.less';
import printMe from './print.js';

const title = document.createElement('h1');
title.textContent = 'title';
title.className = 'red';
document.body.appendChild(title);


const test = document.createElement('div');
test.id = 'test';

document.body.appendChild(test);


ReactDom.render(<Test />, document.getElementById('test'))
if (module.hot) {
  module.hot.accept()
}