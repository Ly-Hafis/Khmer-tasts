import React from "react";

const Footer = ({ setActiveView }) => {
  const handleNavigate = (view) => {
    if (setActiveView) {
      setActiveView(view);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const customerLinks = [
    { name: "Home", view: "home" },
    { name: "Our Menu", view: "menu" },
    { name: "Store Branches", view: "locations" },
    { name: "About Our Story", view: "about" },
    { name: "Contact Us", view: "contact" },
  ];

  return (
    <footer className="w-full bg-[#0f172a] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        {/* Brand */}
        <div>
          <button
            onClick={() => handleNavigate("home")}
            className="mb-5 text-left text-xl font-extrabold"
          >
            Khmer<span className="text-[#ff9f0a]">Food</span>.
          </button>

          <p className="max-w-xs text-[13px] leading-[1.7] text-slate-400">
            Delicious food, fresh ingredients and unforgettable experiences.
            Enjoy your favorite meals with FoodZone.
          </p>

          <p className="mt-5 text-[13px] text-slate-300">
            <span className="mr-2 text-[#ff9f0a]">☎</span>
            Hotline: 012 345 678 / 012 888 999
          </p>
        </div>

        {/* Customer Links */}
        <div>
          <h3 className="mb-4 text-[13px] font-bold uppercase">
            Customer Links
          </h3>

          <ul className="space-y-2.5 text-[13px]">
            {customerLinks.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavigate(item.view)}
                  className="text-left text-slate-400 transition-colors hover:text-[#ff9f0a]"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="mb-4 text-[13px] font-bold uppercase">
            Opening Hours
          </h3>

          <ul className="space-y-2.5 text-[13px]">
            <li className="flex justify-between gap-3">
              <span className="text-slate-400">Monday - Friday</span>
              <span className="whitespace-nowrap text-slate-400">
                9 AM - 9 PM
              </span>
            </li>
            <li className="flex justify-between gap-3">
              <span className="text-slate-400">Saturday</span>
              <span className="whitespace-nowrap text-slate-400">
                9 AM - 10 PM
              </span>
            </li>
            <li className="flex justify-between gap-3">
              <span className="text-slate-400">Sunday</span>
              <span className="whitespace-nowrap text-slate-400">
                9 AM - 8 PM
              </span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-[13px] font-bold uppercase">Contact Us</h3>

          <ul className="space-y-3 text-[13px]">
            <li className="flex items-start gap-3">
              <span className="text-[#ff9f0a]">📍</span>
              <span className="text-slate-400">
                St 51 corner St 302, BKK1, Phnom Penh, Cambodia
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#ff9f0a]">☎</span>
              <span className="text-slate-400">012 345 678 / 012 888 999</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#ff9f0a]">✉</span>
              <span className="text-slate-400">support@foodzone.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-7 text-center">
          <p className="text-[12px] text-slate-500">
            © {new Date().getFullYear()} FoodZone. All rights reserved. Powered
            by React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
