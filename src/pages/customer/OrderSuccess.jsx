import React from "react";
import { useLocation, Link } from "react-router-dom";

const OrderSuccess = () => {
  const { state } = useLocation();
  const order = state?.order;

  return (
    <div className="min-h-screen bg-[#FFF9F0] flex items-center justify-center p-5">

      <div className="bg-white max-w-lg w-full p-8 rounded-3xl shadow-lg text-center">

        <div className="text-6xl mb-4">🎉</div>

        <h1 className="text-3xl font-bold text-green-600">
          Order Successful!
        </h1>

        <p className="text-gray-500 mt-3">
          Thank you for ordering from Khmer Restaurant.
        </p>

        {order && (
          <div className="bg-orange-50 p-5 rounded-xl mt-6 text-left space-y-2">

            <p>
              <b>Order ID:</b> {order.id}
            </p>

            <p>
              <b>Name:</b> {order.customer.name}
            </p>

            <p>
              <b>Phone:</b> {order.customer.phone}
            </p>

            <p>
              <b>Payment:</b> {order.customer.payment}
            </p>

            <p>
              <b>Status:</b> {order.status}
            </p>

            <div className="border-t pt-3">
              <p className="text-xl font-bold text-red-500">
                Total: ${order.total.toFixed(2)}
              </p>
            </div>

          </div>
        )}

        <Link
          to="/my-orders"
          className="block bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl mt-6 font-bold"
        >
          View My Orders
        </Link>

        <Link
          to="/"
          className="block mt-4 text-amber-700 font-semibold"
        >
          Back to Menu
        </Link>

      </div>
    </div>
  );
};

export default OrderSuccess;