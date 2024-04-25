"use client";

import { AuthContext } from "@/app/context/auth/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import clienteAxios from "@/app/services/axiosService";
import { Orders } from "./interfaces";
import { getCategoryName } from "@/app/helpers/category";
import Image from "next/image";
import { ProductImages } from "@/app/helpers/productImages";
import { Empty } from "../Empty";

export const OrderList = () => {
  const { state } = useContext(AuthContext);

  const [ordersList, setOrderList] = useState<Orders[]>([]);
  const router = useRouter();
  const token = Cookies.get("token");

  //Obtener las ordenes
  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const { data } = await clienteAxios.get("/users/orders", {
          headers: {
            Authorization: token,
          },
        });

        setOrderList(data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllOrders();
  }, [token]);

  return (
    <div className="container  w-full mx-auto">
      <div className="w-full md:max-w-[70rem] container bg-gray-100 text-slate-800 mx-auto rounded px-2 py-5">
      {ordersList.length === 0 ? (
        <Empty />
      ) : (
        <>
            <div className="flex flex-col gap-3 max-h-[85vh] overflow-y-auto divide-y divide-gray-500 text-slate-800">
              {ordersList.map((item) => (
                <div key={item.id} className="py-4 px-2 flex flex-col">
                  <div className="flex justify-between items-center flex-1 flex-wrap">
                    <h2 className="text-xl py-2">Order: #{item.id}</h2>
                    <p>Date: {item.date.toString()}</p>
                  </div>

                  <div className="flex flex-col gap-3 max-h-[55vh] overflow-y-auto overflow-x-auto">
                    {item.products.map((state) => (
                      <div
                        key={state.id}
                        className="bg-gray-100 rounded shadow-lg text-slate-800 px-2 py-4 flex flex-col justify-between w-full sm:items-center sm:flex-row gap-2"
                      >
                        <div className="flex items-center gap-2">
                          <Image
                            src={ProductImages[`${state.id}`]}
                            alt={state.description}
                            width={500}
                            height={500}
                            className="w-40 rounded-sm object-cover"
                          />

                          <div className="font-semibold">
                            <p>{state.name}</p>
                            <p>{getCategoryName(state.categoryId)}</p>
                          </div>
                        </div>
                        <p className="text-lg font-semibold">${state.price}</p>
                        <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-4 py-1 rounded dark:bg-green-900 dark:text-green-300">
                          approved
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </>
      )}
      </div>
    </div>
  );
};
