import { FILTER_NEWS, INews } from '../actions/news';

interface INewsReducerInitialState {
  newsList: INews[],
  newsToShowId: number[]
}
const initialState = {
  newsList: [
    {
      id: 1,
      title: 'news 1',
      date: new Date(),
      text: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
      id: 2,
      title: 'news 2',
      date: new Date(),
      text: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
      id: 3,
      title: 'news 3',
      date: new Date(),
      text: 'Lorem ipsum dolor sit amet consectetur'
    }
  ],
  newsToShowId: [ 1, 2, 3 ]
}
const newsReducer = (state: INewsReducerInitialState = initialState, action): INewsReducerInitialState => {
  switch (action.type) {
    case FILTER_NEWS:
      const filteredNewsId: number[] = state.newsList.filter((news: INews) => {
        const title = news.title.toLowerCase();
        return title.includes(action.payload.filterValue)
      }).map((news): number => {
        return news.id
      })
      return {
        ...state,
        newsToShowId: filteredNewsId
      }
    default: 
      return state;
  }
}

export default newsReducer;