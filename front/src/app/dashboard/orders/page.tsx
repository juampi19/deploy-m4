import { AuthRoute } from "@/app/components/clientonly/AuthRoute";
import { OrderList } from "@/app/components/dashboard/orderList/OrderList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyPoint - Order list",
  description: "MyPoint - my dashboard",
};

export default function OrderListPage() {
  return (
    <AuthRoute>
      <div className="h-screen bg-gray-200">
        <h1 className="text-center py-5 text-2xl font-semibold">My Orders</h1>

        <OrderList />
      </div>
    </AuthRoute>
  );
}
