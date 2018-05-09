/**
 * Created by Kimi on 2018/5/5.
 */
import React from 'react';
import { Component, PropTypes } from '../../libs/';

class TableColumn extends Component {
  render() {
    return (
      <td style={this.style()} className={this.className()} title={this.props.tooltip} >
        <div className="k-table-td-inner" >{this.props.children}</div >
      </td >
    )
  }
}

TableColumn.propTypes = {
  tooltip: PropTypes.string
};

export default TableColumn;