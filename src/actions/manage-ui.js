/* eslint-disable import/prefer-default-export */
import {UPDATE_UI} from '../constants/ui-types';

export const updateUi = ({container, el, id, state}) => {
  // TODO: setup analytics to capture events
  return {
    data: {
      container,
      el,
      id,
      state,
    },
    type: UPDATE_UI,
  };
};
