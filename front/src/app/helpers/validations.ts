import { LoginErrors, LoginForm, RegistrationErrors, RegistrationForm } from "./type";


export const validateLogin = ( input: LoginForm ): LoginErrors => {
  const errors: LoginErrors = {}

  //EMAIL
  input.email = input.email!.trim();
  if (!input.email) {
    errors.email = "Please enter an email";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.email)) {
      errors.email = "Please enter a valid email";
    }
  }

  //* PASSWORD
  if (!input.password) errors.password = "Please enter an password";
  else {
    if (input.password.length < 5) errors.password = "Password must be at least 5 characters";
    if (input.password.length > 12) errors.password = "Password must be at most 12 characters";
  }

  return errors;

}



export const validateRegister = (input: RegistrationForm): RegistrationErrors => {
  const errors: RegistrationErrors = {};

  //* NAME
  if (!input.name!.trim()) {
    errors.name = "Please enter your name";
  } else if (input.name!.trim().length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  //* EMAIL
  if (!input.email!.trim()) {
    errors.email = "Please enter an email";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.email!.trim())) {
      errors.email = "Please enter a valid email";
    }
  }

  //* PASSWORD
  if (!input.password!.trim()) {
    errors.password = "Please enter a password";
  } else {
    if (input.password!.trim().length < 5) {
      errors.password = "Password must be at least 5 characters";
    }
  }

  //* ADDRESS
  if (!input.address!.trim()) {
    errors.address = "Please enter your address";
  }else if (input.address!.trim().length < 5) {
    errors.address = "Address must be at least 5 characters";
  }

  //* PHONE
  if (!input.phone!.trim()) {
    errors.phone = "Please enter your phone number";
  }else if (input.phone!.trim().length < 9) {
    errors.phone = "Phone number must be at least 9 characters";
  }

  //* REPEAT PASSWORD
  if (!input.repeat!.trim()) {
    errors.repeat = "Please repeat your password";
  } else {
    if (input.repeat!.trim() !== input.password!.trim()) {
      errors.repeat = "Passwords do not match";
    }
  }

  return errors;
}