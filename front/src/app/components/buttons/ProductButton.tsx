'use client'

import { CartContext } from "@/app/context/cart/cartContext"
import { ProductsProps } from "../products/types"
import { useContext } from "react"
import { successToast } from "@/app/helpers/toast/successToast"
import { useRouter } from "next/navigation"

export const ProductButton: React.FC<ProductsProps | undefined> = (product) => {
  const router = useRouter()
  const {dispatch} = useContext(CartContext)

  const addToCart = () => {
    dispatch({ type: 'add_cart', payload: {newItem: {...product!, quantity: 1}} })

   successToast('Add to cart successfully!')
  }

  const handleBuy = () => {
    dispatch({ type: 'add_cart', payload: {newItem: {...product!, quantity: 1}} });
    router.push('/cart')
    
  }

  return (
    <div className="mt-8 space-y-4">
    <button
      type="button"
      className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-bold rounded"
      onClick={handleBuy}
    >
      Buy now
    </button>
    <button
      type="button"
      className="w-full px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-bold rounded"
      onClick={addToCart}
    >
      Add to cart
    </button>
  </div>
  )
}
