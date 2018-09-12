import * as types from '../constant/types';
import {SHOW_TODO_COMPLETED, SHOW_ACTIVE, SHOW_ALL } from '../constant/types'
import cuid from 'cuid'

import { AsyncStorage } from 'react-native'
import * as firebase from 'firebase'



export const addTodo = (title, place, time) => {
    return {
      type: types.ADD_TODO,
      id: cuid(),
      title,
      place,
      time
    }
}

export const saveTodo = () => { // Fix Todo Saved into AsyncStorage.
    return async (dispatch, getState) => {

    //    await AsyncStorage.setItem('@USER_TODO',JSON.stringify({ title, place, time }))
    //    .then(() => console.log("Todo Saved"))
    //    .catch(() => console.log('Error Saving Todo'))
    }
}

export const setVisibilityFilters = filter => ({
    type: types.SET_VISIBILITY_FILTER,
    filter
})



  export const toggleTodo = id => {
      return  {
        type: types.TODO,
        id
      }
  }


  export const VisibilityFilters  = {
     SHOW_ALL,
     SHOW_TODO_COMPLETED,
     SHOW_ACTIVE,
 }
