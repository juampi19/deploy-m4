
import { MdOutlineShoppingCart } from "react-icons/md"


export const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <MdOutlineShoppingCart size={50}/> 
      <p className="text-center text-lg font-semibold">Your cart is <span className="text-slate-900 font-bold">Empty</span>!</p>
    </div>
  )
}
