/**
 * Created by Kimi on 2017/12/6.
 */
import React from 'react';
import { Component } from '../../libs/';
import Button from '../Button';
import MenuItem from "./MenuItem";
import './MenuButton.less';

export default class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showItems: false,
    };
  }


  // see https://github.com/gaearon/react-hot-loader/issues/698
  // can not use "real arrow function"
  // like
  // handleClick = (e)=>{};
  handleClick(event) {
    this.setState(preve => {
      return { showItems: !preve.showItems }
    });
  };

  getClass() {
    return this.className('k-menu-button');
  }

  render() {
    const { text, items, itemClick } = this.props;
    const { showItems } = this.state;
    let menuItems = [];
    if (items) {
      items.forEach((v, i) => {
        menuItems.push(
          <MenuItem index={i} key={i} {...v} onClick={itemClick} />
        )
      });
    }

    return (
      <div onClick={this.handleClick.bind(this)}
           className={this.getClass()}
           ref={dom => {
             this.dom = dom
           }} >
        <Button
          text={text}
          rightIcon="arrow-down"
        />
        <ul ref={dom => {
          this.list = dom
        }} style={{ display: showItems ? 'block' : 'none' }} className="k-menu-list" >
          {menuItems}
        </ul >
      </div >
    )
  }
}
