import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// import ArticleList from 'components/articleList';
// import SearchBar from 'components/searchBar';
// import LoginForm from 'components/LoginForm';

import {echo} from 'actions/echo';
import {expenses} from 'actions/expenses';
import {stats} from 'actions/stats';
import DashboardChart from 'components/DashboardChart';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import RecordList from 'components/RecordList';
import {serverMessage} from 'reducers/echo';
import {serverExpenses} from 'reducers/expenses';
import {serverStats} from 'reducers/stats';

class App extends React.Component {
  // static childContextTypes = {
  //   store: PropTypes.object
  // }
  //
  //
  // getChildContext() {
  //   return {
  //     store: this.props.store
  //   };
  // }
  //
  // setSearchTerm = (searchTerm) => {
  //   this.setState({searchTerm: searchTerm});
  // }
  componentDidMount() {
    this.props.fetchMessage('Hi!');
    this.props.fetchExpenses();
    this.props.fetchStats();
  }

  render() {
    // let articles = this.state.articles;
    // if (this.state.searchTerm) {
    //
    // }
    // debugger;

    return (
      // <div>
      //   <SearchBar doSearch={this.setSearchTerm} />
      //   <ArticleList articles={this.state.articles} store={this.props.store} />
      // </div>
      // <LoginForm />
      <div>
        <Navbar />
        <Sidebar />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <DashboardChart stats={this.props.stats} />
          <RecordList expenses={this.props.expenses} />
        </main>
      </div>
    );
  }
}

export default connect(
  state => ({
    message: serverMessage(state),
    ...serverExpenses(state),
    ...serverStats(state),
  }),
  {
    fetchMessage: echo,
    fetchExpenses: expenses,
    fetchStats: stats,
  }
)(App);
