import React, { useState } from 'react';
import { Link } from "react-router-dom";

const FootCard = ({ product }) => {
  const [qty, setQty] = useState(1);

  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 p-3 flex flex-col justify-between">
      <div>
        {/* Card Image */}
        <div className="relative w-full h-44 bg-gray-100 rounded-xl overflow-hidden">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* Food Information */}
        <div className="mt-3 px-1">
          <h3 className="font-bold text-base lg:text-lg text-gray-900 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {/* Bottom Section: Price, Quantity & Action Buttons */}
      <div className="mt-4 px-1">
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg sm:text-xl font-extrabold text-gray-900">
            {product.price}$
          </span>

          {/* Quantity Stepper */}
          <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
            <button
              type="button"
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              className="w-7 h-7 flex items-center justify-center text-gray-600 hover:text-orange-600 font-bold"
            >
              -
            </button>
            <span className="w-7 text-center text-xs sm:text-sm font-semibold text-gray-800">
              {qty}
            </span>
            <button
              type="button"
              onClick={() => setQty(qty + 1)}
              className="w-7 h-7 flex items-center justify-center text-gray-600 hover:text-orange-600 font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <Link
            to={`/food/${product.id}`}
            className="w-full py-2 px-2 bg-white border border-orange-400 text-orange-600 text-xs sm:text-sm font-semibold rounded-lg hover:bg-red-50 transition flex items-center justify-center"
          >
            View
          </Link>

          <button
            type="button"
            // onClick={() => alert(`Added ${qty}x ${product.name} to cart!`)}
            className="w-full py-2 px-2 bg-orange-600 text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-orange-700 transition flex items-center justify-center gap-1.5 shadow-sm"
          >
            {/* <svg
              xmlns="http://w3.org"
              className="h-4 w-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg> */}
            <span className="truncate">Add to Cart</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default FootCard;
