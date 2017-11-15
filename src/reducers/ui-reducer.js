import {UPDATE_UI} from '../constants/ui-types.js';

// TODO: define an initial state object for the whole default UI
const initialState = {
  primarySidebar: {
    button: {id: 'select', state: 'pressed'},
  },
};

export const ui = (state = initialState, action) => {
  switch (action.type) {
    case '@@redux/INIT':
      return {
        ...state,
      };
    case UPDATE_UI:
      return {
        ...state,
        data: action.data,
        type: action.type,
      };
    default:
      return state;
  }
};
