import {combineReducers} from 'redux';
import user from './user';
import auth from './auth';
import profile from './profile';
import recomendation from './recomendation';
import snack from './snack';
import post from './post';
import create from './create';

const rootReducer = combineReducers({
    user,
    auth,
    recomendation,
    profile,
    snack,
    post,
    create,
});

export default rootReducer;
