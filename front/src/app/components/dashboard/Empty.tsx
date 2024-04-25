import Link from 'next/link'
import React from 'react'
import { FaBoxOpen } from 'react-icons/fa'

export const Empty = () => {
  return (
    <div className='w-full border-gray-100 shadow-lg rounded-md flex flex-col justify-center items-center gap-2'>
      <FaBoxOpen size={50}/>
      <p className='text-lg font-semibold'>You have no orders created</p>
      <Link href={'/products'} className='bg-slate-800 py-2 px-4 rounded-sm hover:bg-slate-900 transition text-white'>Go to Shopping</Link>
    </div>
  )
}
