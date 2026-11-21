import React from 'react'
import products from '../../data/products'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { Link } from "react-router-dom";

const FoodDetail = () => {
  const { addtoCart } = useCart();
  const { id } = useParams();
 

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [spicy, setSpicy] = useState("Not Spicy");
  const [size, setSize] = useState("Small");
  const [qty, setQty] = useState(1);

  // ពិនិត្យ Product
  if (!product) {
    return <h1>Food not found</h1>;
  }

  const selectSize = product.sizes.find(
    (item) => item.name === size
  );

  const Total = (product.price + (selectSize?.price || 0)) * qty;

  // Add to Cart
 const handleAddToCart = () => {
  const selectedProduct = {
    ...product,
    price: Number(product.price) + Number(selectSize?.price || 0),
    selectedSize: size,
    selectedSpicy: spicy,
  };

  addtoCart(selectedProduct, qty);

 
};
    return (
      <div className="min-h-screen w-full bg-orange-50 px-4 py-10 items-center">
        <Link
          to="/menu"
          className="bg-[#FFF0DC] text-[#633817] px-7 py-4 rounded-full font-bold hover:bg-amber-200 transition"
        >
          ← Continue Shopping
        </Link>

        <div className="min-h-screen w-full bg-orange-50 flex justify-center items-center px-4 py-10">

          {/* Main Card */}
          <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 md:p-8">

              {/* Food Image */}
              <div className="w-full">
                <div className="h-64 md:h-full min-h-[300px] overflow-hidden rounded-2xl">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Food Information */}
              <div className="flex flex-col gap-5">

                <div>
                  <span className="text-orange-500 text-sm font-semibold">
                    {product.category}
                  </span>

                  <h1 className="text-3xl font-bold text-gray-800 mt-2">
                    {product.name}
                  </h1>

                  <p className="text-2xl font-bold text-orange-600 mt-3">
                    ${product.price.toFixed(2)}
                  </p>

                  <p className="text-gray-500 text-sm mt-3 leading-6">
                    {product.description}
                  </p>
                </div>

                {/* Spicy Level */}
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">
                    🌶️ Spicy Level
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {["Not Spicy", "Mild", "Medium", "Hot"].map(
                      (level) => (
                        <button
                          key={level}
                          onClick={() => setSpicy(level)}
                          className={`px-4 py-2 rounded-full text-sm border transition ${spicy === level
                              ? "bg-orange-500 text-white border-orange-500"
                              : "bg-white text-gray-600 border-gray-200 hover:border-orange-400"
                            }`}
                        >
                          {level}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Food Size */}
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">
                    🍱 Choose Size
                  </h3>

                  <div className="grid grid-cols-3 gap-3">
                    {product.sizes.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => setSize(item.name)}
                        className={`py-3 rounded-xl border text-sm transition ${size === item.name
                            ? "bg-orange-500 text-white border-orange-500"
                            : "bg-white text-gray-600 border-gray-200 hover:border-orange-400"
                          }`}
                      >
                        <p className="font-bold">{item.name}</p>
                        <p className="text-xs mt-1">
                          +${item.price}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Ingredients */}
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">
                    🥬 Ingredients
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((item) => (
                      <span
                        key={item}
                        className="bg-orange-50 text-orange-700 px-3 py-2 rounded-full text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quantity and Total */}
                <div className="flex items-center justify-between bg-orange-50 p-4 rounded-2xl">

                  <div>
                    <h3 className="font-bold text-gray-800 text-sm mb-2">
                      Quantity
                    </h3>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          setQty(Math.max(1, qty - 1))
                        }
                        className="w-8 h-8 bg-white rounded-lg shadow text-orange-600 font-bold"
                      >
                        -
                      </button>

                      <span className="font-bold">{qty}</span>

                      <button
                        onClick={() => setQty(qty + 1)}
                        className="w-8 h-8 bg-orange-500 rounded-lg text-white font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      Total Price
                    </p>

                    <h2 className="text-2xl font-bold text-orange-600">
                      ${Total.toFixed(2)}
                    </h2>
                  </div>

                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  type="button"
                  className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition flex items-center justify-center gap-2 shadow-md"
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default FoodDetail;
