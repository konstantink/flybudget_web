import React from 'react';
//import ReactDOM from 'react-dom';

import Record from 'components/Record';

class RecordList extends React.Component {
  render() {
    return (
      <div className="table">
        {Object.values(this.props.expenses).map(entry =>
          <Record
            entry={entry}
            key={entry.uuid}
          />
        )}
      </div>
    );
  }
}

export default RecordList;
