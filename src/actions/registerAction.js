import firebase from '../../src/firebaseConfig'

const databaseRef = firebase.database().ref()

const userDetailsRef = databaseRef.child('user-details')

const registerAction = (name, email, password) => async dispatch => {
  console.log('register action!!!')
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      userDetailsRef.push().set({
        userId: user.user.uid,
        userName: name
      })
      dispatch({
        type: 'register',
        payload: true
      })
    })
    .catch(function (error) {
      alert(error)
    })
}

export default registerAction;
