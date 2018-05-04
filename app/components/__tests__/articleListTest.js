import React from 'react';
// import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ArticleList from '../ArticleList';

configure({adapter: new Adapter()});

describe('ArticleList', () =>{
  const testProps = {
    articles: {
      article_A: {
        id: 'article_A'
      },
      article_B: {
        id: 'article_B'
      }
    }
  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );

    // console.log(wrapper.getElement().props.children);
    expect(wrapper.getElement().props.children.length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});
