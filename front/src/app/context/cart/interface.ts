export interface CartItem {
  id:          number;
  name:        string;
  description: string;
  price:       number;
  stock:       number;
  image:       string;
  categoryId:  number;
  quantity?: number;
}

export interface OrderUser {
  status:   string;
  date:     Date;
  user:     User;
  products: Product[];
  id:       number;
}

export interface Product {
  id:          number;
  name:        string;
  description: string;
  price:       number;
  stock:       number;
  image:       string;
  categoryId:  number;
}

export interface User {
  id:      number;
  name:    string;
  email:   string;
  address: string;
  phone:   string;
  role:    string;
}


export type CartAction = 
{ type: 'load-localstorage', payload: {cartLoad: CartItem[]} } |
{ type: 'add_cart', payload: {newItem: CartItem} } |
{ type: 'total-price', payload: {totalPrice: number} } |
{ type: 'delete-product', payload: {idProduct: number} } |
{ type: 'save-order', payload: {orderUser: OrderUser} } |
{ type: 'clear-cart' }

export type CartState = {
  cart: CartItem[],
  total: number;
  order: OrderUser
}



