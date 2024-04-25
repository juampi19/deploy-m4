"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { ModalProps } from "./types";
import { Buttons } from "../buttons/Buttons";
import { CartContext } from "@/app/context/cart/cartContext";
import Link from "next/link";

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  body,
  isCheck,
  goCheck,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  const { dispatch, state } = useContext(CartContext);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  const removeCart = () => {
    dispatch({ type: "clear-cart" });
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full h-full">
          <div className="w-full absolute md:top-12 md:right-2 md:w-4/6 lg:3/6 xl:w-2/5 my-6 h-full lg:h-auto md:h-auto">
            <div
              className={`duration-300 h-full ${
                showModal ? "translate-y-0" : "translate-y-full"
              } ${showModal ? "opacity-100" : "opacity-0"}`}
            >
              {/**Header */}
              <div className="h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                  <button
                    className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                    onClick={handleClose}
                  >
                    <IoMdClose />
                  </button>

                  <div className="text-lg font-semibold">{title}</div>
                </div>

                {/**body */}
                <div className="relative p-6 flex-auto">{body}</div>

                {/**footer */}
                <div className="p-6 flex flex-col gap-3">
                  {state.cart.length === 0 ? (
                    <Link href={"/products"} className="text-center bg-slate-800 py-3 rounded-md text-white font-semibold hover:bg-slate-900 transition">Go to buy</Link>
                  ) : (
                    <>
                      <Buttons label="Go to cart" onClick={goCheck!} isCheck />

                      <button
                        type="button"
                        className="w-full px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-bold rounded"
                        onClick={removeCart}
                      >
                        Remove cart
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
