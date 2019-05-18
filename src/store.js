import { createStore, combineReducers } from 'redux';

import { home,category } from './reducers';

const reducers = combineReducers({
  home,
  category
});

const store = createStore(reducers);

export default store;