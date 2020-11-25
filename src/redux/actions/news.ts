export const FILTER_NEWS = 'FILTER_NEWS';
export const CREATE_NEWS = 'CREATE_NEWS';

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

export interface ICreateNewsAction {
  type: typeof CREATE_NEWS,
  payload: {
    news: INews
  }
}
export const createNews = (news: INews): ICreateNewsAction => {
  return {
    type: CREATE_NEWS,
    payload: {
      news
    }
  }
}