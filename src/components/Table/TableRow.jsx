/**
 * Created by Kimi on 2018/5/5.
 */
import React from 'react';
import { Component, PropTypes } from '../../libs/';

class TableRow extends Component {
  render() {
    return (
      <tr >{this.props.children}</tr >
    )
  }
}

TableRow.propTypes = {
  children: PropTypes.node
};

export default TableRow;