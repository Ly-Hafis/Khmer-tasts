const products = [
  // Main Dish
  {
    id: 1,
    name: "Beef Lok Lak",
    category: "Main Dish",
    price: 5.00,
    img: "https://i.pinimg.com/1200x/eb/d4/98/ebd498a87b42d30029e38cbb0d7c9aa6.jpg",
    description: "Stir-fried beef with fresh vegetables and pepper sauce",
    ingredients: [
      "Beef",
      "Tomato",
      "Onion",
      "Lettuce",
      "Pepper"
    ],
    spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
    cookingTime: "15-20minutes",
    sizes: [
      { name: "Small", price: 0 },
      { name: "Medium", price: 2 },
      { name: "Large", price: 4 }

    ]

  },
  {
    id: 2,
    name: "Fish Amok",
    category: "Main Dish",
    price: 4.50,
    img: "https://i.pinimg.com/1200x/8e/2d/49/8e2d49b3301f29bb88a03d6f06047354.jpg",
    description: "Traditional Cambodian fish curry steamed with coconut milk",
    ingredients: [
      "Fish",
      "Coconut Milk",
      "Kroeung",
      "Egg",
      "Banana Leaf"
    ],
    spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
    cookingTime: "30-40minutes",
    sizes: [
      { name: "Small", price: 0 },
      { name: "Medium", price: 2 },
      { name: "Large", price: 4 }
    ],
  },
  {
    id: 3,
    name: "Grilled Chicken",
    category: "Main Dish",
    price: 4.00,
    img: "https://i.pinimg.com/1200x/3f/26/16/3f2616a1be606104fd1e73303e20a9a5.jpg",
    description: "Juicy grilled chicken served with Khmer dipping sauce",
    ingredients: [
      "Chicken",
      "Lemongrass",
      "Kaffir lime leaves",
      "Black pepper",
      "vegetable"
    ],
    spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
    cookingTime: "30-60minutes",
    sizes: [
      { name: "Small", price: 0 },
      { name: "Medium", price: 2 },
      { name: "Large", price: 4 }
    ],
  },
  {
    id: 4,
    name: "Fried Fish",
    category: "Main Dish",
    price: 4.50,
    img: "https://i.pinimg.com/736x/43/e7/67/43e767552a3da9d6d46408ff18894f41.jpg",
    description: "Crispy fried fish served with fresh vegetables",
    ingredients: [
      "Fish",
      "vagetable",
      "Sauce",
      "Mango Salad Topping"
    ],
    spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
    cookingTime: "15-20minutes",
    sizes: [
      { name: "Small", price: 0 },
      { name: "Medium", price: 2 },
      { name: "Large", price: 4 }
    ],
  },

  // Soup
  {
    id: 5,
    name: "Samlor Korko",
    category: "Soup",
    price: 3.50,
    img: "https://i.pinimg.com/736x/55/3b/0c/553b0cdad4655861edf2e2b12762f136.jpg",
    description: "Traditional Khmer vegetable soup with prahok",
    ingredients: [
      "Fish",
      "vagetable & Unripe Fruits",
      "Prahok",
      "Spice Base"
    ],
    spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
    cookingTime: "15-20minutes",
    sizes: [
      { name: "Small", price: 0 },
      { name: "Medium", price: 2 },
      { name: "Large", price: 4 }
    ],
  },
  {
    id: 6,
    name: "Samlor Machu",
    category: "Soup",
    price: 3.00,
    img: "https://i.pinimg.com/1200x/75/68/cb/7568cb0a712c23af4495c2502b511520.jpg",
    description: "Traditional sour soup with fish and fresh vegetables",
    ingredients: [
      "Beef , pork ribs, or chicken",
      "vagetable ",
      "Prahok",
      "Spice Base"
    ],
    spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
    cookingTime: "15-20minutes",
    sizes: [
      { name: "Small", price: 0 },
      { name: "Medium", price: 2 },
      { name: "Large", price: 4 }
    ],
  },
  {
    id: 7,
    name: "Chicken Soup",
    category: "Soup",
    price: 3.50,
    img: "https://i.pinimg.com/1200x/44/6c/69/446c693d49e0ae78cf80f1f7acc29feb.jpg",
    description: "Warm chicken soup with herbs and vegetables",
    ingredients: [
      "chicken",
      "cilantro ",
      "Lemongrass",
      "Kaffir lime",
      "lemon"
    ],
    spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
    cookingTime: "10-40minutes",
    sizes: [
      { name: "Small", price: 0 },
      { name: "Medium", price: 2 },
      { name: "Large", price: 4 }
    ],
  },

  // Noodle
  {
    id: 8,
    name: "Nom Banh Chok",
    category: "Noodle",
    price: 2.50,
    img: "https://i.pinimg.com/1200x/d3/b1/30/d3b130cac83df1091ccec611e3c03fef.jpg",
    description: "Khmer rice noodles with green fish curry",
    ingredients: [
      "Fish",
      "Fresh Rice Noodles ",
      "Prahok",
      "Coconut Milk",
      "Fresh Garnishes & Vegetables"
    ],
    spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
    cookingTime: "10-40minutes",
    sizes: [
      { name: "Small", price: 0 },
      { name: "Medium", price: 2 },
      { name: "Large", price: 4 }
    ],
  },
  {
    id: 9,
    name: "Kuy Teav",
    category: "Noodle",
    price: 3.00,
    img: "https://i.pinimg.com/236x/bb/66/ac/bb66ac63182f5d56d83336e1da2f7e73.jpg",
    description: "Cambodian noodle soup with pork and fresh herbs",
    ingredients: [
      "Rice Noodles",
      "Pork & Beef Broth",
      "Sliced Pork & Beef",
      "Beef Meatballs",
      "Bean Sprouts",
      "Fried Garlic & Shallots",
      "Scallions & Cilantro",
      "Lime Wedges"
    ],
    spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
    cookingTime: "10-40minutes",
    sizes: [
      { name: "Small", price: 0 },
      { name: "Medium", price: 2 },
      { name: "Large", price: 4 }
    ],
  },
  {
    id: 10,
    name: "Mee Cha",
    category: "Noodle",
    price: 3.00,
    img: "https://i.pinimg.com/1200x/1d/e3/ab/1de3ab1e40157e825250e79e51db0b8e.jpg",
    description: "Stir-fried noodles with vegetables and meat",
    ingredients: [
      "Yellow Egg Noodles",
      "Sliced Beef or Pork",
      "Egg",
      "Chinese Broccoli (Kailan)",
      "Cabbage & Carrots",
      "Bean Sprouts",
      "Garlic & Scallions",
      "Oyster & Soy Sauce"
    ],
    spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
    cookingTime: "10-20 minutes",
    sizes: [
      { name: "Small", price: 0 },
      { name: "Medium", price: 2 },
      { name: "Large", price: 4 }
    ]

  },

  // Rice
  {
    id: 11,
    name: "Bai Sach Chrouk",
    category: "Rice",
    price: 2.50,
    img: "https://i.pinimg.com/736x/2e/0e/de/2e0ede5f7851ccdf4e875fbff7809f7f.jpg",
    description: "Grilled pork rice served with pickled vegetables",
    ingredients: [
      "Broken Jasmine Rice",
      "Grilled Marinated Pork",
      "Pickled Daikon & Carrots",
      "Fresh Cucumber & Tomatoes",
      "Fried Egg (Optional)",
      "Scallion Oil",
      "Clear Chicken Broth",
      "Sweet Fish Sauce (Tuk Trey)"
    ],
    spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
    cookingTime: "15-30 minutes",
    sizes: [
      { name: "Small", price: 0 },
      { name: "Medium", price: 1.50 },
      { name: "Large", price: 3.00 }
    ]
  },
  {
    id: 12,
    name: "Bai Sach Moan ",
    category: "Rice",
    price: 2.50,
    img: "https://i.pinimg.com/1200x/d3/d3/ae/d3d3aeb1e0648a999260471eca854718.jpg",
    description: "Cambodian charcoal-grilled marinated chicken served over steamed jasmine rice with pickled vegetables and clear broth",
    ingredients: [
      "Steamed Jasmine Rice",
      "Grilled Marinated Chicken",
      "Pickled Daikon & Carrots",
      "Fresh Cucumber & Tomatoes",
      "Scallion Oil",
      "Clear Chicken Broth",
      "Sweet Fish Sauce (Tuk Trey)"
    ],
    spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
    cookingTime: "15-25 minutes",
    sizes: [
      { name: "Small", price: 0 },
      { name: "Medium", price: 1.50 },
      { name: "Large", price: 3.00 }
    ]
  },
  {
    id: 13,
    name: "Bai Cha (Cambodian Fried Rice)",
    category: "Rice",
    price: 3.00,
    img: "https://i.pinimg.com/1200x/ac/94/2f/ac942f6e3f1f9eca5fa2e5529cbe9121.jpg",
    description: "Traditional Cambodian wok-fried rice with Chinese sausage, egg, garlic, and crisp vegetables",
    ingredients: [
      "Jasmine Rice",
      "Chinese Sausage (Lap Chong) & Pork",
      "Egg",
      "Garlic & Scallions",
      "Chinese Broccoli & Carrots",
      "Soy & Oyster Sauce",
      "Fresh Cucumber & Tomatoes",
      "Lime & Chili Fish Sauce"
    ],
    spicyLevel: ["Not Spicy", "Mild", "Medium", "Hot"],
    cookingTime: "10-15 minutes",
    sizes: [
      { name: "Small", price: 0 },
      { name: "Medium", price: 1.50 },
      { name: "Large", price: 3.00 }
    ]
  },
  // Dessert
  {
    id: 14,
    name: "Num Ansom",
    category: "Dessert",
    price: 2.00,
    img: "https://i.pinimg.com/1200x/79/4d/a6/794da6e98b636e619c36efde3ae153da.jpg",
    description: "Traditional Cambodian sticky rice cake with banana",
    ingredients: [
      "Glutinous (Sticky) Rice",
      "Coconut Milk",
      "Mung Bean Paste",
      "Marinated Pork Belly or Ripe Banana",
      "Palm Sugar & Salt",
      "Garlic & Black Pepper (Savory Version)",
      "Banana Leaves"
    ],
    spicyLevel: ["Not Spicy"],
    cookingTime: "3-5 hours",
    sizes: [
      { name: "Small", price: 0 },
      { name: "Medium", price: 1.00 },
      { name: "Large", price: 2.00 }
    ]
  },
  {
    id: 15,
    name: "Pumpkin Custard",
    category: "Dessert",
    price: 2.50,
    img: "https://i.pinimg.com/1200x/2c/24/87/2c24879f806ec9c0bbf44259d9a0ad56.jpg",
    description: "Sweet pumpkin dessert with creamy coconut custard",
    ingredients: [
      "Kabocha Pumpkin",
      "Coconut Milk",
      "Duck or Chicken Eggs",
      "Palm Sugar",
      "Pandan Leaves",
      "Pinch of Salt"
    ],
    spicyLevel: ["Not Spicy"],
    cookingTime: "45-60 minutes",
    sizes: [
      { name: "Slice", price: 0 },
      { name: "Half", price: 2.00 },
      { name: "Whole", price: 4.50 }
    ]
  },
  {
    id: 16,
    name: "Chek Ktis",
    category: "Dessert",
    price: 2.00,
    img: "https://i.pinimg.com/1200x/92/e9/df/92e9df09a4a3f28428dbaba58be6f07e.jpg",
    description: "Sweet banana dessert with coconut milk",
    ingredients: [
      "Ripe Namwa Bananas (Chek Nam Va)",
      "Coconut Milk",
      "Small Tapioca Pearls (Sago)",
      "Palm Sugar",
      "Pandan Leaves",
      "Toasted Sesame Seeds",
      "Pinch of Salt"
    ],
    spicyLevel: ["Not Spicy"],
    cookingTime: "15-20 minutes",
    sizes: [
      { name: "Small", price: 0 },
      { name: "Medium", price: 1.00 },
      { name: "Large", price: 2.00 }
    ]
  },

  // Drink
  {
    id: 17,
    name: "Fresh Coconut",
    category: "Drink",
    price: 2.00,
    img: "https://i.pinimg.com/1200x/d1/d8/f4/d1d8f481f436234b4eb2b93f2ac5b3ef.jpg",
    description: "Fresh natural coconut water",
    ingredients: [
      "Young Green Coconut",
      "Natural Coconut Water",
      "Tender Coconut Meat",
      "Ice (Optional)"
    ],
    spicyLevel: ["Not Spicy"],
    cookingTime: "2-5 minutes",
    sizes: [
      { name: "Whole Coconut", price: 0 },
      { name: "Cup with Ice", price: 0.50 }
    ]
  },
  {
    id: 18,
    name: "Kafeh Tuk Doh Koh (Iced Milk Coffee)",
    category: "Drink",
    price: 1.50,
    img: "https://i.pinimg.com/736x/93/4d/64/934d641669d7a2c6a046516857db616d.jpg",
    description: "Strong dark-roasted Cambodian coffee brewed slow and poured over sweetened condensed milk and ice",
    ingredients: [
      "Roasted Cambodian Coffee Grounds",
      "Sweetened Condensed Milk",
      "Hot Water",
      "Ice"
    ],
    spicyLevel: ["Not Spicy"],
    cookingTime: "3-5 minutes",
    sizes: [
      { name: "Regular", price: 0 },
      { name: "Large", price: 0.50 }
    ]
  },
  {
    id: 19,
    name: "Tuk Ampov (Fresh Sugarcane Juice)",
    category: "Drink",
    price: 1.50,
    img: "https://i.pinimg.com/736x/6e/aa/aa/6eaaaacda157ad5f4b631d4481b8ad8e.jpg",
    description: "Freshly pressed Cambodian sugarcane juice with a bright squeeze of kumquat or lime over ice",
    ingredients: [
      "Fresh Sugarcane",
      "Kumquat or Lime Juice",
      "Pinch of Salt",
      "Ice"
    ],
    spicyLevel: ["Not Spicy"],
    cookingTime: "2-5 minutes",
    sizes: [
      { name: "Regular", price: 0 },
      { name: "Large", price: 0.50 }
    ]
  },
  {
    id: 20,
    name: " Iced Lime Tea",
    category: "Drink",
    price: 1.50,
    img: "https://i.pinimg.com/736x/ad/58/6d/ad586dcd632b10d4902c9f571691078e.jpg",
    description: "Refreshing Cambodian iced red tea sweetened with palm sugar or condensed milk and fresh lime",
    ingredients: [
      "Ceylon or Red Tea Leaves",
      "Sweetened Condensed Milk or Sugar",
      "Fresh Lime Juice",
      "Ice"
    ],
    spicyLevel: ["Not Spicy"],
    cookingTime: "3-5 minutes",
    sizes: [
      { name: "Regular", price: 0 },
      { name: "Large", price: 0.50 }
    ]
  }

];

export default products;