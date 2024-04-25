import Link from 'next/link'
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'

export const EmptyPage = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center items-center flex-col bg-white shadow-md rounded px-2 py-20 gap-5 '>
        <FiShoppingCart size={90}/>

        <h1 className='text-2xl'>Your shopping cart is empty.</h1>

        <Link href={'/products'} className='flex flex-1 gap-2 items-center text-white bg-slate-800 hover:bg-slate-900 transition px-4 py-2 rounded-md text-lg'>
          <FaShoppingBag />
          Go shopping!
        </Link>
      </div>
    </div>
  )
}
