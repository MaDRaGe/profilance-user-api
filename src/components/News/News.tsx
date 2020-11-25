import * as React from 'react';
import NewsFilter from './NewsFilter/NewsFilter';
import NewsItem from './NewsItem/NewsItem';
import { INews } from '../../redux/actions/news';
import { connect } from 'react-redux';
import './News.css';

interface INewsProps {
  newsIdList: number[],
  newsList: INews[]
}
const News = ({newsIdList, newsList}: INewsProps) => {
  const newsListView = newsList.filter((news: INews) => {
    return newsIdList.includes(news.id);
  }).map((news: INews) => {
    return <NewsItem key={news.id} data={news} />
  })
  return (
    <div className="news-section">
      <h2>News</h2>
      <NewsFilter />
      <div className="news-section__list">
        {newsListView}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    newsIdList: state.news.newsToShowId,
    newsList: state.news.newsList
  }
}

export default connect(mapStateToProps)(News);
