/**
 * Created by Kimi on 2017/12/5.
 */
import React from 'react';
import { Component, Icons, PropTypes } from '../../libs/';

export default class Icon extends Component {
  render() {
    let I;
    if (this.props.customIcon) {
      return <i style={this.style()} className={this.className(`k-icon ${this.props.customIcon}`)} />
    }
    if (this.props.name) {
      I = Icons[this.props.name.toLowerCase()];
    }
    if (I) {
      return <I style={this.style()} className={this.className(`k-icon`)} />
    }
    return '';
  }
}

Icon.propTypes = {
  name: PropTypes.string,
  customIcon: PropTypes.string,
};