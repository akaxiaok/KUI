/**
 * Created by Kimi on 2017/12/10.
 */
import React from 'react';
import ClickOutside from 'react-click-outside';
import { Component } from '../../libs/';
import './Input.less';
import ItemList from './ItemList';

class Input extends Component {

  static ERR_TYPE = { CUSTOM: 'custom', REQUIRED: 'required' };

  constructor(props) {
    super();
    this.state = {
      valid: true
    }
  }

  componentDidUpdate() {
    const { required, focus, valid } = this.state;
    setTimeout(() => {
      this.list.toggleList(focus && (required || valid));
    }, 0)
  }

  getClass() {
    const valid = this.state.valid ? '' : 'k-input-invalid';
    return this.className('k-input', valid);
  }

  getValue() {
    return this.input && this.input.value;
  }

  validate(type) {
    const value = this.getValue();
    const validateOn = Object.assign({}, Input.defaultProps.validateOn, this.props.validateOn);
    let validated = { valid: true, required: false };
    if (!validateOn[type]) {
      validated = this.state;
      return validated;
    }
    if (this.props.required && !value.length) {
      validated = {
        required: true,
        valid: false,
        errType: Input.ERR_TYPE.REQUIRED,
        errMsg: 'This is required'
      }
    }
    else if (this.props.validator) {
      let result = this.props.validator(value, type);
      validated.errType = result.valid ? '' : Input.ERR_TYPE.CUSTOM;
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

  handleClickOutside() {
    if (this.state.focus) {
      this.setState({ focus: false });
    }
  }

  handleBlur(event) {
    let newState = this.validate('blur');
    this.setState(newState);
  }

  handleFocus(event) {
    let newState = this.validate('focus');
    newState.focus = true;
    this.setState(newState);
  }

  focus() {
    this.input.focus();
  }

  handleItemClick(e, v) {
    this.input.value = v;
    const newState = this.validate('change');
    this.setState(newState);
  }

  render() {
    const { disabled, type, text, items } = this.props;
    let { errMsg, errType, valid } = this.state;
    const placeholder = valid ? this.props.placeholder : '';
    let msgType = errType ? `${errType}-msg` : '';
    return <div className="k-input-container" >
      <span className={`k-input-msg ${!valid && msgType}`} >
         {errMsg}
        </span >
      <input
        ref={input => {
          this.input = input
        }}
        type={type === "password" ? "password" : 'text'}
        className={this.getClass()}
        value={text}
        disabled={disabled}
        placeholder={placeholder}
        onChange={this.handleChange.bind(this)}
        onBlur={this.handleBlur.bind(this)}
        onFocus={this.handleFocus.bind(this)} />
      <ItemList
        ref={list => {
          this.list = list;
        }}
        items={items}
        value={this.getValue()}
        onClick={this.handleItemClick.bind(this)} />
    </div >
  }
}

Input.defaultProps = {
  validateOn: { blur: true, focus: true, change: true },
};
export default ClickOutside(Input);