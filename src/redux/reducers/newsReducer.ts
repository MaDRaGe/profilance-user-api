import { FILTER_NEWS, INews } from '../actions/news';

interface INewsReducerInitialState {
  newsList: INews[],
  newsToShow: INews[]
}
const initialState = {
  newsList: [
    {
      title: 'news 1',
      date: new Date(),
      text: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
      title: 'news 2',
      date: new Date(),
      text: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
      title: 'news 3',
      date: new Date(),
      text: 'Lorem ipsum dolor sit amet consectetur'
    }
  ],
  newsToShow: [
    {
      title: 'news 1',
      date: new Date(),
      text: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
      title: 'news 2',
      date: new Date(),
      text: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
      title: 'news 3',
      date: new Date(),
      text: 'Lorem ipsum dolor sit amet consectetur'
    }
  ]
}
const newsReducer = (state: INewsReducerInitialState = initialState, action): INewsReducerInitialState => {
  switch (action.type) {
    case FILTER_NEWS:

      const filteredNews: INews[] = state.newsList.filter((news: INews) => {
        const title = news.title.toLowerCase();
        return title.includes(action.payload.filterValue)
      })
      return {
        ...state,
        newsToShow: filteredNews
      }
    default: 
      return state;
  }
}

export default newsReducer;