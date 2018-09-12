import * as types from '../constant/types'



const initialState = {
     isAuthenticated: false,

     user: {},

     tokenUser: {},

     loading: false,

     signInSuccess: false,
     signInFailure: false,

     signUpSuccess: false,
     signUpFailure: false,

     signInFailureMessage: [],
     signUpFailureMessage: []
}


export default function (state = initialState, action) {
        switch(action.type) {
            case types.SIGN_UP:
             return {
                 ...state,
                 isAuthenticated: true
             }
             case types.SIGN_UP_SUCCESS:
              return {
                  ...state,
                  signUpSuccess: action.success,
                  isAuthenticated: false,
                }
                case types.SIGN_UP_FAILURE:
                return {
                    ...state,
                    isAuthenticated: false,
                    signUpFailure: true,
                    signUpFailureMessage: action.error,
                }


                case types.LOG_IN:
                return {
                    ...state,
                    isAuthenticated: true,
                    signInFailure: false,
                    signInSuccess: false
               }
               case types.LOG_IN_SUCCESS:
                return {
                    ...state,
                    isAuthenticated: false,
                    user: action.user,
                    signInSuccess: true,
                }
                case types.LOG_IN_FAILURE:
                return {
                    ...state,
                     isAuthenticated: false,
                     signInFailureMessage: action.error,
                     signInFailure: true,
                 }
                 case types.CURRENT_USER_INFO:
                 return {
                     ...state,
                     tokenUser: action.tokenUser
                 }
                 case types.LOG_OUT:
                  return {
                      ...state,
                      ...initialState
                  }
                 default:
                  return state
        }
}

