import React from 'react';
// import ReactDOM from 'react-dom';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  }

  doSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm);
  }, 500)

  handleSearch = (event) => {
    this.setState({searchTerm: event.target.value}, () => {
      this.doSearch();
    });
  }

  render() {
    return (
      <input
        // ref={(input) => this.searchInput = input}
        type="text"
        className="input"
        placeholder="Input search term"
        value={this.state.searchTerm}
        onChange={this.handleSearch}
      />
    );
  }
}

export default SearchBar;
