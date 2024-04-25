"use client";

import React, { useContext } from "react";
import type { CartItem } from "../products/types";
import Image from "next/image";
import { getCategoryName } from "@/app/helpers/category";
import { CartContext } from "@/app/context/cart/cartContext";
import { ProductImages } from "@/app/helpers/productImages";

export const CartProduct: React.FC<CartItem> = (product) => {
  const { dispatch } = useContext(CartContext)

  const deleteProduct = (id: number) => {
    dispatch({ type: 'delete-product', payload: {idProduct: id} })
  }

  return (
    <li className="flex py-6">
      <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={
            ProductImages[`${product.id}`]
          }
          alt={product.description}
          height={1000}
          width={1000}
          loading="lazy"
          className="h-28 w-28 rounded-t-lg object-fit"
        />
      </div>

      <div className="m-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{product.name}</a>
            </h3>
            <p className="ml-4">${product.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {getCategoryName(product.categoryId)}
          </p>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Quantity {product.quantity}</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => deleteProduct(product.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
