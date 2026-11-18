import React, { useState } from "react";

const defaultNavItems = [
  { name: "Home", view: "home" },
  { name: "Menu", view: "menu" },
  { name: "About Us", view: "about" },
  { name: "Contact", view: "contact" },
];

const Navbar = ({
  navItems = defaultNavItems,
  activeView,
  setActiveView,
  cartCount = 0,
  onOpenCart,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleNavigate = (view) => {
    if (setActiveView) setActiveView(view);
    setProfileOpen(false);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-40 h-20 w-full bg-white shadow-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* Logo + Brand Name */}
        <button
          onClick={() => handleNavigate("home")}
          className="flex items-center gap-2 text-left"
        >
          {/* ដាក់ <img> base64 ដើមរបស់អ្នកនៅទីនេះ */}
          <h1 className="text-2xl font-bold tracking-tight text-black">
            Khmer<span className="text-orange-500">Food</span>
          </h1>
        </button>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigate(item.view)}
              className={`font-medium transition hover:text-orange-500 ${
                activeView === item.view
                  ? "border-b-2 border-orange-500 pb-1 font-bold text-orange-500"
                  : "text-gray-800"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right Actions: Cart + Profile Dropdown */}
        <div className="flex items-center gap-4">
          {/* Shopping Bag */}
          <button
            onClick={onOpenCart}
            className="relative p-1.5 text-slate-700 transition hover:text-orange-500"
            aria-label="Shopping Cart"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[11px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile Pill & Dropdown Card */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2.5 rounded-full border border-gray-200 bg-white py-1.5 pl-2 pr-3.5 text-sm font-medium text-slate-700 transition hover:bg-gray-50"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span>Profile</span>
              <svg
                className={`h-4 w-4 text-gray-400 transition-transform ${
                  profileOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-3 w-72 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      User Profile
                    </h3>
                    <p className="text-xs text-gray-500">Welcome to FoodZone</p>
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-gray-500">
                  Sign in to your account to view live orders, save delivery
                  addresses, and manage your profile.
                </p>

                <div className="mt-4 flex flex-col gap-2.5">
                  <button
                    onClick={() => handleNavigate("login")}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                  >
                    <span>↪</span> Log In / Sign In
                  </button>

                  <button
                    onClick={() => handleNavigate("register")}
                    className="w-full rounded-xl border border-gray-200 bg-white py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
                  >
                    Create New Account
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 bg-white px-6 py-4 shadow-md md:hidden">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigate(item.view)}
              className="text-left font-medium text-gray-800 hover:text-orange-500"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
