import React from 'react';
// import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';

import storeProvider from 'components/storeProvider';

const dateDisplay = (dateString) =>
  new Date(dateString).toDateString();

class Article extends React.Component {
  static extraProps = (store, originProps) => {
    return {
      author: store.lookupAuthor(originProps.article.authorId)
    };
  }

  constructor(props){
    super(props);
    this.props = props;
    // this.author = this.props.actions.lookupAuthor(this.props.article.authorId);
  }

  render() {
    const {article, author} = this.props;
    // const author = store.lookupAuthor(article.authorId);
    return (
      <div className="article">
        <div className="title">{article.title}</div>
        <div className="date">{dateDisplay(article.date)}</div>
        <div className="author">
          <a href={author.website}>{author.firstName} {author.lastName}</a>
        </div>
        <div className="body">{article.body}</div>
      </div>
    );
  }
}


export default storeProvider(Article.extraProps)(Article);
