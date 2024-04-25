'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import type { ProductsProps } from "./types";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "@/app/context/cart/cartContext";
import { getCategoryName } from "@/app/helpers/category";
import { ProductImages } from "@/app/helpers/productImages";

export const ProductCard: React.FC<ProductsProps> = ({id, description , name, price, stock, categoryId, image}) => {
  const {dispatch} = useContext(CartContext)

  const addToCart = () => {
    dispatch({ type: 'add_cart', payload: {newItem: {id, name, price, description, stock, categoryId, image, quantity: 1}} })

    toast.success('Add to cart successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }
  

  return (
    <div
    className="relative w-full m-10 max-w-lg sm:max-w-sm overflow-hidden rounded-lg shadow-md bg-neutral-50 mx-auto"
    >
    
      <Link href={`/products/${id}`}>
        <Image
          src={
            ProductImages[`${id}`]
          }
          alt={description}
          height={1000}
          width={1000}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-70 rounded-t-lg object-fill w-full"
        />
      </Link>
      <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
        Sale
      </span>

      <div className="mt-4 px-5 pb-5">
        <h4 className="text-xl font-semibold tracking-tight text-slate-900">
          {name}
        </h4>

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-4">
          <span className="text-3xl font-bold text-slate-900">
            ${price}
          </span>

          <button className="bg-slate-800 hover:bg-slate-900 transition text-white font-bold px-3 py-4 sm:py-2 rounded-md flex gap-2 items-center w-full md:w-auto justify-center text-lg my-4"
            onClick={addToCart}
          > 
            <FiShoppingCart size={20} />
            Add to cart
          </button>
        </div>

        <span className="font-light mt-5 text-neutral-400 text-sm">
          {getCategoryName(categoryId)}
        </span>
      </div>
    </div>
  );
};
