import { ProductButton } from "@/app/components/buttons/ProductButton";
import type { ProductsProps } from "@/app/components/products/types";
import { ProductImages } from "@/app/helpers/productImages";
import { Metadata } from "next";
import Image from "next/image";
import NotFound from "./not-found";

interface Props {
  params: {slug : number}
}


//generar metadata dinamica
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProduct(Number(params.slug))

  return {
    title: `${product?.id!} - ${product?.name!}`,
    description: `${product?.description}`
  }
}


const getProduct = async (id: number): Promise<ProductsProps | undefined > => {
  try {
    const products: ProductsProps[] = await fetch(
      `${process.env.BACKURL}/products`,
      {
        // cache: "force-cache",
        next: {
          revalidate: 60 * 60 * 30 * 6,
        },
      }
    ).then((res) => res.json());

    const product = products.filter((item) => {
      if (item.id === id) {
        return item;
      }
    });

    return product[0];
  } catch (error) {
    NotFound();
  }
};


export default async function ProductPage({ params }: Props) {
  const product = await getProduct(Number(params.slug));

 if(!product?.id) {
    return NotFound()
 }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 p-4 mt-5">
      <div className="p-5 col-span-3">
        <Image
          src={
            ProductImages[`${product?.id!}`]
          }
          alt={product?.description!}
          height={1000}
          width={1000}
          loading="lazy"
          className="w-full h-full md:max-h-fit md:max-w-fit object-fill shadow-md rounded"
        />
      </div>

      <div className="px-10 py-24 lg:max-w-2xl col-span-2">
        <p className="text-red-300 font-bold text-xs">MYPOINT PRODUCT</p>
        <h1 className="text-4xl font-semibold">{product?.name!}</h1>

        <div className="mt-8">
          <p className="text-gray-800 text-3xl font-bold">${product?.price!}</p>
          <p className="text-gray-400 text-xl mt-1">
            {" "}
            <span className="text-sm ml-1">Tax included</span>
            <span></span>
          </p>
        </div>

        <ProductButton 
          {...product!}
        />

        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-800">Product Description</h3>
          <p className="text-gray-500 text-pretty mt-5 text-sm">
            {product?.description!}
          </p>
        </div>
      </div>
    </div>
  );
}
