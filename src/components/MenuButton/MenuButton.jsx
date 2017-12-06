/**
 * Created by Kimi on 2017/12/6.
 */
import React from 'react';
import { Component } from '../../libs/';
import Button from '../Button';

export default class MenuButton extends Component {
  handleClick = (event) => {
  };


  render() {
    const { text } = this.props;
    return (
      <Button ref={dom => {
        this.dom = dom
      }} onClick={this.handleClick} text={text} rightIcon="arrow-down" />
    )
  }
}
