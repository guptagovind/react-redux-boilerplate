import { createStore, compose } from 'redux';
import MainReducer from '../reducers/MainReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    MainReducer,
    composeEnhancers()
  );
  return store;
};
