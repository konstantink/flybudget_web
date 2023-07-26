import React from 'react';
//import ReactDOM from 'react-dom';

class Record extends React.Component {
  displayTotal(value) {
    return new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP', minimumFractionDigits: 2}).format(value);
  }

  render() {
    const entry = this.props.entry;

    return (
      <div className="table-row">
        <div className="table-cell cell-date">{entry.date}</div>
        <div className="table-cell cell-item">{entry.item.name}</div>
        <div className="table-cell cell-category">{entry.category.name}</div>
        <div className="table-cell cell-total">{this.displayTotal(entry.total)}</div>
      </div>
    );
  }
}

export default Record;
