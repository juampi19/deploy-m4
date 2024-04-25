import type { AuthAction, AuthState } from "./interfaces";
import Cookies from 'js-cookie';

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  if(action.type === 'LOGIN') {
    Cookies.set('token', action.payload.token);
    Cookies.set('user', JSON.stringify(action.payload.user));
    return {
      isAuthenticated: action.payload.login,
      token: action.payload.token,
      user: action.payload.user
    }
  }
  

  if(action.type === 'LOGOUT') {
    Cookies.remove('user');
    Cookies.remove('token');
    return {
      isAuthenticated: false, token: null, user: null
    }
  }


  return state;
};