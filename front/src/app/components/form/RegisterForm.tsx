"use client";

import Link from "next/link";
import { useForm } from "@/app/hook/useForm";
import clienteAxios from "@/app/services/axiosService";
import { useRouter } from "next/navigation";
import { RegistrationErrors } from "@/app/helpers/type";
import { useEffect, useState } from "react";
import { validateRegister } from "@/app/helpers/validations";
import { errorToast } from "@/app/helpers/toast/errorToast";
import { successToast } from "@/app/helpers/toast/successToast";
import Cookie from "js-cookie";

export const RegisterForm = () => {
  const { onInputChange, onResetForm, formState, email, password, name, address, phone, repeat, touched } = useForm({
    name: '',
    email: "",
    password: "",
    address: '',
    phone: '',
    repeat: ''

  });
  const [errors, setErrors] = useState<RegistrationErrors>({});
  const router = useRouter();
  const validationErrors = validateRegister(formState);

  useEffect(() => {
    if (Cookie.get("token")) {
      router.push("/home");
    }
  }, [router]);

  useEffect(() => {
    // Validar solo cuando el campo ha sido tocado
    if (Object.keys(touched).length > 0) {
      setErrors(validationErrors);
    }
  }, [formState, touched]);


  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors)
      errorToast('All required field');
      return 
    }

    if(password !== repeat) {
      console.log('the passwords are not the same')
      return;
    }

    const {data} = await clienteAxios.post('/users/register', {name, email, address, phone, password})
    successToast('User created successfully!');

    router.push('/auth/login');
  }


  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign up to your account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>

        <div className="w-full relative">
            <input
              id="name"
              type="text"
              name="name"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${errors.name ? 'border-red-500' : 'border-neutral-500' }`}
              onChange={onInputChange}
              value={name}
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
            <label
              htmlFor="name"
              className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Name
            </label>
          </div>

          <div className="w-full relative">
            <input
              id="email"
              type="email"
              name="email"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${errors.email ? 'border-red-500' : 'border-neutral-500' }`}
              value={email}
              onChange={onInputChange}
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
            <label
              htmlFor="email"
              className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Email
            </label>
          </div>

          <div className="w-full relative">
            <input
              id="address"
              type="text"
              name="address"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${errors.address ? 'border-red-500' : 'border-neutral-500' }`}
              onChange={onInputChange}
              value={address}
            />
              {errors.address && <span className="text-red-500">{errors.address}</span>}
            <label
              htmlFor="address"
              className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Address
            </label>
          </div>

          <div className="w-full relative">
            <input
              id="phone"
              type="number"
              name="phone"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${errors.phone ? 'border-red-500' : 'border-neutral-500' }`}
              onChange={onInputChange}
              value={phone}
            />
            {errors.phone && <span className="text-red-500">{errors.phone}</span>}
            <label
              htmlFor="phone"
              className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Phone
            </label>
          </div>

          

          <div className="w-full relative">
            <input
              id="password"
              type="password"
              name="password"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${errors.password ? 'border-red-500' : 'border-neutral-500' }`}
              onChange={onInputChange}
              value={password}
            />
              {errors.password && <span className="text-red-500">{errors.password}</span>}
            <label
              htmlFor="password"
              className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Password
            </label>
          </div>

          <div className="w-full relative">
            <input
              id="repeat"
              type="password"
              name="repeat"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${errors.repeat ? 'border-red-500' : 'border-neutral-500' }`}
              onChange={onInputChange}
              value={repeat}
            />
            {errors.repeat && <span className="text-red-500">{errors.repeat}</span>}
            <label
              htmlFor="repeat"
              className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Repeat password
            </label>
          </div>

          <button
            type="submit"
            className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
          >
            Register
          </button>

          <div className="text-neutral-500 text-center mt-4 font-light">
            <div className="flex flex-row justify-center items-center gap-2">
              <p>Already have an account?</p>
              <Link href={'/auth/login'} className="text-neutral-100 cursor-pointer hover:underline">
                Log in
              </Link>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
