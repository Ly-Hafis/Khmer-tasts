import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/Image/customer_Logo.jpg";

function Navbar() {
    const {
        cart,
        increaseQty,
        decreaseQty,
        remove
    } = useCart();
    const [profileOpen, setProfileOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const cartItems = cart;
    const navigate = useNavigate();



    const navItems = [
        { name: "Home", to: "/" },
        { name: "Menu", to: "/menu" },
        { name: "About Us", to: "/about" },
        { name: "Contact", to: "/contact" },
    ];



    // បូកសរុបចំនួនម្ហូបទាំងអស់ (1, 2, 3...)
    const cartCount = cartItems.reduce((total, item) => total + Number(item.quantity || 0), 0);

    // គណនាលុយសរុប
    const totalPrice = cartItems.reduce((total, item) =>
        total + Number(item.price || 0) * Number(item.quantity || 0), 0);

    // បន្ថែម ឬ បន្ថយចំនួនក្នុងកន្ត្រក
    const updateQuantity = (index, amount) => {
        const item = cartItems[index];

        if (!item) return;

        if (amount === 1) {
            increaseQty(item.id);
        } else {
            if (item.quantity <= 1) {
                remove(item.id);
            } else {
                decreaseQty(item.id);
            }
        }
    };

    // លុបម្ហូបចេញពីកន្ត្រក
    const removeItem = (index) => {
        const item = cartItems[index];

        if (item) {
            remove(item.id);
        }
    };

    const handleGoTo = (path) => {
        navigate(path);
        setMobileOpen(false);
        setProfileOpen(false);
        setCartOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <nav className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white shadow-sm">
                <div className="mx-auto flex h-[85px] max-w-7xl items-center justify-between px-5 md:px-8">
                    {/* LOGO */}
                    <button
                        onClick={() => handleGoTo("/")}
                        className="flex cursor-pointer items-center gap-2"
                    >
                        <img
                            src={logo}
                            alt="KhmerFood Logo"
                            className="h-16 w-16 object-contain"
                        />
                        <span className="text-3xl font-black tracking-tight text-black">
                            Khmer<span className="text-[#ef7118]">Food</span>
                        </span>
                    </button>

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.to === "/"}
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                className={({ isActive }) =>
                                    `text-base font-semibold transition duration-200 ${isActive
                                        ? "text-orange-600"
                                        : "text-[#172033] hover:text-orange-600"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* RIGHT ACTIONS */}
                    <div className="hidden items-center gap-5 md:flex">
                        {/* CART BUTTON */}
                        <button
                            onClick={() => setCartOpen(true)}
                            className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-[#172033] transition hover:bg-orange-100 hover:text-orange-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 7h12l1 14H5L6 7Z" />
                                <path d="M9 7a3 3 0 0 1 6 0" />
                            </svg>

                            {cartCount > 0 && (
                                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#E60012] px-1 text-xs font-bold text-white">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* PROFILE */}
                        <div className="relative">
                            <button
                                onClick={() => setProfileOpen(!profileOpen)}
                                className="flex h-[50px] cursor-pointer items-center gap-3 rounded-xl border border-gray-200 px-4 transition hover:border-orange-400"
                            >
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1F5F9] text-[#475569]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="8" r="4" />
                                        <path d="M5 21a7 7 0 0 1 14 0" />
                                    </svg>
                                </span>

                                <span className="font-semibold text-[#172033]">Profile</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className={`transition ${profileOpen ? "rotate-180" : ""}`}
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>

                            {profileOpen && (
                                <div className="absolute right-0 top-14 w-52 rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
                                    <button
                                        onClick={() => handleGoTo("/login")}
                                        className="w-full cursor-pointer rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-amber-600"
                                    >
                                        Login
                                    </button>
                                    <button
                                        onClick={() => handleGoTo("/register")}
                                        className="w-full cursor-pointer rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-amber-600"
                                    >
                                        Register
                                    </button>
                                    <div className="my-1.5 border-t border-gray-100" />
                                    <button
                                        onClick={() => setProfileOpen(false)}
                                        className="w-full cursor-pointer rounded-lg px-3 py-2 text-left text-sm text-gray-500 transition hover:bg-gray-50 hover:text-amber-600"
                                    >
                                        Close Profile
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* MOBILE BUTTONS */}
                    <div className="flex items-center gap-3 md:hidden">
                        <button
                            onClick={() => setCartOpen(true)}
                            className="relative flex h-10 w-10 cursor-pointer items-center justify-center text-[#172033]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <path d="M6 7h12l1 14H5L6 7Z" />
                                <path d="M9 7a3 3 0 0 1 6 0" />
                            </svg>

                            {cartCount > 0 && (
                                <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#E60012] px-1 text-xs font-bold text-white">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-[#172033] hover:bg-gray-100"
                        >
                            {mobileOpen ? (
                                <span className="text-2xl">✕</span>
                            ) : (
                                <span className="text-2xl">☰</span>
                            )}
                        </button>
                    </div>
                </div>

                {/* MOBILE NAVIGATION */}
                {mobileOpen && (
                    <div className="border-t border-gray-100 bg-white px-6 py-5 shadow-lg md:hidden">
                        <div className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    end={item.to === "/"}
                                    onClick={() => {
                                        setMobileOpen(false);
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                                    className={({ isActive }) =>
                                        `rounded-lg px-4 py-3 font-semibold transition ${isActive
                                            ? "bg-red-50 text-[#E60012]"
                                            : "text-[#172033] hover:bg-gray-50 hover:text-[#E60012]"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}

                            <button
                                onClick={() => setProfileOpen(!profileOpen)}
                                className="flex items-center justify-between rounded-lg px-4 py-3 font-semibold text-[#172033] hover:bg-gray-50"
                            >
                                Profile
                                <span>{profileOpen ? "▲" : "▼"}</span>
                            </button>

                            {profileOpen && (
                                <div className="flex flex-col gap-1 rounded-lg bg-gray-50 p-2 text-sm text-gray-700">
                                    <button
                                        onClick={() => handleGoTo("/login")}
                                        className="rounded-lg px-3 py-2 text-left hover:bg-white hover:text-[#E60012]"
                                    >
                                        Login
                                    </button>
                                    <button
                                        onClick={() => handleGoTo("/register")}
                                        className="rounded-lg px-3 py-2 text-left hover:bg-white hover:text-[#E60012]"
                                    >
                                        Register
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>

            {/* SLIDE-OVER CART DRAWER (លោតចេញពេលចុចលើកន្ត្រក) */}
            {cartOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    {/* ផ្ទៃខ្មៅស្រអាប់ខាងក្រោយ (ចុចលើវាដើម្បីបិទ) */}
                    <div
                        onClick={() => setCartOpen(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
                    />

                    {/* ប្រអប់កន្ត្រកខាងស្តាំ */}
                    <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
                            <h2 className="text-xl font-black text-[#172033]">
                                Your Cart ({cartCount})
                            </h2>
                            <button
                                onClick={() => setCartOpen(false)}
                                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-[#E60012]"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Cart Items List */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {cartItems.length === 0 ? (
                                <div className="flex h-full flex-col items-center justify-center text-center">
                                    <span className="text-5xl">🛒</span>
                                    <p className="mt-4 text-lg font-bold text-[#172033]">
                                        Your cart is empty
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Add some delicious Khmer food to get started!
                                    </p>
                                    <button
                                        onClick={() => handleGoTo("/menu")}
                                        className="mt-6 cursor-pointer rounded-xl bg-[#E60012] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#C4000F]"
                                    >
                                        Browse Menu
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {cartItems.map((item, index) => {
                                        const itemPrice = Number(String(item.price).replace("$", "")) || 0;
                                        return (
                                            <div
                                                key={`${item.id}-${item.selectedSize}-${item.selectedSpicy}-${index}`}
                                                className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50/50 p-3"
                                            >
                                                <img
                                                    src={item.img || item.image}
                                                    alt={item.name}
                                                    className="h-20 w-20 rounded-xl object-cover"
                                                />
                                                <div className="flex flex-1 flex-col justify-between">
                                                    <div className="flex items-start justify-between gap-2">
                                                        <div>
                                                            <h3 className="line-clamp-1 font-bold text-[#172033]">
                                                                {item.name}
                                                            </h3>
                                                            {item.selectedSize && (
                                                                <p className="text-xs text-gray-500">
                                                                    Size: {item.selectedSize}
                                                                    {item.selectedSpicy ? ` • ${item.selectedSpicy}` : ""}
                                                                </p>
                                                            )}
                                                        </div>
                                                        <button
                                                            onClick={() => removeItem(index)}
                                                            className="cursor-pointer text-xs text-gray-400 hover:text-[#E60012]"
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>

                                                    <div className="flex items-center justify-between pt-2">
                                                        <span className="font-black text-[#E60012]">
                                                            ${(itemPrice * (item.quantity || 1)).toFixed(2)}
                                                        </span>

                                                        {/* ប៊ូតុង - 1 + */}
                                                        <div className="flex items-center rounded-lg border border-gray-200 bg-white">
                                                            <button
                                                                onClick={() => updateQuantity(index, -1)}
                                                                className="cursor-pointer px-2.5 py-1 text-sm font-bold text-gray-600 hover:text-[#E60012]"
                                                            >
                                                                -
                                                            </button>
                                                            <span className="px-2 text-xs font-bold text-[#172033]">
                                                                {item.quantity || 1}
                                                            </span>
                                                            <button
                                                                onClick={() => updateQuantity(index, 1)}
                                                                className="cursor-pointer px-2.5 py-1 text-sm font-bold text-gray-600 hover:text-[#E60012]"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Footer: Total & Checkout */}
                        {cartItems.length > 0 && (
                            <div className="border-t border-gray-100 bg-gray-50 p-6">
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="text-sm font-semibold text-gray-600">
                                        Subtotal
                                    </span>
                                    <span className="text-2xl font-black text-[#172033]">
                                        ${totalPrice.toFixed(2)}
                                    </span>
                                </div>

                                <div className="flex gap-3">
                                      <button
                                        onClick={() => handleGoTo("/card")}
                                        className="flex-1 cursor-pointer rounded-xl border border-gray-300 bg-white py-3 text-sm font-bold text-[#172033] transition hover:border-[#E60012] hover:text-[#E60012]"
                                    >
                                        View Cart
                                    </button>
                                    <button
                                        onClick={() => handleGoTo("/checkout")}
                                        className="flex-1 cursor-pointer rounded-xl bg-[#E60012] py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#C4000F]"
                                    >
                                        Checkout →
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;