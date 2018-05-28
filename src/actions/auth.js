import {firebase, googleAuthProvider} from '../firebase/firebase';

export const startLogin = ()=>{
    return ()=>{
        console.log('trying to auth')
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};