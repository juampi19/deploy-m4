import { useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";
import Cookies from 'js-cookie';

interface providerProps {
  children: React.ReactNode;
}

const INITIAL_STATE = {
  isAuthenticated: false,
  token: null,
  user: null,
}

export const AuthProvider: React.FC<providerProps>  = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  //traer los datos guardados
  useEffect(() => {
    const userCookie = Cookies.get('user');
    const tokenCookie = Cookies.get('token');

    if(userCookie && tokenCookie) {
      const user = JSON.parse(userCookie);
      dispatch({ type: 'LOGIN', payload: { user, token: tokenCookie, login: true } });
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
