import { SHOW_MODAL, HIDE_MODAL } from "../actions/modal";

const initialState = {
  isShown: false
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL: 
      return {
        ...state,
        isShown: true
      }
    case HIDE_MODAL:
      return {
        ...state,
        isShown: false
      }
    default:
      return state;
  }
}

export default modalReducer;