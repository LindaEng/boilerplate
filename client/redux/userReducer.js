import axios from 'axios'

//action type:
const GET_ME = 'GET_ME'


//action creator:
const getMe = (user) => ({
  type: GET_ME,
  user
})

//Thunk
export const fetchUser = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/user/me')
    dispatch(getMe(data))
  }
}

//initial state

const reducer = (state = {} , action) => {
  switch (action.type) {
    case GET_ME:
      // return {...state, user: action.user}
      //!!CHECK THIS LATER 
      return action.user
    default :
      return state
  }
}

export default reducer
