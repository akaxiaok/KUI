import * as React from 'react';
import Test from './Test';

export interface AppProps {
    value?: string;
}

export function App(prop: AppProps) {
    return (
        <Test value={prop.value || 'app'} />
    );
}

export default App;

