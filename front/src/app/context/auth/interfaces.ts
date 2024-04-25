export interface User {
  login: boolean;
  user:  UserClass;
  token: string;
}

export interface UserClass {
  id:         number;
  name:       string;
  email:      string;
  address:    string;
  phone:      string;
  role:       string;
  credential: Credential;
  orders:     Order[];
}

export interface Credential {
  id:       number;
  password: string;
}

export interface Order {
  id:     number;
  status: string;
  date:   Date;
}

export type AuthAction =
  | { type: 'LOGIN'; payload: { token: string; user: UserClass, login: boolean } }
  | { type: 'LOGOUT' };

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: UserClass | null;
}
