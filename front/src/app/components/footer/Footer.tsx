import Link from "next/link";
import React from "react";
import { IoIosDesktop } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-2">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href={"/home"}
            className="flex flex-row justify-center items-center gap-1 relative text-white mb-5"
          >
            <p className="font-bold text-2xl">MYPOINT</p>
          </Link>
          <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline me-4 md:me-6">
                Products
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="/home" className="hover:underline">
            MYPOINT
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
