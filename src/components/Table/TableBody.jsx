/**
 * Created by Kimi on 2018/5/5.
 */
import React from 'react';
import { Component, PropTypes } from '../../libs/';

class TableBody extends Component {
  render() {
    const { children, stripedRows } = this.props;
    return (
      <tbody style={this.style()} className={this.classNames('k-table-body', { 'k-table-stripe': stripedRows })} >
      {children}
      </tbody >
    )
  }
}

TableBody.propTypes = {
  selectMode: PropTypes.string,
  stripedRows: PropTypes.bool,
};

export default TableBody;