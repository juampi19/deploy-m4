import { Metadata } from "next";
import { Container } from "../components/container/Container";
import { Products } from "../components/products/Products";


export const metadata: Metadata = {
  title: "MyPoint - Products",
  description: "MyPoint where you can obtain the best products to the best price",
};



export default async function ProductsPage() {
  return (
    <Container>
      <h1 className="text-4xl font-semibold py-3">The best products</h1>
      <Products />
    </Container>
  );
}