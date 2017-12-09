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
  constructor() {
    super();
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

  handleMouseLeave(event) {
    this.hideTimeout = setTimeout(() => {
      this.setState({ showItems: false });
    }, 500);
  }

  handleMouseEnter(event) {
    clearTimeout(this.hideTimeout);
  }

  handleItemClick(event, item) {
    if (this.props.hideOnItemClick) {
      this.setState({ showItems: false });
    }
    this.props.itemClick && this.props.itemClick(event, item);
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
          <MenuItem index={i} key={i} {...v} onClick={this.handleItemClick.bind(this)} />
        )
      });
    }

    return (
      <div onClick={this.handleClick.bind(this)}
           className={this.getClass()}
           ref={dom => {
             this.dom = dom
           }}
           onMouseLeave={this.handleMouseLeave.bind(this)}
           onMouseEnter={this.handleMouseEnter.bind(this)}

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