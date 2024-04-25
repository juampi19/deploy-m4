
import { AuthAction, AuthState } from "./interfaces";
import { createContext, Dispatch } from "react";

export const AuthContext = createContext<{ state: AuthState; dispatch: Dispatch<AuthAction> }>({
  state: { isAuthenticated: false, token: null, user: null },
  dispatch: () => null,
});