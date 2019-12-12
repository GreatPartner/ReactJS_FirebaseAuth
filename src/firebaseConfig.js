import * as firebase from 'firebase'

// Your web app's Firebase configuration
var config = {
  apiKey: 'AIzaSyBM_FB9QY3IU4i9DYK5kddzD4f2YOR1XvI',
  authDomain: 'react-redux-firebase-tut-c1c14.firebaseapp.com',
  databaseURL: 'https://react-redux-firebase-tut-c1c14.firebaseio.com',
  projectId: 'react-redux-firebase-tut-c1c14',
  storageBucket: 'react-redux-firebase-tut-c1c14.appspot.com',
  messagingSenderId: '726498164671',
  appId: '1:726498164671:web:9be3cd593e2efe4d51ab0a',
  measurementId: 'G-CQPCDJTCE7'
}

let firebaseConfig = firebase.initializeApp(config);

export default firebaseConfig;
