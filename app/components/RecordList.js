import React from 'react';
//import ReactDOM from 'react-dom';

import StickyTableRow from 'components/StickyTableRow';

class RecordList extends React.Component {
  prepareData() {
    const data = this.props.expenses;
    let result = {};

    Object.values(data).map(entry => {
      if (!(entry.date in result))
        result[entry.date] = [];
      result[entry.date].push(entry);
    });

    return result;
  }

  render() {
    const data = this.prepareData();

    return (
      <div className="table">
        {Object.keys(data).map(date =>
          <StickyTableRow
            date={date}
            entries={data[date]}
            key={date}
          />
        )}
      </div>
    );
  }
}

export default RecordList;
