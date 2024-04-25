'use client'


import Link from "next/link"
import { IoIosDesktop } from "react-icons/io"





export const Logo = () => {
  return (
    
      <Link href={'/home'}
      className="flex flex-row justify-center items-center gap-1 relative"
      >
        <p className="font-bold text-2xl">MYPOINT</p>
        <IoIosDesktop size={20} 
          className="absolute bottom-6 left-11"
        />
      </Link>
    
    
  )
}
