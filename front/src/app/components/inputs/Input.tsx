import { InputProps } from "./types"


export const Input: React.FC<InputProps> = ({ label, id, type }) => {
  return (
    <div className="w-full relative">

      <input 
        id={id}
        type={type} 
        placeholder=" "
        className="peer w-full px-4 py-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition pl-4 border-neutral-500"
      />

      <label 
        htmlFor={id}
        className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>

    </div>
  )
}
