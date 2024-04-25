'use client'

import Cookie from 'js-cookie'
import { CartItem } from "@/app/components/products/types"
import { CartContext } from "./cartContext"
import { useEffect, useReducer } from "react"
import { cartReducer } from "./cartReducer";

// const initialCart = (): CartItem[] => {
//   if (typeof window !== 'undefined') {
//     const localStorageCart = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')) : []
//     return localStorageCart;
//   }
//   return [];
// };

const CART_INITIAL_STATE = {
  cart: Cookie.get('cart') ? JSON.parse(Cookie.get('cart')!) : [],
  total: 0,
  order: {status: 'pending',
  date: new Date(), id: 0, user: {id: 0, name: '', email: '', address: '', phone: '', role: ''}, products: []}
}

interface providerProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<providerProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

 
   useEffect(() => {
    const cartCookie = Cookie.get('cart') ? JSON.parse( Cookie.get('cart')! ) : [];
    dispatch({ type: 'load-localstorage', payload: {cartLoad: cartCookie} })
  }, []);


    /*UseEffect para almacenar los productos en las cookies */
    useEffect(() => {
      Cookie.set('cart', JSON.stringify( state.cart ));
    },[ state.cart ]);


  useEffect(() => {
    const subtotal = state.cart.reduce( ( total, product ) => {
      return (product.price * product.quantity!) + total;
    } , 0)

    dispatch({ type: 'total-price', payload: {totalPrice: subtotal} })

  }, [ state.cart ])

  

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </CartContext.Provider>
  )
}