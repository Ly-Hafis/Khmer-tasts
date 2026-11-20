import React from 'react'
import { useCart } from '../../context/CartContext'
import { Link } from "react-router-dom";

const Card = () => {
  const {
    cart,
    increaseQty,
    decreaseQty,
    remove,
    Totalprice
  } = useCart();

  return (
    <div className="min-h-screen bg-[#FFF9F0] py-10 px-4 md:px-10">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3B2418]">
          🛒 My Cart
        </h1>
        <p className="text-gray-500 mt-2">
          Review your orders and check out!
        </p>
        <div className="w-full h-[2px] bg-[#F1E5D5] mt-5"></div>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-7xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-[#3B2418]">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mt-2">
            Add some delicious food to your cart!
          </p>
          <Link
            to="/"
            className="inline-block mt-6 bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600"
          >
            Explore Menu
          </Link>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto">

          {/* Food Items */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#F1E5D5] rounded-2xl p-4 md:p-5 shadow-sm flex flex-col sm:flex-row items-center gap-4"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 md:w-32 md:h-24 object-cover rounded-xl"
                />

                {/* Food Information */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg md:text-xl font-bold text-[#3B2418]">
                    {item.name}
                  </h3>

                  <p className="text-red-500 font-bold text-lg">
                    ${item.price}
                  </p>

                  <p className="text-gray-500 text-sm">
                    Quantity: {item.quantity} 
                    {" | "} Subtotal: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-4 bg-[#FFF7E8] border border-amber-100 rounded-full px-3 py-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-9 h-9 rounded-full bg-white text-amber-600 font-bold shadow hover:bg-amber-100"
                    >
                      -
                    </button>

                    <span className="font-bold text-[#3B2418]">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-9 h-9 rounded-full bg-amber-400 text-white font-bold shadow hover:bg-amber-500"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <p className="text-red-500 font-bold text-xl min-w-16">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  {/* Delete */}
                  <button
                    onClick={() => remove(item.id)}
                    className="w-10 h-10 rounded-full bg-red-500 text-white hover:bg-red-600"
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))}
          </div>
           {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-8">

            <Link
              to="/"
              className="bg-[#FFF0DC] text-[#633817] px-7 py-4 rounded-full font-bold hover:bg-amber-200 transition"
            >
              ← Continue Shopping
            </Link>

            {/* Order Summary */}
            <div className="w-full md:w-[380px] bg-white border border-[#F1E5D5] rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-bold text-[#3B2418]">
                  Total:
                </h2>

                <p className="text-3xl font-bold text-red-500">
                  ${Totalprice.toFixed(2)}
                </p>
              </div>

              <Link
                to="/checkout"
                className="block text-center w-full bg-amber-500 text-white py-4 rounded-full font-bold text-lg hover:bg-amber-600 transition shadow-md"
              >
                🛒 Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Card;
