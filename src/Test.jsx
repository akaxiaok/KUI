/**
 * Created by Kimi on 2017/11/23.
 */
import React, { Component } from 'react';
import beautyGif from './image/beauty.gif';

class Test extends Component {
  componentDidMount() {
    let beauty = new Image();
    beauty.src = beautyGif;
    document.querySelector('.red').appendChild(beauty);
  }

  render() {
    return (
      <div >
        <div className="red" >这是一个测试文件</div >
        <div className="red" >this is a test file</div >
      </div >
    )
  }
}

export default Test;