import React from "react";

function About({ setActiveView }) {

    const features = [
        {
            emoji: "🥗",
            title: "Fresh Ingredients",
            desc: "We use fresh and quality ingredients every day.",
        },
        {
            emoji: "🚀",
            title: "Fast Delivery",
            desc: "Enjoy your favorite meals delivered quickly.",
        },
        {
            emoji: "👨‍🍳",
            title: "Expert Chefs",
            desc: "Our chefs prepare every meal with care.",
        },
        {
            emoji: "💰",
            title: "Affordable Prices",
            desc: "Delicious food at prices everyone can enjoy.",
        },
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

    const statistics = [
        { number: "4", label: "PHNOM PENH BRANCHES" },
        { number: "20 min", label: "AVERAGE PREP & DISPATCH" },
        { number: "50K+", label: "SATISFIED FOODIES" },
        { number: "4.9 ★", label: "CUSTOMER RATING" },
    ];

    return (
        <div className="overflow-hidden bg-[#FFF9E9] text-[#172033]">

            {/* ABOUT HERO */}
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#FFF5D9] via-[#FFFDF4] to-[#EAF4D9] px-6 py-16 md:py-24">

                {/* FOOD BACKGROUND DECORATION */}
                <div className="pointer-events-none absolute -left-20 top-0 -z-10 h-80 w-80 rounded-full bg-[#43A526]/15 blur-3xl" />

                <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#FF9B35]/15 blur-3xl" />

                <div className="pointer-events-none absolute left-4 top-10 text-7xl opacity-20">
                    🌿
                </div>

                <div className="pointer-events-none absolute bottom-8 left-10 text-6xl opacity-20">
                    🥬
                </div>

                <div className="pointer-events-none absolute right-8 top-12 text-6xl opacity-20">
                    🍃
                </div>

                <div className="pointer-events-none absolute bottom-10 right-8 text-6xl opacity-20">
                    🍅
                </div>

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

                    {/* LEFT CONTENT */}
                    <div>

                        <span className="font-bold uppercase tracking-[4px] text-[#43A526]">
                            About KhmerFood
                        </span>

                        <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
                            We Make Your
                            <span className="block text-orange-500">
                                Food Experience
                            </span>
                            Special
                        </h1>

                        <p className="mt-6 leading-7 text-gray-600">
                            At KhmerFood, we believe good food brings people
                            together. We prepare delicious meals with fresh
                            ingredients, care, and passion.
                        </p>

                        <p className="mt-4 leading-7 text-gray-600">
                            From delicious soups to tasty rice dishes and
                            sweet desserts, we have something special for everyone.
                        </p>

                        <button
                            onClick={() => setActiveView("menu")}
                            className="mt-8 h-[45px] w-[180px] rounded-3 rounded-xl bg-orange-500 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#32851C]"
                        >
                            Order Now →
                        </button>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative">

                        <div className="rounded-[45px] bg-gradient-to-br from-orange-500 to-[#D6EAC6] p-2 shadow-xl md:p-3">

                            <img
                                src="https://i.pinimg.com/736x/0d/b2/d7/0db2d7df2d54107b2b5fa364dc2673f6.jpg"
                                alt="Delicious Khmer food"
                                className="h-[320px] w-full rounded-[35px] object-cover md:h-[420px]"
                            />
                             </div>

                        <div className="absolute -bottom-5 -left-5 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#FFF0D1] text-3xl shadow-lg">
                            🍜
                        </div>

                        <div className="absolute -right-4 -top-5 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#EAF5DE] text-3xl shadow-lg">
                            🥗
                        </div>

                    </div>
                </div>
            </section>


            {/* WHY CHOOSE US */}
            <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#FFFDF3] to-[#F0F7E8] px-4 py-20">

                <div className="pointer-events-none absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-[#43A526]/10 blur-3xl" />

                <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#F5B65B]/15 blur-3xl" />

                <div className="pointer-events-none absolute left-3 top-12 text-6xl opacity-10">
                    🍃
                </div>

                <div className="pointer-events-none absolute bottom-5 right-5 text-6xl opacity-10">
                    🌿
                </div>

                <div className="relative mx-auto max-w-7xl">

                    <div className="mb-12 text-center">

                        <p className="font-bold uppercase tracking-widest text-orange-500">
                            Why Choose Us
                        </p>

                        <h2 className="mt-2 text-3xl font-black md:text-4xl">
                            We Make Every Meal Special
                        </h2>

                        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#64748B]">
                            Quality food, excellent service and a delicious
                            experience in every order.
                        </p>

                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {features.map((item) => (

                            <div
                                key={item.title}
                                className="rounded-2xl border border-[#E5EEDB] bg-white/90 p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#43A526] hover:shadow-xl"
                            >

                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EFF8E9] text-4xl shadow-sm">
                                    {item.emoji}
                                </div>

                                <h3 className="mt-5 text-lg font-black">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                                    {item.desc}
                                </p>

                            </div>

                        ))}

                    </div>
                </div>
            </section>


            {/* CUSTOMER REVIEWS */}
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#FFF6E5] via-[#FFFCF4] to-[#F5F0DB] px-4 py-20">

                <div className="pointer-events-none absolute -left-20 top-0 -z-10 h-80 w-80 rounded-full bg-[#F4A340]/10 blur-3xl" />

                <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#43A526]/10 blur-3xl" />

                <div className="pointer-events-none absolute left-4 top-10 text-6xl opacity-10">
                    🥬
                </div>

                <div className="pointer-events-none absolute bottom-10 right-5 text-6xl opacity-10">
                    🍅
                </div>

                <div className="relative mx-auto max-w-7xl">

                    <div className="mb-10 text-center">

                        <p className="font-bold uppercase tracking-widest text-orange-500">
                            Customer Reviews
                        </p>

                        <h2 className="mt-2 text-3xl font-black md:text-4xl">
                            What Our Customers Say
                        </h2>

                        <p className="mt-3 text-sm text-[#64748B]">
                            We are happy when you are happy!
                        </p>

                    </div>

                    <div className="grid gap-6 md:grid-cols-3">

                        {reviews.map((review) => (

                            <div
                                key={review.name}
                                className="rounded-2xl border border-[#F0E5D1] bg-white/95 p-7 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="text-xl tracking-wider text-orange-500">
                                    ★★★★★
                                </div>

                                <p className="mt-4 text-sm leading-7 text-[#64748B]">
                                    "{review.review}"
                                </p>

                                <div className="mt-6 flex items-center gap-3">

                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="h-12 w-12 rounded-full border-2 border-[#EAF3E4] object-cover"
                                    />

                                    <div>

                                        <h3 className="font-black">
                                            {review.name}
                                        </h3>

                                        <p className="text-xs text-[#64748B]">
                                            Happy Customer
                                        </p>

                                    </div>

                                </div>
                            </div>

                        ))}

                    </div>
                </div>
            </section>


            {/* RESTAURANT STATISTICS */}
            <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#F0F7E8] to-[#FFF9E9] px-4 py-16">

                <div className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#43A526]/10 blur-3xl" />

                <div className="pointer-events-none absolute -right-20 top-0 -z-10 h-72 w-72 rounded-full bg-[#F5B65B]/10 blur-3xl" />

                <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-6 rounded-3xl border border-[#A5C77D] bg-gradient-to-r from-[#174900] via-[#286A08] to-[#174900] p-8 text-center text-white shadow-xl md:grid-cols-4">

                    {statistics.map((item) => (

                        <div key={item.label}>

                            <p className="text-3xl font-black text-[#D8F36B]">
                                {item.number}
                            </p>

                            <p className="mt-2 text-xs font-semibold text-slate-200">
                                {item.label}
                            </p>

                        </div>

                    ))}

                </div>
            </section>

        </div>
    );
}

export default About;