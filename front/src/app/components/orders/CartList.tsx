"use client";
import { useCallback, useContext } from "react";
import Image from "next/image";
import Cookie from "js-cookie";
import { useRouter, usePathname } from "next/navigation";

import { CartContext } from "@/app/context/cart/cartContext";
import { IoCloseCircle } from "react-icons/io5";
import { getCategoryName } from "../../helpers/category";
import clienteAxios from "@/app/services/axiosService";
import { CartItem } from "../products/types";
import { ProductImages } from "@/app/helpers/productImages";

export const CartList = () => {
  const { state, dispatch } = useContext(CartContext);

  const router = useRouter();
  const pathname = usePathname();
  const token = Cookie.get("token");
  const cart: CartItem[] = JSON.parse( Cookie.get('cart')!);



  const createOrderUser = async () => {
    if (!token) {
      Cookie.set("redirectUrl", pathname);
      router.push("/auth/login");
      return;
    }

    const order = { products: state.cart.map((item) => item.id)};

    try {
      const {data} = await clienteAxios.post('/orders', order
      , {
        headers: {
          Authorization: token
        }
      })

      dispatch({type: 'save-order', payload: {orderUser: data}})
      router.push('/dashboard/order')
    } catch (error) {
      console.log(error)
    }
  };

  const handleDelete = (id: number) => {
    dispatch({ type: 'delete-product', payload: {idProduct: id} })
  }

  return (
    <div className="max-w-7xl mx-auto shadow-md rounded-sm">
      <div className="grid lg:grid-cols-3">
        <div className="lg:col-span-2 p-10 bg-white overflow-x-auto">
          <div className="flex border-b pb-4">
            <h2 className="text-lg font-semibold text-[#333] flex-1">
              Shopping Cart
            </h2>
            <h3 className="text-sm font-semiboldbold text-gray-500">
              {state.cart.length} Items
            </h3>
          </div>

          <div className="max-h-[45vh] overflow-y-auto">
            {cart.map((item) => (
              <div className="mt-2" key={item.id}>
                <div className="sm:flex sm:justify-start justify-between items-center">
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

                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item.name}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">
                        {getCategoryName(item.categoryId)}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center space-x-4">
                        <p className="text-sm font-semibold">${item.price}</p>
                        <button
                          onClick={()=> handleDelete(item.id)}
                        >
                          <IoCloseCircle
                            className="cursor-pointer text-red-500"
                            size={20}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 p-10">
          <h3 className="text-sm font-semibold text-[#333] border-b pb-4">
            Order Summary
          </h3>
          <ul className="text-[#333] divide-y mt-6">
            <li className="flex flex-wrap gap-4 text-md py-4 font-bold">
              Total <span className="ml-auto">${state.total}</span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-6 text-md px-6 py-2.5 w-full bg-slate-800 hover:bg-slate-900 text-white rounded"
            onClick={createOrderUser}
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};
