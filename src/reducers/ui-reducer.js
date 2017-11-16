import {set} from 'lodash';
import {UPDATE_UI} from '../constants/ui-types.js';

// TODO: define an initial state object for the whole default UI
// FIXME: I don't love this format, need to find a good way of managing UI
// state; something generic enough to adapt.
const initialState = {
  primarySidebar: {
    button: {
      id: 'select',
      state: {
        action: 'pressed',
        value: true,
      },
    },
  },
};

const formattedUiState = data => {
  const {container, el, id, state} = data;
  const uiState = {};

  // build out our uiState object in resulting format of:
  // container: {
  //  el: {
  //    id,
  //    state: { action: '', value: true }
  //  }
  // }
  set(uiState, [container, el], {
    id,
    state,
  });

  return uiState;
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
        ...formattedUiState(action.data),
        type: action.type,
      };
    default:
      return state;
  }
};
