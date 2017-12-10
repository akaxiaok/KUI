/**
 * Created by Kimi on 2017/12/10.
 */
import React from 'react';
import { Component } from '../../libs/';
import './Input.less';

export default class Input extends Component {
  getClass() {
    return this.className('k-input');
  }

  render() {
    const { disabled, type, text, placeholder } = this.props;
    return <input type={type} value={text} disabled={disabled} placeholder={placeholder} className={this.getClass()} />
  }
}