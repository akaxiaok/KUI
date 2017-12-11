import * as React from 'react';
import './style/index.less';

export interface TestProps {
    value: string;
}

export function Test(prop: TestProps) {
    return (
        <div >
            <div className="red" >这是一个测试</div >
            <div className="red" >this is a test</div >
            <label ><input type="checkbox" />check</label >
            <input type="checkbox" />
            <span >{prop.value}</span >
        </div >
    )
}

export default Test;

