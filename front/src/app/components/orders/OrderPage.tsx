"use client";
import { CartContext } from "@/app/context/cart/cartContext";

import { useCallback, useContext } from "react";

import { EmptyPage } from "./EmptyPage";
import { CartList } from "./CartList";

import { ClientOnly } from "../clientonly/ClientOnly";

export const OrderPage = () => {
  const { state} = useContext(CartContext);


  return (
    <>
    <ClientOnly>
        {state.cart.length === 0 ? (
          <EmptyPage />
        ) : (
          <CartList />
        )}
      </ClientOnly>
    </>
  );
};
