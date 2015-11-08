import * as authActions from '../actions/auth';
import { errorSymbol } from '../utils/symbols';

const tokenValue = localStorage.getItem('token');

function getInitialStore(token) {
    return {
        isAuthenticated: !(token === null || token === ''),
    };
}

export default function auth(state = getInitialStore(tokenValue), action) {
    if (action[errorSymbol]) {
        if (action[errorSymbol].response) {
            if (action[errorSymbol].response.status === 401) {
                return {
                    ...state,
                    isAuthenticated: false,
                };
            }
        }
    }

    switch (action.type) {
        case authActions.USERINFO_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            };
        case authActions.AUTH_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
            };
        default:
            return {
                ...state,
            };
    }
}
