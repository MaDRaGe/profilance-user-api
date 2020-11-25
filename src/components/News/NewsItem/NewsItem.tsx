import * as React from 'react';
import { INews } from '../../../redux/actions/news';

interface INewsItemProps {
  data: INews,
}
const NewsItem = ({data}: INewsItemProps) => {
  return (
    <div className="news">
      <div className="news__header">
        <h3 className="news__title">{data.title}</h3>
        <time className="news__date">{data.date.toDateString()}</time>
      </div>
      <div className="news__body">
        {data.text}
      </div>
    </div>
  )
}


export default NewsItem;