import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar({ cartCount = 0, onOpenCart }) {
    const [profileOpen, setProfileOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    const navItems = [
        { name: "Home", to: "/" },
        { name: "Menu", to: "/menu" },
        { name: "About Us", to: "/about" },
        { name: "Contact", to: "/contact" },
    ];

    const handleGoTo = (path) => {
        navigate(path);
        setMobileOpen(false);
        setProfileOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
            <div className="mx-auto flex h-[85px] max-w-7xl items-center justify-between px-5 md:px-8">
                {/* LOGO */}
                <button
                    onClick={() => handleGoTo("/")}
                    className="flex items-center gap-2"
                >
                    <img
                        src=""
                        alt="KhmerFood Logo"
                        className="h-16 w-16 object-contain"
                    />
                    <span className="text-3xl font-black tracking-tight text-black">
                        Khmer<span className="text-[#FF6B00]">Food</span>
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
                                    ? "text-[#E60012]"
                                    : "text-[#172033] hover:text-[#E60012]"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                {/* RIGHT ACTIONS */}
                <div className="hidden items-center gap-5 md:flex">
                    {/* CART */}
                    <button
                        onClick={onOpenCart}
                        className="relative flex h-11 w-11 items-center justify-center rounded-full text-[#172033] transition hover:bg-gray-100 hover:text-[#E60012]"
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
                            className="flex h-[50px] items-center gap-3 rounded-xl border border-gray-200 px-4 transition hover:border-[#E60012]"
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
                                    className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-[#E60012]"
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => handleGoTo("/register")}
                                    className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-[#E60012]"
                                >
                                    Register
                                </button>
                                <div className="my-1.5 border-t border-gray-100" />
                                <button
                                    onClick={() => setProfileOpen(false)}
                                    className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-500 transition hover:bg-gray-50 hover:text-[#E60012]"
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
                        onClick={onOpenCart}
                        className="relative flex h-10 w-10 items-center justify-center text-[#172033]"
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
                        className="flex h-10 w-10 items-center justify-center rounded-lg text-[#172033] hover:bg-gray-100"
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
    );
}

export default Navbar;