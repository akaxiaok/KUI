import React from 'react';
import { Component } from '../../libs/';
import MenuItem from '../MenuItem';


export default class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      showItems: false,
    }
  };

  toggleList(showItems) {
    this.setState({ showItems });
  }

  render() {
    const { items, value } = this.props;
    const showItems = this.state.showItems;
    let selectItems = [];
    if (items) {
      // todo: this.getValue() need replace '\'
      const reg = new RegExp(value, 'i');
      const equalReg = new RegExp('^' + value + '$', 'i');
      items.forEach((v, i) => {
        if (reg.test(v) && !equalReg.test(v)) {
          const item = <MenuItem key={i}
                                 onClick={e => {
                                   this.props.onClick(e, v);
                                 }}
                                 text={v} />;
          selectItems.push(item);
        }
      })
    }
    const itemsDisplay = selectItems.length ? 'display' : '';
    return (
      <ul className={`k-input-items ${showItems && itemsDisplay}`} >
        {selectItems}
      </ul >
    )
  }
}


