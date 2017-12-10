/**
 * Created by Kimi on 2017/12/5.
 */
import React from 'react';
import { Component, Icons, PropTypes } from '../../libs/';
import './Icon.less';

export default class Icon extends Component {
  render() {
    if (this.props.customIcon) {
      return <i style={this.style()} className={this.className(`k-icon ${this.props.customIcon}`)} />
    }
    if (this.props.name) {
      let I = Icons[this.props.name.toLowerCase()];
      return <I style={this.style()} className={this.className(`k-icon`)} />
    }
    return '';
  }
}

Icon.propTypes = {
  name: PropTypes.string,
  customIcon: PropTypes.string,
};