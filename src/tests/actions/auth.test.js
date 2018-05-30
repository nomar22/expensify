import { login, logout } from "../../actions/auth";



test('Should generate Login action object', ()=>{
    const action = login(51);

    expect(action).toEqual({
        type:'LOGIN',
        uid:51
    });
});

test('Should generate Logout action object', ()=>{
    const action = logout();

    expect(action).toEqual({
        type:'LOGOUT'
    });
});