'use client'

import { BiSearch } from "react-icons/bi"

export const SearchInput = () => {
  return (
    <label className="border-[1px] w-full sm:w-[300px] md:w-[450px] lg:w-[450px] xl:w-[350px] py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer" htmlFor="search">

      <div className="flex flex-row items-center justify-between pl-6 pr-2 text-gray-600 text-sm gap-3">
        <input type="text"
          className="w-full focus:outline-none"
          placeholder="Find products, computers, accesories and more..."
          id="search"
        />

          <div className="p-2 bg-slate-900 rounded-full text-white">
            <BiSearch size={18} />
          </div>
      </div>

      
    </label>
  )
}
