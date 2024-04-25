
import { CartAction, CartState } from "./interface";
import Cookies from 'js-cookie';


export const cartReducer = ( state: CartState, action: CartAction ):CartState => {
  //añadir al carrito
  if(action.type === 'add_cart') {
    //Verificamos si existe el producto
    const productInCart = state.cart.find( productoState => productoState.id === action.payload.newItem.id );

    if( productInCart ) {
      return {
        ...state,
        cart: state.cart.map( item => 
          item.id === action.payload.newItem.id
           ? {...item, quantity: item.quantity! + action.payload.newItem.quantity!}
           : item
         )
      }
    }else {
      return {
        ...state,
        cart: [...state.cart, action.payload.newItem]
      }
    }

  }

  //eliminar producto
  if( action.type === 'delete-product' ) {
    return {
      ...state,
      cart: state.cart.filter( item => {
        if( item.id !== action.payload.idProduct ) return item
      } )
    }
  }

  //calcular totla
  if(action.type === 'total-price') {
    return {
      ...state,
      total: action.payload.totalPrice
    }
  }

  //cargar del localstorage
  if(action.type==='load-localstorage') {
    
    return {
      ...state,
      cart: action.payload.cartLoad
    }
  }

  if(action.type === 'save-order') {
    return {
      ...state,
      order: action.payload.orderUser
    }
  }

  //limpiar carrito
  if(action.type === 'clear-cart') {
    Cookies.remove('cart')
    return {
      ...state,
      total: 0,
      cart: []
    }
  }

  return state;
}