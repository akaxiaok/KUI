/**
 * Created by Kimi on 2018/5/5.
 */
import React from 'react';
import { Component, PropTypes } from '../../libs/';
import './Table.less';


class Table extends Component {
  render() {
    const { height, children, style, ...other } = this.props;
    debugger;
    return (
      <table style={this.style({ height })} className={this.className('k-table')} {...other}>
        {children}
      </table >
    )
  }
}

Table.propTypes = {
  height: PropTypes.string,
};

export default Table;