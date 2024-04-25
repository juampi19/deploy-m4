"use client";

import { AuthContext } from "@/app/context/auth/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { MdOutlineEmail, MdOutlineHouse, MdOutlinePhone } from "react-icons/md";
import { Empty } from "../Empty";
import { Order } from "@/app/context/auth/interfaces";
import clienteAxios from "@/app/services/axiosService";
import Cookies from "js-cookie";
import { HiOutlineUser } from "react-icons/hi";
import { LuUserCircle } from "react-icons/lu";
import { BsBox } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";

export const PerfilUser = () => {
  const { state } = useContext(AuthContext);

  const [ordersUser, setordersUser] = useState<Order[]>([])
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

        setordersUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllOrders();
  }, [token]);


  const redirectOrderList = () => {
    router.push("/dashboard/orders");
  };

  return (
    <div className="py-20 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="mt-5 mb-5 flex flex-col-reverse xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        {ordersUser.length === 0 ? (
          <Empty />
        ) : (
          <>
            <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
              <div className="flex flex-col justify-start items-start bg-gray-800 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full ">
                <h3 className="text-xl md:text-2xl leading-6 xl:leading-5 text-white py-2 font-bold flex items-center gap-2">
                  <BsBox size={30}/>
                  Order List
                </h3>
                <div className="divide-y divide-gray-100 w-full flex flex-col flex-1">
                  {ordersUser.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center w-full py-5"
                    >
                      <div className="flex flex-1 gap-2 text-lg font-semibold">
                        <p className="text-white">Date:</p>
                        <span className="text-gray-400">
                          {item.date.toString()}
                        </span>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-6 py-4 rounded-full dark:bg-green-900 dark:text-green-300">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                  <h3 className="text-xl md:text-2xl leading-6 xl:leading-5 text-white py-2 font-bold flex items-center gap-2">
                    <TbListDetails size={30}/>
                    My orders
                  </h3>
                  <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800 text-center">
                    View your Order details here
                  </p>

                  <div className="w-full flex justify-center items-center">
                    <button
                      className="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white"
                      onClick={redirectOrderList}
                    >
                      Go your orders
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="bg-gray-800 w-full xl:w-96 flex justify-between items-start md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
          <h3 className="text-xl md:text-2xl leading-6 xl:leading-5 text-white py-2 font-bold flex gap-2 items-center">
            <LuUserCircle size={30}/>
            Customer
          </h3>

          <div className="flex flex-col md:flex-col gap-5 xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
            <div className="flex flex-col justify-start items-start flex-shrink-0">
              <div className="flex justify-start w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                <div className="flex justify-start items-start flex-col space-y-2">
                  <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800 flex gap-2 items-center">
                    <HiOutlineUser size={20}/>
                    {state.user?.name}
                  </p>
                  <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">
                    {ordersUser.length} Orders
                  </p>
                </div>
              </div>

              <div className="flex justify-start text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <MdOutlineEmail size={20} />
                <p className="cursor-pointer text-sm leading-5 ">
                  {state.user?.email}
                </p>
              </div>
              <div className="flex justify-start text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <MdOutlinePhone size={20} />
                <p className="cursor-pointer text-sm leading-5 ">
                  {state.user?.phone}
                </p>
              </div>
            </div>

            <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0 border-b border-gray-200 pb-6">
              <div className="flex justify-start md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-start md:items-start">
                <div className="flex justify-start md:justify-start items-start md:items-start flex-col space-y-4 xl:mt-8">
                  <p className="text-base text-white font-semibold leading-4 text-center md:text-left ">
                    Shipping Address
                  </p>
                  <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-start md:text-left text-sm leading-5 text-gray-600 flex gap-2 items-center">
                  <MdOutlineHouse size={20}/>
                    {state.user?.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
