import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDCO0rwrOXUM1ibVPUqahNiLJYaD3t5ihw",
    authDomain: "e-commerce-75794.firebaseapp.com",
    databaseURL: "https://e-commerce-75794.firebaseio.com",
    projectId: "e-commerce-75794",
    storageBucket: "e-commerce-75794.appspot.com",
    messagingSenderId: "600208848896",
    appId: "1:600208848896:web:f1ed5f0e3973228a8540e5",
    measurementId: "G-FZ0G8NNW6T"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (userAuth) {
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();

        if (!snapShot.exists) {
            const {displayName, email} = userAuth;
            const createdAt = new Date();

            try {
                await userRef.set({
                    displayName, email, createdAt, ...additionalData
                })
            } catch (error) {
                console.log(error);
            }
        }
        return userRef;
    }
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = function () {
    auth.signInWithPopup(provider)
        .then(console.log)
        .catch(console.log);
};

export default firebase;