import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _null_user = Object.freeze({
    id: null
});

const sessionReducer = (state = _null_user, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _null_user;
        default:
            return state;
    }
};

export default sessionReducer;