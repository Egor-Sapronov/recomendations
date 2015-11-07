import * as recomendationActions from '../actions/recomendation';

export default function snack(state = {}, action) {
    switch (action.type) {
        case recomendationActions.RECOMENDATION_CREATE_SUCCESS:
            return {
                message: 'Post created',
            };
        default:
            return {};
    }
}
