import {combineReducers} from 'redux';
import user from './user';
import auth from './auth';
import profile from './profile';
import recomendation from './recomendation';
import snack from './snack';
import post from './post';
import create from './create';
import likes from './likes';
import top from './top';

const rootReducer = combineReducers({
    user,
    auth,
    recomendation,
    profile,
    snack,
    post,
    create,
    likes,
    top,
});

export default rootReducer;
