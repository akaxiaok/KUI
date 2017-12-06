/**
 * Created by Kimi on 2017/12/3.
 */
import React from 'react';
import { Component, PropTypes } from '../../libs/';
import Icon from '../Icon';

export default class Button extends Component {
  onClick(e) {
    if (!this.props.disabled) {
      this.props.onClick && this.props.onClick(e);
    }
  }

  getClass() {
    return this.className('k-button', this.props.size, this.props.disabled
    )
  }

  render() {
    const {
      leftIcon,
      leftIconClass,
      rightIcon,
      rightIconClass,
      disabled
    } = this.props;
    return (
      <button style={this.style()}
              className={this.getClass()} disabled={disabled}
              onClick={this.onClick.bind(this)} >
        {leftIconClass || leftIcon && <Icon name={leftIcon} className="k-bt-icon-left" customIcon={leftIconClass} />}
        <span >{this.props.text}</span >
        {rightIconClass || rightIcon &&
        <Icon name={rightIcon} className="k-bt-icon-right" customIcon={rightIconClass} />}
      </button >
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  leftIconClass: PropTypes.string,
  rightIconClass: PropTypes.string,
};

Button.defaultProps = {
  type: 'default',
  size: '',
  disabled: false,
  plain: false,
};