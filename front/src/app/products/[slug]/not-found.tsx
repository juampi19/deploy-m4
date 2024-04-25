import { ClientOnly } from "@/app/components/clientonly/ClientOnly";
import Link from "next/link";

export default function NotFound() {
  return (
    <ClientOnly>
    <div className="bg-slate-100 antialiased text-slate-300 selection:bg-blue-600 selection:text-white h-screen">
      <div className="flex justify-center items-center">
       

        <div className="w-full text-slate-900">
          <main className="w-full h-screen flex flex-col justify-center items-center bg-gray-100 pb-10">
            <h1 className="text-9xl font-extrabold text-slate-800 tracking-widest">
              404
            </h1>
            <div className="bg-[#FF6A3D] text-sm rounded rotate-12 absolute">
              Product not found
            </div>
            <button className="mt-5">
              <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
                <span className="absolute inset-0 transition-transform  bg-[#FF6A3D] "></span>

                <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                  <Link href={'/home'}>Go to home</Link>
                </span>
              </div>
            </button>
          </main>
        </div>
      </div>
    </div>
    </ClientOnly>
  );
}