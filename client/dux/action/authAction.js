
import * as types from '../constant/types';
import * as firebase from 'firebase'

function signUp() {
    return {
        type: types.SIGN_UP,
    }
}

function signUpSuccess(success) {
    return {
        type: types.SIGN_UP_SUCCESS,
        success,
    }
}

function signUpFailure(error) {
return {
        type: types.SIGN_UP_FAILURE,
        error,
    }
}



export const signingUp = (username, password) => {
    return (dispatch) => {
        dispatch(signUp())
        firebase.auth().createUserWithEmailAndPassword(username, password)
        .then((userSuccess) => {
                 const user = `Thank you ${userSuccess.user.email} you may now log in`
                console.log("User Sign Up success", userSuccess.user.email)
                dispatch(signUpSuccess(user))
        })
        .catch((err) => {
            if(err) {
                let error = `${err}`
                dispatch(signUpFailure(error))
            }
          })
    }
}

function login() {
    return {
        type: types.LOG_IN
    }
}


 function loginSuccess(user) {
    return {
        type: types.LOG_IN_SUCCESS,
        user,
    }
}

function loginFailure(error) {
    return {
        type: types.LOG_IN_FAILURE,
        error,
    }
}

export const signingIn = (username, password) => {
    return (dispatch) => {
        dispatch(login())
        firebase.auth().signInWithEmailAndPassword(username, password)
        .then((user) => {
                dispatch(loginSuccess(user))
        })
        .catch((err) => {
                error = `${err}`
                dispatch(loginFailure(error))
        })
    }
}

function getUser(tokenUser) {
    return {
        type: types.CURRENT_USER_INFO,
        tokenUser
    }
}

export const getUsersStatus = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user) => {
            dispatch(loginSuccess(user))
            if (user !== null) {
             console.log("We are authenticated now!");
             dispatch(getUser(user))
            } else {
                console.log('false not authenticated')
            }
          })
    }
}


function signingOut() {
    return {
        type: types.LOG_OUT
    }
}


export const logOut = () => {
    return (dispatch) => {
        firebase.auth().signOut()
        .then((res) => {
            dispatch(signingOut())
            console.log("Sign Out Success")
        })
        .catch((err) => {
            console.log('Error Sign Out')
        })
    }
}