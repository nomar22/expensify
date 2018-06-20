export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid,
                userImg:action.photoUrl,
                userName:action.displayName
            }
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};