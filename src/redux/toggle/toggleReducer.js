import { toggleActionType } from "./actionType";

const INITIAL_STATE = {
  toggleButton: false
};

const toggleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case toggleActionType.TOGGLE_BUTTON:
      return {
        ...state,
        toggleButton: !state.toggleButton,
      };
    default:
      return state;
  }
};

export default toggleReducer;