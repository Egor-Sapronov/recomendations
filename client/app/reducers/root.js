import {combineReducers} from 'redux';
import user from './user';
import auth from './auth';
import recomendation from './recomendation';

const rootReducer = combineReducers({ user, auth, recomendation });

export default rootReducer;
