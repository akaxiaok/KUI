/**
 * Created by Kimi on 2017/11/23.
 */
import React, { Component } from 'react';
import beautyGif from './image/beauty.gif';
import './style/index.less';

class Test extends Component {
  componentDidMount() {
    let beauty = new Image();
    beauty.src = beautyGif;
    document.querySelector('.red').appendChild(beauty);
  }

  render() {
    return (
      <div >
        <div className="red" >这是一个</div >
        <div className="red" >this is a test file</div >
        <label ><input type="checkbox" />check</label >
        <input type="text" />
        <span >{this.props.value}</span >
      </div >
    )
  }
}

export default Test;

