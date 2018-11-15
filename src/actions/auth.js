import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid, displayName, photoUrl) => ({
    type: 'LOGIN',
    uid,
    displayName,
    photoUrl 
});
export const startLogin = () => {
    return () => {
        const loginResult = firebase.auth().signInWithPopup(googleAuthProvider);
        console.log(loginResult);
        return loginResult;
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};