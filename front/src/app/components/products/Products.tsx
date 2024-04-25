
import { ProductsProps } from "./types";


import { ProductCard } from "./ProductCard";

async function getData(): Promise<ProductsProps[]> {
  const res = await fetch(`${process.env.BACKURL}/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const Products = async () => {
  const data = await getData();
  

  return (
    <section className="pt-5 pb-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {data.map((item) => (
        <ProductCard 
          key={item.id}
          {...item}
        />
      ))}
    </div>
    </section>
  );
};
