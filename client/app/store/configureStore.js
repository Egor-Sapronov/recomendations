import {compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/root';
import redirector from '../middlewares/redirector';

const loggerMiddleware = createLogger({
    level: 'info',
    predicate: () => true,
    collapsed: true,
});

const createStoreWithMiddleware = compose(applyMiddleware(thunkMiddleware, loggerMiddleware, redirector))(createStore);

export default function configureStore(initialState = {}) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    return store;
}
