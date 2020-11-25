export const FILTER_NEWS = 'FILTER_NEWS';
export const GET_NEWS_BY_ID = 'GET_NEWS_BY_ID';

export interface INews {
  id: number;
  title: String;
  date: Date;
  text: String;
}

export interface IFilterNewsAction {
  type: typeof FILTER_NEWS,
  payload: {
    filterValue: String
  }
}
export const filterNews = (filterValue: String): IFilterNewsAction => {
  return {
    type: FILTER_NEWS,
    payload: {
      filterValue
    }
  }
}

export interface IGetNewsByIdAction {
  type: typeof GET_NEWS_BY_ID,
  payload: {
    newsId: number
  }
}
export const getNewsById = (newsId: number) => {
  return {
    type: typeof GET_NEWS_BY_ID,
    payload: {
      newsId
    }
  }
}