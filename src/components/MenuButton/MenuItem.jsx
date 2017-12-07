/**
 * Created by Kimi on 2017/12/6.
 */
import React from 'react';
import { Component } from '../../libs/';
import './MenuItem.less';

export default class MenuItem extends Component {
  handleClick = (event) => {
    const { index, text, value } = this.props;
    event.item = { index, text, value };
    event.stopPropagation();
    this.props.onClick && this.props.onClick(event);
  };

  getClass() {
    return this.className('k-menu-item');
  }

  render() {
    const { text } = this.props;
    return (
      <li onClick={this.handleClick} className={this.getClass()} >{text}</li >
    )
  }
}