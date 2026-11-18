import React from "react";

function Home({ setActiveView, goToMenuWithCategory, addToCart }) {
  const categories = [
    { name: "Soup", emoji: "🍲" },
    { name: "Rice", emoji: "🍚" },
    { name: "Dessert", emoji: "🍰" },
    { name: "Noodles", emoji: "🍜" },
    { name: "Drinks", emoji: "🥤" },
  ];

  const foods = [
    {
      name: "Delicious Soup",
      category: "Soup",
      tag: "Best Seller",
      stock: 25,
      price: "2.50",
      image: "https://unsplash.com",
    },
    {
      name: "Steamed Rice",
      category: "Rice",
      tag: "Popular",
      stock: 18,
      price: "1.50",
      image: "https://unsplash.com",
    },
    {
      name: "Chocolate Dessert",
      category: "Dessert",
      tag: "Special",
      stock: 12,
      price: "2.00",
      image: "https://unsplash.com",
    },
    {
      name: "Asian Noodles",
      category: "Noodles",
      tag: "Favorite",
      stock: 30,
      price: "2.00",
      image: "https://unsplash.com",
    },
    {
      name: "Fresh Orange Juice",
      category: "Drinks",
      tag: "Refreshing",
      stock: 40,
      price: "1.50",
      image: "https://unsplash.com",
    },
  ];

  const customers = [
    "https://unsplash.com",
    "https://unsplash.com",
    "https://unsplash.com",
  ];

  return (
    <div className="bg-[#fffaf0] text-[#25221e]">
      {/* HERO SECTION */}
      <section className="overflow-hidden bg-[#fff4dc]">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-6 py-8 md:grid-cols-2 md:py-12">
          <div className="relative z-10">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold text-orange-600">
              ✨ Fresh & Delicious Every Day
            </span>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Delicious Food
              <span className="block text-[#e99b16]">Made With Love</span>
            </h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-gray-600">
              Enjoy delicious meals made from fresh ingredients. Discover your
              favorite food and experience something special with FoodZone.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => goToMenuWithCategory("All")}
                className="rounded-full bg-[#e99b16] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-orange-600"
              >
                Order Food →
              </button>
              <button
                onClick={() => setActiveView("about")}
                className="rounded-full border border-orange-300 bg-white px-6 py-3 text-sm font-bold text-gray-800 transition hover:bg-orange-100"
              >
                About Us
              </button>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-3">
                {customers.map((person, index) => (
                  <img
                    key={index}
                    src={person}
                    className="h-8 w-8 rounded-full border-2 border-white object-cover"
                    alt="Customer"
                  />
                ))}
              </div>
              <div>
                <p className="text-xs font-bold">1,000+ Happy Customers</p>
                <p className="text-xs text-gray-500">
                  Delicious food, happy people ❤️
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-8 rounded-full bg-[#f8d98d] opacity-50 blur-3xl" />
            <img
              src="https://pinimg.com"
              alt="Delicious Khmer food"
              className="relative z-10 h-[300px] w-full rounded-[40%] object-cover shadow-xl md:h-[380px]"
            />
            <div className="absolute right-0 top-5 z-20 rounded-full bg-[#e99b16] px-5 py-3 text-sm font-bold text-white shadow-lg">
              20% OFF
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-b border-orange-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-6 py-8">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => goToMenuWithCategory(category.name)}
              className="flex items-center gap-3 transition hover:-translate-y-1"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff4dc] text-3xl">
                {category.emoji}
              </span>
              <span className="font-bold">{category.name}</span>
            </button>
          ))}

          <button
            onClick={() => goToMenuWithCategory("All")}
            className="rounded-full bg-[#e99b16] px-7 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            View All →
          </button>
        </div>
      </section>

      {/* POPULAR FOOD */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="font-bold uppercase tracking-[3px] text-orange-500">
                Our Special Menu
              </p>
              <h2 className="mt-1 text-3xl font-black md:text-4xl">
                Popular <span className="text-[#e99b16]">Delicious Food</span>
              </h2>
            </div>
            <button
              onClick={() => goToMenuWithCategory("All")}
              className="text-sm font-bold text-orange-600 hover:underline"
            >
              See Full Menu →
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {foods.map((food) => (
              <div
                key={food.name}
                className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-orange-50 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden rounded-[17px]">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="h-40 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-[#e99b16] px-2.5 py-1 text-[10px] font-bold text-white">
                    {food.tag}
                  </span>
                  <span className="absolute right-2 top-2 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-semibold text-white">
                    {food.stock} left
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                  <div className="flex items-start justify-between gap-1">
                    <h3 className="text-base font-black leading-6">
                      {food.name}
                    </h3>
                    <span className="shrink-0 text-xs text-orange-500">
                      ★★★★★
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    Fresh, tasty and delicious.
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-2 pt-5">
                    <p className="text-xl font-black text-[#d98b10]">
                      ${food.price}
                    </p>

                    <button
                      onClick={() => addToCart(food, 1)}
                      className="rounded-full bg-[#fff1d4] px-3.5 py-2 text-xs font-bold text-orange-600 transition hover:bg-[#e99b16] hover:text-white active:scale-95"
                    >
                      Order +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
