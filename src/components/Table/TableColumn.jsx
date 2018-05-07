/**
 * Created by Kimi on 2018/5/5.
 */
import React from 'react';
import { Component, PropTypes } from '../../libs/';

class TableColumn extends Component {
  render() {
    return (
      <td >
        <div className="k-table-td-inner" >{this.props.children}</div >
      </td >
    )
  }
}

TableColumn.propTypes = {
  children: PropTypes.node
};

export default TableColumn;