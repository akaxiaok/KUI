import App from './app.jsx';
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer >
      <Component />
    </AppContainer >,
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
  module.hot.accept('./app.jsx', () => {
    render(App);
  });
}