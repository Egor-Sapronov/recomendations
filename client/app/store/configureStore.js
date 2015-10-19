import {compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {toaster} from '../middlewares/toasts';
import rootReducer from '../reducers/root';

const loggerMiddleware = createLogger({
  level: 'info',
  predicate: (getState, action) => process.env.NODE_ENV === 'development',
  collapsed: true,
});

const createStoreWithMiddleware = compose(applyMiddleware(thunkMiddleware, loggerMiddleware, toaster))(createStore);

export default function configureStore(initialState = {}) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
}
