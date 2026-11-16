const initialOrders = [
  {
    id: "#ORD-001",
    customerName: "Sokha Tep",
    date: "2026-11-15",
    status: "Pending",
    total: 8.00,
    items: [
      { name: "Beef Lok Lak", quantity: 1, price: 5.00 },
      { name: "Iced Lime Tea", quantity: 2, price: 1.50 }
    ]
  },
  {
    id: "#ORD-002",
    customerName: "John Smith",
    date: "2026-11-15",
    status: "Preparing",
    total: 9.50,
    items: [
      { name: "Fish Amok", quantity: 1, price: 4.50 },
      { name: "Bai Cha (Cambodian Fried Rice)", quantity: 1, price: 3.00 },
      { name: "Fresh Coconut", quantity: 1, price: 2.00 }
    ]
  },
  {
    id: "#ORD-003",
    customerName: "Bopha Chea",
    date: "2026-11-14",
    status: "Completed",
    total: 7.00,
    items: [
      { name: "Nom Banh Chok", quantity: 2, price: 2.50 },
      { name: "Num Ansom", quantity: 1, price: 2.00 }
    ]
  },
  {
    id: "#ORD-004",
    customerName: "Chanthou Meas",
    date: "2026-11-16",
    status: "Pending",
    total: 4.50,
    items: [
      { name: "Kuy Teav", quantity: 1, price: 3.00 },
      { name: "Kafeh Tuk Doh Koh", quantity: 1, price: 1.50 }
    ]
  },
  {
    id: "#ORD-005",
    customerName: "David Miller",
    date: "2026-11-16",
    status: "Preparing",
    total: 6.50,
    items: [
      { name: "Grilled Chicken", quantity: 1, price: 4.00, size: "Medium", spicyLevel: "Mild" },
      { name: "Pumpkin Custard", quantity: 1, price: 2.50 }
    ]
  },
  {
    id: "#ORD-006",
    customerName: "Sreyneath Nget",
    date: "2026-11-16",
    status: "Cancelled",
    total: 4.50,
    items: [
      { name: "Fried Fish", quantity: 1, price: 4.50 }
    ]
  },
  {
    id: "#ORD-007",
    customerName: "Vuthy Chhoeun",
    date: "2026-11-15",
    status: "Completed",
    total: 5.00,
    items: [
      { name: "Samlor Korko", quantity: 1, price: 3.50 },
      { name: "Tuk Ampov", quantity: 1, price: 1.50 }
    ]
  },
  {
    id: "#ORD-008",
    customerName: "Linda Seng",
    date: "2026-11-14",
    status: "Completed",
    total: 7.00,
    items: [
      { name: "Mee Cha", quantity: 1, price: 3.00, spicyLevel: "Hot" },
      { name: "Fresh Coconut", quantity: 1, price: 2.00 },
      { name: "Chek Ktis", quantity: 1, price: 2.00 }
    ]
  },
  {
    id: "#ORD-009",
    customerName: "Rithy Ouk",
    date: "2026-11-16",
    status: "Pending",
    total: 4.00,
    items: [
      { name: "Bai Sach Chrouk", quantity: 1, price: 2.50 },
      { name: "Iced Lime Tea", quantity: 1, price: 1.50 }
    ]
  },
  {
    id: "#ORD-010",
    customerName: "Michael Brown",
    date: "2026-11-15",
    status: "Preparing",
    total: 8.50,
    items: [
      { name: "Beef Lok Lak", quantity: 1, price: 5.00, spicyLevel: "Medium" },
      { name: "Chicken Soup", quantity: 1, price: 3.50 }
    ]
  },
  {
    id: "#ORD-011",
    customerName: "Sophea Kheng",
    date: "2026-11-13",
    status: "Completed",
    total: 4.50,
    items: [
      { name: "Bai Sach Moan", quantity: 1, price: 2.50 },
      { name: "Num Ansom", quantity: 1, price: 2.00 }
    ]
  },
  {
    id: "#ORD-012",
    customerName: "Piseth Ly",
    date: "2026-11-16",
    status: "Cancelled",
    total: 7.00,
    items: [
      { name: "Nom Banh Chok", quantity: 1, price: 2.50 },
      { name: "Fish Amok", quantity: 1, price: 4.50 }
    ]
  }
];

export default initialOrders;