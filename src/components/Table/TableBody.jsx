/**
 * Created by Kimi on 2018/5/5.
 */
import React from 'react';
import { Component, PropTypes } from '../../libs/';

class TableBody extends Component {
  handleRowClick = (event, rowIndex) => {
    const { handleRowClick, selectable } = this.props;
    if (handleRowClick && selectable) {
      handleRowClick(event, rowIndex);
    }
  };

  render() {
    const { children, stripedRows, selectable } = this.props;
    const rows = React.Children.map(children, (child, rowIndex) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          key: rowIndex,
          handleRowClick: this.handleRowClick,
          rowIndex,
          selectable
        })
      }
    });
    return (
      <tbody style={this.style()} className={this.classNames('k-table-body', { 'k-table-stripe': stripedRows })} >
      {rows}
      </tbody >
    )
  }
}

TableBody.propTypes = {
  stripedRows: PropTypes.bool,
  selectable: PropTypes.bool,
};

TableBody.defaultProps = {
  stripedRows: false,
  selectable: true,
};

export default TableBody;