
import firebase from '../../src/firebaseConfig'

const loginAction = (
    email,
    password
) => async dispatch => {
    //TODO at the moment, since we haaven't yet connected to the database we are going to say that each time we tye to login we should not be able to log in

    firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
        dispatch({
            type: "login",
            payload: true
        })
    })
    .catch(function(error){
        alert(error);
    })
}

export default loginAction;