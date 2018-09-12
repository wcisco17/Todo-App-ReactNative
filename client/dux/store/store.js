import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducer'


const initialState = {}

const middleWare = [thunkMiddleware]

export const store = createStore(
    rootReducer,
    ...initialState,
   compose(
       applyMiddleware(...middleWare)
   )
)