import App from './app.jsx';
import React from 'react';
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import { getLodash } from './math';


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
const loadLoadsh = document.createElement('div');
loadLoadsh.textContent = 'test1';
loadLoadsh.onclick = e => {
  const v = import('lodash').then(_ => {
    debugger
    console.log(_.isArray([]));
    return 'lodash ok';
  }).catch(error => 'An error occurred while loading the lodash');
  v.then(function (s) {
    console.log(s);
  })
};
document.body.appendChild(loadLoadsh);
const loadPrint = document.createElement('div');
loadPrint.textContent = 'test1';
loadPrint.onclick = e => {
  const v = import('./print').then(module => {
    debugger
    const printMe = module.default;
    printMe();
    return 'printMe ok';
  }).catch(error => 'An error occurred while loading the print');
  v.then(function (s) {
    console.log(s);
  })
};
document.body.appendChild(loadPrint);

render(App);
if (module.hot) {
  module.hot.accept();
}