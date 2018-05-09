/**
 * Created by Kimi on 2018/5/5.
 */
import React from 'react';
import { Component, PropTypes } from '../../libs/';
import './Table.less';


class Table extends Component {
  handleRowClick = (event, rowIndex) => {
    const { onRowClick } = this.props;
    if (onRowClick) {
      onRowClick(event, rowIndex);
    }
  };

  render() {
    const { children, style, onRowClick, ...other } = this.props;

    let tHead;
    let tBody;

    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        const { name } = child.type;
        if (name === 'TableBody') {
          tBody = React.cloneElement(
            child, { handleRowClick: this.handleRowClick });
        } else if (name === 'TableHeader') {
          tHead = child;
        }
      }
    });
    return (
      <table style={this.style()} className={this.className('k-table')} {...other}>
        {tHead}
        {tBody}
      </table >
    )
  }
}

Table.propTypes = {
  onRowClick: PropTypes.func
};

export default Table;