import React from "react";
import { useCart } from "../../context/CartContext";

const MyOrders = () => {
  const { orders } = useCart();

  return (
    <div className="min-h-screen bg-[#FFF9F0] p-6 md:p-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-[#3B2418]">
          My Orders
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Track your food orders
        </p>

        {orders.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="text-6xl">🍽️</div>
            <h2 className="text-xl font-bold mt-4">
              No Orders Yet
            </h2>
            <p className="text-gray-500 mt-2">
              You haven't placed any orders yet.
            </p>
          </div>
        ) : (

          <div className="space-y-5">
            {orders.map((order) => (

              <div
                key={order.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100"
              >

                <div className="flex justify-between flex-wrap gap-3 border-b pb-4">

                  <div>
                    <h2 className="font-bold text-lg">
                      Order #{order.id}
                    </h2>

                    <p className="text-sm text-gray-500">
                      {order.date}
                    </p>
                  </div>

                  <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-bold">
                    {order.status}
                  </span>

                </div>

                <div className="py-4 space-y-3">
                  {order.items.map((item) => (

                    <div
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <div>
                        <p className="font-semibold">
                          {item.name}
                        </p>

                        <p className="text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                      </div>

                      <p className="font-bold text-red-500">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>

                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">

                  <p>
                    Customer: {order.customer.name}
                  </p>

                  <p>
                    Phone: {order.customer.phone}
                  </p>

                  <p>
                    Delivery: {order.customer.deliveryType}
                  </p>

                  <div className="flex justify-between font-bold text-xl pt-3">
                    <span>Total</span>

                    <span className="text-red-500">
                      ${order.total.toFixed(2)}
                    </span>
                  </div>

                </div>

              </div>

            ))}
          </div>

        )}

      </div>
    </div>
  );
};

export default MyOrders;