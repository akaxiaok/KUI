/**
 * Created by Kimi on 2017/12/6.
 */
import React from 'react';
import { Component } from '../../libs/index';
import './MenuItem.less';
import Icon from '../Icon';

export default class MenuItem extends Component {
  handleClick = (event) => {
    const { index, text, value } = this.props;
    const item = { index, text, value };
    event.stopPropagation();
    this.props.onClick && this.props.onClick(event, item);
  };

  getClass() {
    return this.className('k-menu-item');
  }

  render() {
    const { text } = this.props;
    return (
      <li onClick={this.handleClick} className={this.getClass()} >{text} <Icon name='chevron-left' /></li >
    )
  }
}