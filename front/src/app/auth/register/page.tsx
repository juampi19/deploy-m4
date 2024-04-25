import { ClientOnly } from "@/app/components/clientonly/ClientOnly";
import { RegisterForm } from "@/app/components/form/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyPoint - Login",
  description: "Welcome to MYPOINT - login and get fun",
};

export default function RegisterPage() {
  return (
    <ClientOnly>
      <section className="bg-gray-100">
        <div className="flex flex-col items-center justify-start pt-18 px-6 py-8 mx-auto min-h-[50rem]">

          <div className={"text-center py-3"}>
            <h1 className="font-bold text-2xl">Welcome to MYPOINT</h1>
            <p className="font-light text-neutral-500 mt-2">
              Create an account!
            </p>
          </div>

          <RegisterForm />
        </div>
      </section>
    </ClientOnly>
  );
}
