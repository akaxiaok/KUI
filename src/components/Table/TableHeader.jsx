/**
 * Created by Kimi on 2018/5/5.
 */
import React from 'react';
import { Component, PropTypes } from '../../libs/';

class TableHeader extends Component {
  render() {
    return (
      <thead className={this.className('k-table-header')} >
      <tr >{this.props.children}</tr >
      </thead >
    )
  }
}

TableHeader.propTypes = {
  children: PropTypes.node
};

export default TableHeader;