import { ChangeEvent, useState } from "react";

type FormEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

interface inputProps {
  name?: string;
  email?: string;
  address?:string;
  phone?: string;
  password?: string;
  repeat?: string;
}




export const useForm = ( initialForm = {}  ) => {

  const [formState, setFormState] = useState<inputProps>( initialForm );
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});


  const onInputChange = (event: FormEvent) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });

    setTouched({ ...touched, [event.target.name]: true });
  };



  const onResetForm = () => {
    setFormState( initialForm )
  }


  return {
    ...formState, // => const username, const password
    formState,  // => { username:, password:  }
    onInputChange, // => 
    onResetForm,
    touched
  };
};