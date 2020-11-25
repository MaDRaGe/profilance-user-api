export const FILTER_NEWS = 'FILTER_NEWS';

export interface INews {
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