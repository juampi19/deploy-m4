
import { Orders } from "./interfaces";

import { OrderProductCard } from "./OrderProductCard";
import { useId } from "react";

export const OrderListCard: React.FC<Orders> = (item) => {
  const id = useId();
  console.log(item)

  return (
    <div className="py-4 px-2 flex flex-col">
      <div className="flex justify-between items-center flex-1 flex-wrap">
        <h2 className="text-xl py-2">Order: #{item.id}</h2>
        <p>Date: {item.date.toString()}</p>
      </div>

      <div className="flex flex-col gap-3 max-h-[25vh] overflow-y-auto overflow-x-auto">
        {item.products.map((product) => (
          <OrderProductCard key={id+Date.now()} {...product} />
        ))}
      </div>
    </div>
  );
};
