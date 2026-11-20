 import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    deliveryType: "Delivery",
    payment: "Cash on Delivery",
  });

  const Totalprice = cart.reduce(
    (total, item) => total+ item.price * item.quantity,
    0
  );

  const deliveryFee = form.deliveryType === "Delivery" ? 1.5 : 0;
  const total = Totalprice + deliveryFee;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    navigate("/order-success", {
      state: {
        customer: form,
        items: cart,
        subtotal:Totalprice,
        deliveryFee,
        total,
      },
    });
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF9F0]">
        <h2 className="text-2xl font-bold text-[#3B2418]">
          Your cart is empty!
        </h2>
        <button
          onClick={() => navigate("/menu")}
          className="mt-5 bg-amber-500 text-white px-6 py-3 rounded-xl"
        >
          Back to Menu
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0] py-10 px-4">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-[#3B2418] mb-2">
          Checkout
        </h1>
        <p className="text-gray-500 mb-8">
          Complete your order information
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >

          {/* Customer Information */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
            <h2 className="text-xl font-bold mb-6 text-[#3B2418]">
              Customer Information
            </h2>

            <div className="space-y-4">

              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full border rounded-xl p-3 outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter phone number"
                  className="w-full border rounded-xl p-3 outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Address
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required={form.deliveryType === "Delivery"}
                  placeholder="Enter your address"
                  className="w-full border rounded-xl p-3 outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Delivery Method
              </label>
                <select
                  name="deliveryType"
                  value={form.deliveryType}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                >
                  <option value="Delivery">Delivery</option>
                  <option value="Pickup">Pickup</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Payment Method
                </label>
                <select
                  name="payment"
                  value={form.payment}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                >
                  <option value="Cash on Delivery">
                    Cash on Delivery
                  </option>
                  <option value="ABA Pay (Demo)">
                    ABA Pay (Demo)
                  </option>
                </select>
              </div>

            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 h-fit">
            <h2 className="text-xl font-bold mb-6 text-[#3B2418]">
              Order Summary
            </h2>

            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div>
                    <h3 className="font-semibold text-[#3B2418]">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-bold text-red-500">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-3 mt-6 text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${Totalprice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t mt-5 pt-5 flex justify-between">
              <span className="text-xl font-bold">Total</span>
              <span className="text-2xl font-bold text-red-500">
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition"
            >
              Place Order
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;