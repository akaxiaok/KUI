/**
 * Created by Kimi on 2017/12/10.
 */
import React from 'react';
import { Component } from '../../libs/';
import './Input.less';

export default class Input extends Component {
  constructor(props) {
    super();
    this.state = {
      valid: true
    }
  }

  getClass() {
    const valid = this.state.valid ? '' : 'k-input-invalid';
    return this.className('k-input', valid);
  }

  getValue() {
    return this.input.value;
  }

  validate(type) {
    const value = this.getValue();
    const validateOn = Object.assign({}, Input.defaultProps.validateOn, this.props.validateOn);
    let validated = true;
    if (!validateOn[type]) {
      return this.state.valid;
    }
    if (this.props.required && !value.length) {
      validated = false;
    }
    else if (this.props.validator) {
      validated = this.props.validator(value, 'change');
    }
    return validated;
  }

  handleChange(event) {
    const value = this.getValue();
    let validated = this.validate('change');
    this.setState({ valid: validated })
  }

  handleBlur(event) {
    let validated = this.validate('blur');
    this.setState({ valid: validated })
  }

  handleFocus(event) {
    let validated = this.validate('focus');
    this.setState({ valid: validated })
  }

  render() {
    const { disabled, type, text, placeholder, required } = this.props;
    return <input
      ref={input => {
        this.input = input
      }}
      type={type}
      className={this.getClass()}
      value={text}
      disabled={disabled}
      placeholder={placeholder}
      onChange={this.handleChange.bind(this)}
      onBlur={this.handleBlur.bind(this)}
      onFocus={this.handleFocus.bind(this)} />
  }
}
Input.defaultProps = {
  validateOn: { blur: true, focus: true, change: true },
}