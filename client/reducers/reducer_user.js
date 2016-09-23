import { SIGNIN, SIGNUP } from '../actions/index';


export default function (state = {}, action) {
  switch (action.type) {
    case SIGNIN:
      if (action.payload.response) { // if signin failed
        return action.payload.response.data;
      }
      localStorage.setItem('userId', action.payload.data.id);
      localStorage.setItem('email', action.payload.data.email);
      localStorage.setItem('username', action.payload.data.username);
      return action.payload.data;

    case SIGNUP:
      if (action.payload.response) { // if signup failed
        return action.payload.response.data;
      }
      return action.payload.data; // change when we get data from axios request

    default:
      return state;
  }
}
