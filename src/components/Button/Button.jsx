/**
 * Created by Kimi on 2017/12/3.
 */
import React from 'react';
import { Component, PropTypes } from '../../libs/';

export default class Button extends Component {
  onClick(e) {
    if (!this.props.disabled) {
      this.props.onClick && this.props.onClick(e);
    }
  }

  getClass() {
    return this.className('k-button',`${this.props.size}`, this.props.disabled
    )
  }

  render() {
    return (
      <button style={this.style()}
              className={this.getClass()} disabled={this.props.disabled} type={this.props.nativeType}
              onClick={this.onClick.bind(this)} >
        {this.props.loading && <i className="el-icon-loading" />}
        {this.props.icon && !this.props.loading && <i className={`el-icon-${this.props.icon}`} />}
        <span >{this.props.text}</span >
      </button >
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'default',
  size: '',
  disabled: false,
  plain: false,
};