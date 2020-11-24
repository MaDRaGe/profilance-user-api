import { SHOW_MODAL } from "../actions/modal";

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
    default:
      return state;
  }
}

export default modalReducer;