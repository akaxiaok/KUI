/**
 * Created by Kimi on 2017/12/6.
 */
import React from 'react';
import { Component } from '../../libs/';
import Button from '../Button';
import MenuItem from "../MenuItem/MenuItem";
import './MenuButton.less';
import { PropTypes } from "../../libs/index";

export default class MenuButton extends Component {
  handleClick = (event) => {
    this.setState(preve => {
      return { showItems: !preve.showItems }
    });
  };

  handleMouseLeave = (event) => {
    this.setState({ showItems: false });
  };

  handleItemClick = (event, item) => {
    if (this.props.hideOnItemClick) {
      this.setState({ showItems: false });
    }
    this.props.itemClick && this.props.itemClick(event, item);
  };

  constructor() {
    super();
    this.state = {
      showItems: false,
    };
  }

  getClass() {
    return this.className('k-menu-button');
  }

  render() {
    const { text, items } = this.props;
    const { showItems } = this.state;
    let menuItems = [];
    if (items) {
      items.forEach((v, i) => {
        menuItems.push(
          <MenuItem index={i} key={i} {...v} onClick={this.handleItemClick} />
        )
      });
    }

    return (
      <div onClick={this.handleClick}
           className={this.getClass()}
           ref={dom => {
             this.dom = dom
           }}
           onMouseLeave={this.handleMouseLeave}
      >
        <Button
          text={text}
          rightIcon="arrow-down"
        />
        <ul ref={dom => {
          this.list = dom
        }}
            style={{ display: showItems ? 'block' : 'none' }} className="k-menu-list" >
          {menuItems}
        </ul >
      </div >
    )
  }
}
MenuButton.propTypes = {
  text: PropTypes.string,
  hideOnItemClick: PropTypes.bool,
  items: PropTypes.array
};
MenuButton.defaultProps = {
  hideOnItemClick: true,
}