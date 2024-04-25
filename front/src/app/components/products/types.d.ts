
export interface ProductsProps {
  id:          number;
  name:        string;
  description: string;
  price:       number;
  stock:       number;
  image:       string;
  categoryId:  number;
  quantity?: number;
}

export interface CartItem extends ProductsProps {
  quantity?: number
}