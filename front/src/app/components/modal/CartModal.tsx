import { useContext } from "react";
import { Modal } from "./Modal";
import { CartModalProps } from "./types";
import { CartContext } from "@/app/context/cart/cartContext";
import { CartProduct } from "./CartProduct";
import { EmptyCart } from "./EmptyCart";

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, goCheck }) => {
  const { state } = useContext(CartContext);
  

  let bodyContent = (
    <div className="flex flex-col gap-8">
      {state.cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="text-center">
            <h2 className="font-bold text-2xl">Check your products</h2>
            <p className="font-light text-neutral-500 mt-2">
              My products{" "}
              <span className="inline-block h-6 w-6 text-center bg-red-400 rounded-full text-white">
                {state.cart.length}
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-3 max-h-[35vh] overflow-y-auto">
            <div className="flow-root">
              <ul className="my-6 divide-y divide-gray-200">
                {state.cart.map((item) => (
                  <CartProduct key={item.id} {...item} />
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-lg font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${state.total}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
          </div>
        </>
      )}
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="My Cart"
      isCheck={true}
      body={bodyContent}
      goCheck={goCheck}
    />
  );
};
