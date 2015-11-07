import {combineReducers} from 'redux';
import user from './user';
import auth from './auth';
import profile from './profile';
import recomendation from './recomendation';
import snack from './snack';

const rootReducer = combineReducers({
    user,
    auth,
    recomendation,
    profile,
    snack,
});

export default rootReducer;
