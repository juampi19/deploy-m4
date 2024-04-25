
import { createContext, Dispatch } from "react";
import { CartAction, CartState } from "./interface";



export const CartContext = createContext<{ state: CartState; dispatch: Dispatch<CartAction> }>({
  state: {cart: [], total: 0, order: {status: 'pending',
  date: new Date(), id: 0, user: {id: 0, name: '', email: '', address: '', phone: '', role: ''}, products: []}},
  dispatch: () => null
});