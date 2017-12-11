import React from 'react';
import {AppContainer} from 'react-hot-loader';
import * as ReactDOM from 'react-dom';
import beautyGif from './image/beauty.gif';
import App from './App';

let beauty = new Image();
beauty.src = beautyGif;
document.body.appendChild(beauty);

const test = document.createElement('div');
test.id = 'test';
document.body.appendChild(test);

ReactDOM.render(
    <AppContainer >
        <App />
    </AppContainer >,
    document.getElementById('test'),
);
const anyModule = module as any;
if (module.hot) {
    module.hot.accept();
}

