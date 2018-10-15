import firebase from 'firebase';
import 'firebase/database'


let config ={ 
	apiKey: "AIzaSyBsE93y9UsITOr4EhAzhJo3t8blqE52p9I",
    authDomain: "test-167ea.firebaseapp.com",
    databaseURL: "https://test-167ea.firebaseio.com",
    projectId: "test-167ea",
    storageBucket: "test-167ea.appspot.com",
    messagingSenderId: "210430458022"
};

let fire = firebase.initializeApp(config);

export default fire;