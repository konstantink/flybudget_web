import React from 'react';
// import ReactDOM from 'react-dom';

import Article from 'components/article';

class ArticleList extends React.Component {
  render() {
    return (
      <div>
        {Object.values(this.props.articles).map(article =>
          <Article
            key={article.id}
            article={article}
          />
        )}
      </div>
    );
  }
}

export default ArticleList;
