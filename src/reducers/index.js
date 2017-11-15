import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {uiReducer} from './ui-reducer';

const appReducer = combineReducers({
  routing: routerReducer,
  ui: uiReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
