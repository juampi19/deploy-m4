'use client'

import { IconType } from "react-icons";
import type { ButtonProps } from "./types.";



export const Buttons: React.FC<ButtonProps> = ({label, onClick, isCheck}) => {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-lg hover:bg-slate-900 transition w-full ${isCheck ? 'bg-slate-800' : 'bg-rose-500'} text-white border-2 py-3 text-md font-semibold`}
    >
      {label}
    </button>
  )
}
