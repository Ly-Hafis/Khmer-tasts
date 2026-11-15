import React, { useState } from 'react';
import FootCard from '../../components/FootCard';
import products from '../../data/products';
import cate from '../../data/categories';
import SearchBar from '../../components/SearchBar';

const Menu = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filterFood = products.filter((food) => {
    const matchSearch = food.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || food.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
    
      <div className="relative w-full h-[380px] md:h-[430px] overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3JWHYQE2HzJABwooqKSFi5gqDVRtZ3kZ0G_wbyRmFN9eS3MfMKgd9wJtM&s=10"
          alt="Angkor Wat Khmer Restaurant"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/50"></div> */}

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
            Our Delicious Khmer Food
          </h1>

          <p className="mt-3 text-gray-200 text-base md:text-lg">
            Enjoy the Authentic Taste of Cambodia
          </p>

          <div className="w-full max-w-md mt-7">
            <SearchBar search={search} setSearch={setSearch} />
          </div>
        </div>
      </div>

      {/* Category  */}
      <div className="w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-nowrap justify-start gap-3 overflow-x-auto scrollbar-hide items-center">
            {cate.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2.5 text-sm shrink-0 transition whitespace-nowrap rounded-lg font-medium ${
                  category === cat
                    ? "bg-orange-500 text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Food Card  */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10">
        {filterFood.length === 0 ? (
          <div className="text-center py-16 text-gray-500 text-lg">
            No food items found matching "{search}".
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filterFood.map((item) => (
              <FootCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
