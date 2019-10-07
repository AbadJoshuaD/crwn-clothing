import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAQUQ0KqJvJo3eZEGUslPbZ_vbXWlbq9z4",
    authDomain: "crwn-database-70d7b.firebaseapp.com",
    databaseURL: "https://crwn-database-70d7b.firebaseio.com",
    projectId: "crwn-database-70d7b",
    storageBucket: "crwn-database-70d7b.appspot.com",
    messagingSenderId: "167805219726",
    appId: "1:167805219726:web:f1512990c51b5e69c12adf",
    measurementId: "G-HC2R1E3BJR"
}
//Creating a userProfile document function that will take a firestore document and will check if the user exist or not.
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnapShot = await userRef.get();
    //Checking if the users/uid is existing on the firestore users document
    if (!userSnapShot.exist) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({ displayName, email, createdAt, ...additionalData })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}
//Initialize firebase config to connect to the firebase db setup
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//This is basically the setup for pop up or promopt that allows you to sign in using google account
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;