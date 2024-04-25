import { ClientOnly } from "@/app/components/clientonly/ClientOnly";
import { LoginForm } from "@/app/components/form/LoginForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MyPoint - Login",
  description: "Welcome to MYPOINT - login and get fun",
};

export default function LoginPage() {
  return (
    <ClientOnly>
      <section className="bg-gray-100">
        <div className="flex flex-col items-center justify-start pt-28 px-6 py-8 mx-auto min-h-[50rem]">

          <div className={"text-center py-3"}>
            <h1 className="font-bold text-2xl">Welcome back</h1>
            <p className="font-light text-neutral-500 mt-2">
              Login to your account
            </p>
          </div>

          <LoginForm />
        </div>
      </section>
    </ClientOnly>
  );
}
