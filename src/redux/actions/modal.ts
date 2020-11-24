export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export interface IShowModalAction {
  type: typeof SHOW_MODAL
}
export const showModal = (): IShowModalAction => {
  return {
    type: SHOW_MODAL
  }
}

export interface IHideModalAction {
  type: typeof HIDE_MODAL
}
export const hideModal = (): IHideModalAction => {
  return {
    type: HIDE_MODAL
  }
}