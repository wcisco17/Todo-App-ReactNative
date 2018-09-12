import * as types from '../constant/types'
const initialState = {
    completed: false,

    id: '',
    title: '',
    place: '',
    time: '',

    date: new Date ()

}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TODO:
             return [
                 ...state,
                 {
                    id: action.id,
                    title: action.title,
                    place: action.place,
                    time: action.time,
                    completed: false,
                }
             ]

        case types.TODO:
            return state.map(state =>
                (state.id === action.id)
                  ? {...state, completed: !state.completed}
                  : state
            )
         case types.DELETE_TODO:
          return {
              ...state,
              ...initialState,
              completed: false
          }
          default:
           return state
    }
}
// case types.TODO:
// return {
//     ...state,
//     completed: (state.id === action.id)
//     ? {...state, completed: !state.completed}
//     : state.done
// }

// case types.SHOW_TODO_COMPLETED:
// return [
//     ...state,
//     {
//      id: action.id,
//      title: action.title,
//      place: action.place,
//      time: action.time,
//      completed: true,
//    }
// ]