import React from "react";

function About({ setActiveView }) {
  return (
    <section className="bg-[#fffaf0] px-6 py-16 text-[#25221e]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <span className="font-bold uppercase tracking-[4px] text-orange-500">
            About Khmer Food
          </span>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            We Make Your
            <span className="block text-[#e99b16]">Food Experience</span>
            Special
          </h2>
          <p className="mt-6 leading-7 text-gray-600">
            At FoodZone, we believe good food brings people together. We prepare
            delicious meals with fresh ingredients, care, and passion.
          </p>
          <p className="mt-4 leading-7 text-gray-600">
            From delicious soups to tasty rice dishes and sweet desserts, we
            have something special for everyone.
          </p>
          <button
            onClick={() => setActiveView("menu")}
            className="mt-8 rounded-full bg-[#e99b16] px-8 py-4 font-bold text-white shadow-lg transition hover:bg-orange-600"
          >
            Order Now →
          </button>
        </div>

        <div className="relative">
          <div className="rounded-[45px] bg-[#f5c957] p-5 md:p-8">
            <img
              src="https://unsplash.com"
              alt="FoodZone special crispy chicken"
              className="h-[380px] w-full rounded-[35px] object-cover shadow-xl"
            />
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white p-5 shadow-xl">
            <p className="text-2xl font-black text-orange-500">100%</p>
            <p className="text-sm font-semibold">Fresh Ingredients</p>
          </div>
        </div>
      </div>

      {/* តួលេខបង្ហាញពីហាង */}
      <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-6 rounded-3xl bg-[#0f172a] p-8 text-center text-white md:grid-cols-4">
        <div>
          <p className="text-3xl font-black text-[#ff9f0a]">4</p>
          <p className="mt-1 text-xs text-slate-300">PHNOM PENH BRANCHES</p>
        </div>
        <div>
          <p className="text-3xl font-black text-[#ff9f0a]">20 min</p>
          <p className="mt-1 text-xs text-slate-300">AVERAGE PREP & DISPATCH</p>
        </div>
        <div>
          <p className="text-3xl font-black text-[#ff9f0a]">50K+</p>
          <p className="mt-1 text-xs text-slate-300">SATISFIED FOODIES</p>
        </div>
        <div>
          <p className="text-3xl font-black text-[#ff9f0a]">4.9 ★</p>
          <p className="mt-1 text-xs text-slate-300">CUSTOMER RATING</p>
        </div>
      </div>
    </section>
  );
}

export default About;
