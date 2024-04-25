"use client";

import { CartContext } from "@/app/context/cart/cartContext";
import { getCategoryName } from "@/app/helpers/category";
import { ProductImages } from "@/app/helpers/productImages";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineHouse, MdOutlinePhone } from "react-icons/md";

export const OrderUser = () => {
  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    dispatch({ type: "clear-cart" });
  }, [dispatch]);

  console.log(state.order);
  return (
    <section className="flex flex-col px-2 py-28 w-full">
      <h1 className="text-center text-4xl font-semibold">Thanks for order</h1>
      <p className="text-center text-2xl font-semibold text-slate-800">
        Hi {state.order.user.name}!
      </p>
      <p className="flex gap-2 text-center justify-center py-2">
        <span>
          <FaCheckCircle size={20} className="text-green-500" />
        </span>
        <span className="text-gray-500 font-semibold">
          Order completed successfully!
        </span>
      </p>

      <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl mx-auto lg:max-w-[90rem]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200 gap-4">
          <div>
            <p className="font-semibold text-base leading-7 text-black">
              Order Id:{" "}
              <span className="text-indigo-600 font-medium">
                #{state.order.id}
              </span>
            </p>
            <p className="font-semibold text-base leading-7 text-black mt-4">
              Order Payment :{" "}
              <span className="text-gray-400 font-medium">
                {new Date(state.order.date).toString()}
              </span>
            </p>
          </div>

          <p className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600 w-40 text-center">
            {state.order.status}
          </p>
        </div>
        <div className="w-full px-3">
          {state.order.products.map((item) => (
            <div
              key={item.id}
              className="flex flex-col lg:flex-row items-center border-b border-gray-200 py-4 gap-2 justify-between"
            >
              <div className="flex flex-col md:flex-row items-center gap-2">
                <Image
                  src={
                    ProductImages[`${item.id}`]
                  }
                  alt={"description"}
                  height={1000}
                  width={1000}
                  loading="lazy"
                  className="h-28 w-28 rounded-t-lg object-fit"
                />
                <div className="flex flex-col flex-wrap">
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500 font-semibold">
                    {getCategoryName(item.categoryId)}
                  </p>
                </div>
              </div>

              <p className="flex lg:flex-col flex-row gap-2 items-center justify-center">
                Price
                <span className="font-semibold text-gray-500 text-lg">
                  ${item.price}
                </span>
              </p>
            </div>
          ))}
        </div>

        <div className="py-5 px-2 flex flex-col md:flex-row gap-2 justify-between items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-700">
              Shipping Address
            </h2>
            <p className="font-semibold text-lg text-slate-700 flex items-center gap-2">
              <MdOutlineHouse />
              {state.order.user.address}
            </p>
            <p className="font-semibold text-lg text-slate-700 flex items-center gap-2">
              <MdOutlineEmail />
              {state.order.user.email}
            </p>
            <p className="font-semibold text-lg text-slate-700 flex items-center gap-2">
              <MdOutlinePhone />
              {state.order.user.phone}
            </p>
          </div>

          <Link href={'/products'} className="bg-slate-800 px-3 py-2 rounded-md text-white font-semibold hover:bg-slate-900 transition">Continue Shopping</Link>
        </div>
      </div>
    </section>
  );
};
