import React from 'react';
//import ReactDOM from 'react-dom';

import Record from 'components/Record';


class StickyTableRow extends React.Component {

  onScroll() {

  }

  render() {
    const date = this.props.date,
      entries = this.props.entries;

    return (
      <div>
        <div className="table-row table-sticky-row">
          {date}
        </div>
        {entries.map(entry =>
          <Record
            key={entry.uuid}
            entry={entry}
          />)}
      </div>
    );
  }
}

export default StickyTableRow;
