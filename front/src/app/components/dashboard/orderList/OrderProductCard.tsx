import Image from "next/image";
import type { Product } from "./interfaces";
import { getCategoryName } from "@/app/helpers/category";

export const OrderProductCard: React.FC<Product> = ({
  categoryId,
  name,
  price,
  description
}) => {
  return (
    <div
      className="bg-gray-100 rounded shadow-md text-gray-400 px-2 py-4 flex flex-col justify-between w-full sm:items-center sm:flex-row gap-2 "
    >
      <div className="flex items-center gap-2">
        <Image
          src={
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={description}
          width={500}
          height={500}
          className="w-40 rounded-sm object-cover"
        />

        <div className="font-semibold">
          <p>{name}</p>
          <p>{getCategoryName(categoryId)}</p>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold">${price}</p>
      </div>

      <div>
        <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-4 py-1 rounded dark:bg-green-900 dark:text-green-300">
          approved
        </span>
      </div>
    </div>
  );
};
