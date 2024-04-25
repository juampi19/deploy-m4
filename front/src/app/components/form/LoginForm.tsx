"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { AuthContext } from "@/app/context/auth/AuthContext";
import clienteAxios from "@/app/services/axiosService";
import Cookie from "js-cookie";

import { useForm } from "@/app/hook/useForm";
import { errorToast } from "@/app/helpers/toast/errorToast";
import { validateLogin } from "@/app/helpers/validations";
import { LoginErrors } from "@/app/helpers/type";

export const LoginForm = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<LoginErrors>({});

  const { onInputChange, email, password, formState, onResetForm, touched } = useForm({
    email: "",
    password: "",
  });
  const { dispatch } = useContext(AuthContext);


  useEffect(() => {
    if (Cookie.get("token")) {
      router.push("/home");
    }
  }, [router]);

  useEffect(() => {
    const validationErrors = validateLogin(formState);
    // Validar solo cuando el campo ha sido tocado
    if (Object.keys(touched).length > 0) {
      setErrors(validationErrors);
    }
  }, [formState, touched]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateLogin(formState);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) {
      console.log(Object.keys(validationErrors).length)
      errorToast("all required fields");
      return;
    }

    try {
      const { data } = await clienteAxios.post("/users/login", formState);
      console.log(data)
      dispatch({
        type: "LOGIN",
        payload: { user: data.user, login: data.login, token: data.token },
      });
      onResetForm();

      const redirectUrl = Cookie.get("redirectUrl");

      Cookie.remove("redirectUrl");

      router.push(redirectUrl || "/dashboard/perfil");
    } catch (error: any) {
      console.log(error);
      errorToast(error.response.data.message);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className="w-full relative">
            <input
              id="email"
              type="email"
              name="email"
              placeholder=" "
              className={`peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4  ${errors.email ? 'border-red-500' : 'border-neutral-500' }`}
              onChange={onInputChange}
              value={email}
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

          <button
            type="submit"
            className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
          >
            Sign in
          </button>

          <div className="text-neutral-500 text-center mt-4 font-light">
            <div className="flex flex-row justify-center items-center gap-2">
              <p>First time using MYPOINT?</p>
              <Link
                href={"/auth/register"}
                className="text-neutral-100 cursor-pointer hover:underline"
              >
                create an account
              </Link>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
