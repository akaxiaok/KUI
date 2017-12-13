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
    let validated = { valid: true };
    if (!validateOn[type]) {
      validated = { valid: this.state.valid };
      return validated;
    }
    if (this.props.required && !value.length) {
      validated = {
        valid: false,
        errType: 'required',
        errMsg: 'This is required'
      }
    }
    else if (this.props.validator) {
      let result = this.props.validator(value, type);
      validated.errType = result.valid ? '' : 'custom';
      validated.errMsg = result.valid ? '' : result.errMsg;
      validated.valid = result.valid;
    }
    return validated;
  }

  handleChange(event) {
    const value = this.getValue();
    let validated = this.validate('change');
    this.props.onChange && this.props.onChange(event, value);
    this.setState(validated);
  }

  handleBlur(event) {
    let validated = this.validate('blur');
    this.setState(validated);
  }

  handleFocus(event) {
    let validated = this.validate('focus');
    this.setState(validated);
  }

  render() {
    const { disabled, type, text } = this.props;
    let { errMsg, errType } = this.state;
    const placeholder = this.state.valid ? this.props.placeholder : '';
    let msgType = errType ? `${errType}-msg` : '';
    return <div className="k-input-container" >

      <span className={`k-input-msg ${msgType}`} >
         {errMsg}
        </span >
      <input
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
    </div >
  }
}
Input.defaultProps = {
  validateOn: { blur: true, focus: true, change: true },
}