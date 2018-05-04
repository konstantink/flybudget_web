import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const storeProvider = (extraProps) => (Component) => {
  // static contextTypes = {
  //   store: PropTypes.object
  // }
  //
  // constructor(props, { store }) {
  //   super(props, { store });
  //   this.props = props;
  //   this.store = store;
  // }
  //
  // render() {
  class WithStore extends React.Component{
    static contextTypes = {
      store: PropTypes.object
    }
    static displayName = `${Component.name}Container`

    constructor(props, { store }) {
      super(props, { store });
      this.props = props;
      this.store = store;
    }
    render() {
      return (
        <Component {...this.props} {...extraProps(this.store, this.props)} />
      );
    }
  }

  return WithStore;
  // }
};

export default storeProvider;
