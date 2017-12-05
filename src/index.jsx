import React from 'react';
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import App from './App';

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

render(App);
if (module.hot) {
  module.hot.accept('./App',function () {
    render(App)
  });
}