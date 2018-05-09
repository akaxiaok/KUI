/**
 * Created by Kimi on 2018/5/5.
 */
import React from 'react';
import { Component, PropTypes } from '../../libs/';

class TableRow extends Component {

  handleRowClick = (event) => {
    const { selectable, handleRowClick, rowIndex } = this.props;
    if (selectable && handleRowClick) {
      handleRowClick(event, rowIndex);
    }
  };

  render() {
    const { children, rowIndex, selected, selectable, handleRowClick } = this.props;
    const columns = React.Children.map(children, (child, columnIndex) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          key: `${rowIndex}-${columnIndex}`
        })
      }
    });
    return (
      <tr onClick={this.handleRowClick} style={this.style()}
          className={this.className({ 'k-table-row-selected': selected })} >{columns}</tr >
    )
  }
}

TableRow.propTypes = {
  hoverable: PropTypes.bool,
  rowIndex: PropTypes.number,
  selectable: PropTypes.bool,
  selected: PropTypes.bool,
};

TableRow.defaultProps = {
  hoverable: true,
  selectable: true,
  selected: false,
};
export default TableRow;