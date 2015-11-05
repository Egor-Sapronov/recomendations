import {combineReducers} from 'redux';
import user from './user';
import auth from './auth';
import profile from './profile';
import recomendation from './recomendation';

const rootReducer = combineReducers({ user, auth, recomendation, profile });

export default rootReducer;
