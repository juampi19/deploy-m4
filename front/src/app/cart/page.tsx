import { Metadata } from "next";
import { OrderPage } from "../components/orders/OrderPage";



export const metadata: Metadata = {
  title: "MyPoint - Cart",
  description: "MyPoint cart see your products",
};

export default function CartPage() {
  

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <OrderPage />
    </div>
  );
}