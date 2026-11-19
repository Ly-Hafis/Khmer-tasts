
import React, { useState } from "react";

function Navbar({
  activeView,
  setActiveView,
  cartCount = 0,
  onOpenCart,
}) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", view: "home" },
    { name: "Menu", view: "menu" },
    { name: "About Us", view: "about" },
    { name: "Contact", view: "contact" },
  ];

  const handleNavigation = (view) => {
    setActiveView(view);
    setMobileOpen(false);
    setProfileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">

      <div className="mx-auto flex h-[85px] max-w-7xl items-center justify-between px-5 md:px-8">

        {/* LOGO */}
        <button
          onClick={() => handleNavigation("home")}
          className="flex items-center gap-2"
        >
          <img
            src="c:\Users\MSI\Downloads\d09e8ab4-5055-41d7-bb68-d49f36280f87.png"
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
            <button
              key={item.view}
              onClick={() => handleNavigation(item.view)}
              className={`text-base font-semibold transition duration-200 ${activeView === item.view
                  ? "text-[#E60012]"
                  : "text-[#172033] hover:text-[#E60012]"
                }`}
            >
              {item.name}
            </button>
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
              className="flex h-[50px] items-center gap-3 border rounded-4 border-gray-200 px-4 transition hover:border-[#E60012]"
            >

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1F5F9] text-[#475569] ">
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

              <span className="font-semibold text-[#172033]">
                Profile
              </span>

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
              <div className="absolute right-0 top-14 w-52 rounded-xl border border-gray-100 bg-white p-3 shadow-xl">

                <p className="px-3 py-2 text-sm font-bold text-[#172033]">
                  My Account
                </p>

                <div className="my-2 border-t border-gray-100" />

                <button
                  onClick={() => setProfileOpen(false)}
                  className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-600 transition hover:bg-gray-50 hover:text-[#E60012]"
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
              <button
                key={item.view}
                onClick={() => handleNavigation(item.view)}
                className={`rounded-lg px-4 py-3 text-left font-semibold transition ${activeView === item.view
                    ? "bg-red-50 text-[#E60012]"
                    : "text-[#172033] hover:bg-gray-50 hover:text-[#E60012]"
                  }`}
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center justify-between rounded-lg px-4 py-3 font-semibold text-[#172033] hover:bg-gray-50"
            >
              Profile
              <span>{profileOpen ? "▲" : "▼"}</span>
            </button>

            {profileOpen && (
              <div className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-600">
                My Account
              </div>
            )}

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;
