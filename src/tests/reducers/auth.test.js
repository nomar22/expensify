import auth from '../../reducers/auth'



test('should login ', ()=>{
    const action = {
        type: 'LOGIN',
        uid: 51
    };
    const state = auth({},action);

    expect(state).toEqual({uid:51});
});


test('should logout ', ()=>{
    const action = {
        type: 'LOGOUT'
    };
    const state = auth({},action);

    expect(state).toEqual({});
});