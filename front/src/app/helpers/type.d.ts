export interface RegistrationForm {
  name?: string;
  email?: string;
  password?: string;
  address?: string;
  phone?: string;
  repeat?: string;
}

export interface RegistrationErrors {
  name?: string;
  email?: string;
  password?: string;
  address?: string;
  phone?: string;
  repeat?: string;
}


export interface LoginForm {
  email?: string;
  password?: string;
}

export interface LoginErrors {
  email?: string;
  password?: string;
}

