import * as React from 'react';
import NewsFilter from './NewsFilter/NewsFilter';
import './News.css';

const News = () => {
  return (
    <div className="news-section">
      <h2>News</h2>
      <NewsFilter />
      <div className="news-section__list">
        <div className="news">
          <div className="news__header">
            <h3 className="news__title">news 1</h3>
            <time className="news__date">01.01.2020</time>
          </div>
          <div className="news__body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia id impedit repudiandae explicabo saepe sequi?
          </div>
        </div>
        <div className="news">
          <div className="news__header">
            <h3 className="news__title">news 1</h3>
            <time className="news__date">01.01.2020</time>
          </div>
          <div className="news__body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia id impedit repudiandae explicabo saepe sequi?
          </div>
        </div>
        <div className="news">
          <div className="news__header">
            <h3 className="news__title">news 1</h3>
            <time className="news__date">01.01.2020</time>
          </div>
          <div className="news__body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia id impedit repudiandae explicabo saepe sequi?
          </div>
        </div>
      </div>
    </div>
  )
}

export default News;
