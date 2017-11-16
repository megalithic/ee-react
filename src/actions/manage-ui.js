/* eslint-disable import/prefer-default-export */
import {UPDATE_UI} from '../constants/ui-types';

export const updateUi = ({container, el, id, state}) => dispatch => {
  // TODO: setup analytics to capture events
  return dispatch({
    data: {
      container,
      el,
      id,
      state,
    },
    type: UPDATE_UI,
  });
};
