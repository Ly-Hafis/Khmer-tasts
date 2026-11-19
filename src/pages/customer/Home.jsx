
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
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
    },
    {
      name: "Steamed Rice",
      category: "Rice",
      tag: "Popular",
      stock: 18,
      price: "1.50",
      image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600",
    },
    {
      name: "Chocolate Dessert",
      category: "Dessert",
      tag: "Special",
      stock: 12,
      price: "2.00",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
    },
    {
      name: "Asian Noodles",
      category: "Noodles",
      tag: "Favorite",
      stock: 30,
      price: "2.00",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600",
    },
    {
      name: "Fresh Orange Juice",
      category: "Drinks",
      tag: "Refreshing",
      stock: 40,
      price: "1.50",
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600",
    },
  ];

  const customers = [
    "https://i.pravatar.cc/100?img=12",
    "https://i.pravatar.cc/100?img=47",
    "https://i.pravatar.cc/100?img=33",
  ];

  const reviews = [
    {
      name: "Sophia",
      image: "https://i.pravatar.cc/100?img=44",
      review: "The food is delicious and fresh. I really love the taste!",
    },
    {
      name: "David",
      image: "https://i.pravatar.cc/100?img=12",
      review: "Great service, affordable prices and fast delivery.",
    },
    {
      name: "Emma",
      image: "https://i.pravatar.cc/100?img=47",
      review: "Amazing food! I will definitely order again.",
    },
  ];



  return (
    <div className="overflow-hidden bg-white text-[#101828]">

      {/* HERO SECTION - NEW BACKGROUND DESIGN */}
      <section className="relative isolate overflow-hidden bg-[#FFF8EE]">

        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 -z-10">

          {/* Orange gradient background */}
          <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#FFE0A8] opacity-60 blur-3xl" />

          <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#FFE6C4] opacity-70 blur-3xl" />

          <div className="absolute bottom-0 left-1/4 h-64 w-96 rounded-full bg-[#FFF0D5] blur-3xl" />

          {/* Decorative leaves */}
          <span className="absolute left-[3%] top-[20%] rotate-[-35deg] text-5xl opacity-50">
            🍃
          </span>

          <span className="absolute left-[45%] top-[12%] rotate-45 text-3xl opacity-40">
            🍃
          </span>

          <span className="absolute bottom-[20%] left-[40%] rotate-[-30deg] text-5xl opacity-40">
            🍃
          </span>

          <span className="absolute bottom-[12%] right-[5%] rotate-45 text-5xl opacity-50">
            🍃
          </span>

          {/* Decorative circles */}
          <div className="absolute right-[10%] top-[15%] h-20 w-20 rounded-full border border-[#F6C47C] opacity-40" />

          <div className="absolute bottom-[25%] left-[8%] h-16 w-16 rounded-full border border-[#F6C47C] opacity-40" />

          {/* Top orange curved decoration */}
          <div className="absolute -left-20 -top-36 h-72 w-[550px] -rotate-12 rounded-[50%] border-b-[25px] border-[#FFD18B] opacity-50" />

        </div>

        {/* Hero content */}
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20 lg:py-24">

          {/* LEFT CONTENT */}
          <div className="relative z-10">

            <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white/80 px-5 py-2 text-xs font-bold text-[#E60012] shadow-sm">
              ✨ Fresh & Delicious Every Day
            </span>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight text-[#172033] sm:text-5xl lg:text-6xl">
              Delicious Food

              <span className="relative mt-1 block text-[#E60012]">
                Made With Love
                <span className="absolute -right-2 top-0 text-3xl font-normal text-[#E60012] sm:right-10">
                  ♡
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-8 text-[#64748B] md:text-base">
              Enjoy delicious meals made from fresh ingredients.
              Discover your favorite food and experience something
              special with KhmerFood.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">



              <button
                onClick={() => goToMenuWithCategory("All")}
                className="h-10 w-36 rounded-lg bg-[#E60012] text-sm font-bold text-white shadow-md transition hover:bg-[#C4000F] rounded-5"
              >
                Order Food →
              </button>

              <button
                onClick={() => setActiveView("about")}
                className="h-10 w-36 rounded-lg border border-gray-200 bg-white text-sm font-bold text-[#101828] shadow-sm transition hover:border-[#E60012] hover:text-[#E60012] rounded-5"
              >
                About Us
              </button>



            </div>

            {/* HAPPY CUSTOMERS */}
            <div className="mt-10 flex items-center gap-4">

              <div className="flex -space-x-3">
                {customers.map((person, index) => (
                  <img
                    key={index}
                    src={person}
                    alt="Customer"
                    className="h-11 w-11 rounded-full border-[3px] border-white object-cover shadow-sm"
                  />
                ))}
              </div>

              <div>
                <p className="text-sm font-black text-[#172033]">
                  1,000+ Happy Customers
                </p>

                <p className="mt-1 text-xs text-[#64748B]">
                  Delicious food, happy people ❤️
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT FOOD IMAGE */}
          <div className="relative mx-auto w-full max-w-[540px]">

            {/* Image background glow */}
            <div className="absolute inset-8 rounded-full bg-[#F7C77D] opacity-40 blur-3xl" />

            {/* Decorative circle */}
            <div className="absolute -right-5 top-5 h-36 w-36 rounded-full border-[15px] border-[#FFDDA9] opacity-50" />

            {/* Food image */}
            <div className="relative z-10 overflow-hidden rounded-[45%_35%_40%_35%] border-[7px] border-white shadow-2xl">

              <img
                src="https://i.pinimg.com/736x/d4/95/a2/d495a283d71268a6a8368a4df5863cc1.jpg"
                alt="Delicious Khmer food"
                className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[440px]"
              />

            </div>

            {/* Discount badge */}
            <div className="absolute -right-2 top-8 z-20 rounded-full bg-[#E60012] px-7 py-5 text-base font-black text-white shadow-xl shadow-red-200 sm:right-0">
              20% OFF
            </div>

            {/* Small decoration */}

          </div>

        </div>

        {/* Bottom curved wave */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 120"
            className="block h-16 w-full md:h-24"
            preserveAspectRatio="none"
          >
            <path
              d="M0,75 C180,130 300,15 500,65 C700,120 850,20 1050,55 C1200,85 1320,30 1440,60 L1440,120 L0,120 Z"
              fill="#FFDDA9"
              fillOpacity="0.65"
            />
            <path
              d="M0,95 C200,35 350,120 550,85 C780,40 920,105 1120,75 C1280,50 1370,90 1440,65 L1440,120 L0,120 Z"
              fill="#FFF0D5"
            />
          </svg>
        </div>

      </section>

      {/* FOOD CATEGORIES */}
      <section className="relative bg-[#FFF8EE] px-4 pb-8 pt-5">

        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-5 rounded-[30px] border border-orange-100 bg-white px-6 py-6 shadow-sm md:gap-6">

          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => goToMenuWithCategory(category.name)}
              className="group flex items-center gap-3 transition duration-300 hover:-translate-y-1"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF3E5] text-3xl transition group-hover:bg-red-50">
                {category.emoji}
              </span>

              <span className="font-bold text-[#172033] transition group-hover:text-[#E60012]">
                {category.name}
              </span>
            </button>
          ))}

          <button
            onClick={() => goToMenuWithCategory("All")}
            className="w-[180px] h-[40px] rounded-5 rounded-xl bg-[#E60012] text-sm font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-[#C4000F]"
          >
            View All →
          </button>

        </div>
      </section>

      {/* FEATURED FOOD ITEMS */}
      <section className="bg-[#FFF8EE] px-4 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#E60012]">
                Our Selection
              </p>

              <h2 className="mt-2 text-2xl font-black text-[#101828] md:text-3xl">
                Featured Food Items
              </h2>

              <p className="mt-2 text-sm text-[#64748B]">
                Top-rated dishes prepared freshly every day.
              </p>
            </div>

            <button
              onClick={() => goToMenuWithCategory("All")}
              className="shrink-0 text-sm font-bold text-[#E60012] hover:underline"
            >
              See Full Menu →
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {foods.slice(0, 4).map((food) => (
              <div
                key={food.name}
                className="group overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-[#E60012] px-3 py-1 text-xs font-bold text-white">
                    {food.tag}
                  </span>

                  <span className="absolute right-3 top-3 rounded-lg bg-white px-2 py-1 text-xs font-bold text-[#101828] shadow-sm">
                    {food.stock} left
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="font-black text-[#101828]">
                    {food.name}
                  </h3>

                  <p className="mt-2 min-h-10 text-sm text-[#64748B]">
                    Fresh, tasty and delicious food prepared
                    with quality ingredients.
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-gray-100 pt-3">
                    <span className="text-lg font-black text-[#E60012]">
                      ${food.price}
                    </span>

                    <div className="flex gap-1">
                      <button
                        onClick={() => goToMenuWithCategory(food.category)}
                        className="rounded-lg border border-gray-300 rounded-4 w-[80px] h-[30px font-semibold text-[#101828] transition hover:border-[#E60012] hover:text-[#E60012]"
                      >
                        Details
                      </button>

                      <button
                        onClick={() => addToCart(food, 1)}
                        className="rounded-lg bg-[#E60012] rounded-4 w-[80px] h-[30px] text-2xl text-white transition hover:bg-[#C4000F] active:scale-95"
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}

      {/* CUSTOMER REVIEWS */}



    </div>
  );
}

export default Home;
