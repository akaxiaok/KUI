import App from './app.jsx';
import React from 'react'
import ReactDOM from 'react-dom'

const render = Component => {
  ReactDOM.render(
    <Component />,
    document.getElementById('test'),
  )
};

const test = document.createElement('div');
test.id = 'test';
document.body.appendChild(test);
const test1 = document.createElement('div');
test1.textContent = 'test1';
document.body.appendChild(test1);
render(App);
if (module.hot) {
  module.hot.accept();
}